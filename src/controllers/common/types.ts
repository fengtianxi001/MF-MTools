export interface processOptionsType {
    command: string,
    options?: Array<unknown>,
    onData?: (data: string, resolve: (value: unknown) => void, reject: (value: unknown) => void) => void,
    onClose?: (data: string) => void,
    onError?: (error: unknown) => void,
}