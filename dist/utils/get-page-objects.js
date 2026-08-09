"use strict";
/* eslint no-void: off */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageObjects = exports.pageObjectsPromise = void 0;
// #############################################################################
const promises_1 = require("node:fs/promises");
const node_path_1 = __importDefault(require("node:path"));
const spacesToIndent = 4;
async function _readDirectory(directory, allFiles) {
    const files = (await (0, promises_1.readdir)(directory)).map((filePath) => {
        return node_path_1.default.join(directory, filePath);
    });
    const allFilesPaths = allFiles ?? [];
    allFilesPaths.push(...files);
    await Promise.all(files.map(async (f) => {
        return (await (0, promises_1.stat)(f)).isDirectory() && _readDirectory(f, allFilesPaths);
    }));
    return allFilesPaths;
}
async function readDirectories(directories) {
    const allFilesPaths = [];
    (await Promise.all(directories.map(async (dir) => {
        const files = await _readDirectory(dir);
        return files;
    }))).map((value) => {
        allFilesPaths.push(...value);
    });
    return allFilesPaths;
}
const isCalledExternallyNpm = __dirname.includes('node_modules');
const isCalledExternallyPnpm = __dirname.includes(node_path_1.default
    .join('node_modules', '.pnpm'));
const pOFolderPath = process.env.PO_FOLDER_PATH;
const pageObjectsFolderPathes = 'PO_FOLDER_PATH' in process.env ?
    pOFolderPath.replace(/\s+/g, '').split(',') :
    [node_path_1.default.join('tests', 'page-objects'),];
let fullPageObjectsFolderPathes = [];
if (isCalledExternallyPnpm) {
    fullPageObjectsFolderPathes = pageObjectsFolderPathes.map((pageObjectsFolderPath) => {
        return node_path_1.default.join(__dirname, '..', '..', '..', '..', '..', '..', '..', pageObjectsFolderPath);
    });
}
else if (isCalledExternallyNpm) {
    fullPageObjectsFolderPathes = pageObjectsFolderPathes.map((pageObjectsFolderPath) => {
        return node_path_1.default.join(__dirname, '..', '..', '..', '..', pageObjectsFolderPath);
    });
}
else {
    fullPageObjectsFolderPathes = pageObjectsFolderPathes.map((pageObjectsFolderPath) => {
        return node_path_1.default.join(__dirname, '..', '..', pageObjectsFolderPath);
    });
}
const allPageObjects = {};
exports.pageObjectsPromise = (async function requirePageObjects() {
    try {
        const allPageObjectFiles = await readDirectories(fullPageObjectsFolderPathes);
        const allRequiredPageObjects = allPageObjectFiles.filter((value) => {
            const pattern = new RegExp('^.*-page.ts$', 'g');
            return pattern.test(value);
        });
        await Promise.all(allRequiredPageObjects.map(async (file) => {
            const fileName = node_path_1.default.basename(file, '.ts');
            let fileContent;
            try {
                fileContent = require(file);
            }
            catch {
                const { pathToFileURL, } = await import('node:url');
                fileContent = await import(pathToFileURL(file).href);
            }
            allPageObjects[fileName] = fileContent.default ?? fileContent;
        }));
        if (process.env.PRINT_PO !== undefined) {
            console.log('\nPage Objects from PO_FOLDER_PATH:', `\n${JSON.stringify(allPageObjects, null, spacesToIndent)}\n\n`);
        }
        return allPageObjects;
    }
    catch (error) {
        throw error;
    }
})();
exports.pageObjects = allPageObjects;
//# sourceMappingURL=get-page-objects.js.map