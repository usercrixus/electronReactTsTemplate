export interface IPCVersion {
    node: () => String,
    chrome: () => String,
    electron: () => String,
}

export interface IPCLog {
    main: () => void,
}

declare global {
    interface Window {
        versions: IPCVersion;
        consoleOut: IPCLog;
    };
}