/**
 * Logger utility for the extension
 * Provides standardized logging methods with timestamps and log levels
 */

export enum LogLevel {
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    DEBUG = 'DEBUG'
}

interface LogMessage {
    timestamp: string;
    level: LogLevel;
    message: string;
    data?: unknown;
}

/**
 * Formats a log message with timestamp and level
 */
const formatLogMessage = (level: LogLevel, message: string, data?: unknown): LogMessage => ({
    timestamp: new Date().toISOString(),
    level,
    message,
    data
});

/**
 * Logs a message to the console with appropriate styling
 */
const logToConsole = (logMessage: LogMessage): void => {
    const { timestamp, level, message, data } = logMessage;
    const style = {
        [LogLevel.INFO]: 'color: #2196F3',
        [LogLevel.WARN]: 'color: #FFC107',
        [LogLevel.ERROR]: 'color: #F44336',
        [LogLevel.DEBUG]: 'color: #9E9E9E'
    }[level];

    console.log(
        `%c[${timestamp}] ${level}: ${message}`,
        style,
        data ? data : ''
    );
};

export const logger = {
    info: (message: string, data?: unknown): void => {
        logToConsole(formatLogMessage(LogLevel.INFO, message, data));
    },
    warn: (message: string, data?: unknown): void => {
        logToConsole(formatLogMessage(LogLevel.WARN, message, data));
    },
    error: (message: string, data?: unknown): void => {
        logToConsole(formatLogMessage(LogLevel.ERROR, message, data));
    },
    debug: (message: string, data?: unknown): void => {
        logToConsole(formatLogMessage(LogLevel.DEBUG, message, data));
    }
}; 