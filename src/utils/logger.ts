/**
 * Centralized logger for the extension.
 */
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

let currentLogLevel: LogLevel = 'info';

export const logger = {
    setLogLevel: (level: LogLevel) => {
        currentLogLevel = level;
    },
    debug: (msg: string, ...args: unknown[]) => {
        if (['debug'].includes(currentLogLevel)) {
            console.debug(`[DEBUG] ${msg}`, ...args);
        }
    },
    info: (msg: string, ...args: unknown[]) => {
        if (['debug', 'info'].includes(currentLogLevel)) {
            console.info(`[INFO] ${msg}`, ...args);
        }
    },
    warn: (msg: string, ...args: unknown[]) => {
        if (['debug', 'info', 'warn'].includes(currentLogLevel)) {
            console.warn(`[WARN] ${msg}`, ...args);
        }
    },
    error: (msg: string, ...args: unknown[]) => {
        if (['debug', 'info', 'warn', 'error'].includes(currentLogLevel)) {
            console.error(`[ERROR] ${msg}`, ...args);
        }
    },
};