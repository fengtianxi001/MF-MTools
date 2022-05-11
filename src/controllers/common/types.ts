export interface processOptionsType {
    command: string,
    options?: {
        cwd?: string,
        detached?: boolean,
        env?: unknown,
        execPath?: string,
        execArgv?: Array<string>,
        gid?: number,
        serialization?: string,
        signal?: unknown,
        killSignal?: number,
        silent?: boolean,
        stdio?: Array<unknown> | string,
        uid?: number,
        timeout?: number
    },
    onData?: (data: string, resolve: (value: unknown) => void, reject: (value: unknown) => void) => void,
    onClose?: (data: string) => void,
    onError?: (error: unknown) => void,
    needLoading?: boolean,
    autoCloseLoading?: number
}