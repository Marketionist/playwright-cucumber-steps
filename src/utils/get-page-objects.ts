/* eslint no-void: off */

// #############################################################################

import { readdir, stat } from 'node:fs';
import { promisify } from 'node:util';
import path from 'node:path';

const spacesToIndent = 4;

const readdirP = promisify(readdir);
const statP = promisify(stat);

async function _readDirectory (
    directory: string, allFiles?: string[]
): Promise<string[]> {
    const files = (await readdirP(directory)).map((filePath) => {
        return path.join(directory, filePath);
    });
    const allFilesPaths = allFiles ?? [];

    allFilesPaths.push(...files);
    await Promise.all(
        files.map(async (f) => {
            return (await statP(f)).isDirectory() && _readDirectory(f, allFilesPaths);
        })
    );

    return allFilesPaths;
}

async function readDirectories (directories: string[]): Promise<string[]> {
    const allFilesPaths: string[] = [];

    (await Promise.all(
        directories.map(async (dir) => {
            const files = await _readDirectory(dir);

            return files;
        })
    )).map((value) => {
        allFilesPaths.push(...value);
    });

    return allFilesPaths;
}

const isCalledExternallyNpm = __dirname.includes('node_modules');
const isCalledExternallyPnpm = __dirname.includes(path
    .join('node_modules', '.pnpm'));
const pOFolderPath = process.env.PO_FOLDER_PATH!;

const pageObjectsFolderPathes = 'PO_FOLDER_PATH' in process.env ?
    pOFolderPath.replace(/\s+/g, '').split(',') :
    [path.join('tests', 'page-objects'),];

let fullPageObjectsFolderPathes: string[] = [];

if (isCalledExternallyPnpm) {
    fullPageObjectsFolderPathes = pageObjectsFolderPathes.map(
        (pageObjectsFolderPath) => {
            return path.join(__dirname, '..', '..', '..', '..', '..', '..', pageObjectsFolderPath);
        }
    );
} else if (isCalledExternallyNpm) {
    fullPageObjectsFolderPathes = pageObjectsFolderPathes.map(
        (pageObjectsFolderPath) => {
            return path.join(__dirname, '..', '..', '..', pageObjectsFolderPath);
        }
    );
} else {
    fullPageObjectsFolderPathes = pageObjectsFolderPathes.map(
        (pageObjectsFolderPath) => {
            return path.join(__dirname, '..', pageObjectsFolderPath);
        }
    );
}

// Require all Page Object files in directory
type PageObject = Record<string, Record<string, string>>;
const allPageObjects: PageObject = {};

void (async function requirePageObjects (): Promise<PageObject> {
    try {
        const allPageObjectFiles = await readDirectories(
            fullPageObjectsFolderPathes);
        const allRequiredPageObjects = allPageObjectFiles.filter(
            (value) => {
                return value.includes('page.ts');
            }
        );

        await Promise.all(
            allRequiredPageObjects.map(async (file) => {
                const fileName = path.basename(file, '.ts');
                let fileContent: any;

                try {
                    fileContent = require(file);
                } catch {
                    const { pathToFileURL, } = await import('node:url');

                    fileContent = await import(pathToFileURL(file).href);
                }

                allPageObjects[fileName] = fileContent.default ?? fileContent;

                return file;
            })
        );

        if (process.env.PRINT_PO !== undefined) {
            console.log(
                '\nPage Objects from PO_FOLDER_PATH:',
                `\n${JSON.stringify(allPageObjects, null, spacesToIndent)}\n\n`
            );
        }

        return allPageObjects;
    } catch (error) {
        throw error;
    }
})();

export const pageObjects = allPageObjects;
