declare module 'node-testing-server' {
    export let nodeTestingServer: {
        config: {
            hostname: string,
            port: number,
            logsEnabled: number,
            pages: Record<string, string>,
        },
        start: () => Promise<void>,
        stop: () => Promise<void>,
    };
}
