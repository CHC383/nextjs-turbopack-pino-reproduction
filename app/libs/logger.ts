import "server-only";

import { pino, stdTimeFunctions, type Logger, type LoggerOptions } from "pino";

function getLoggerOption(): LoggerOptions<never, boolean> {
  const loggerOptions: LoggerOptions = {
    level: "info",
    timestamp: stdTimeFunctions.isoTime,
  };

  return loggerOptions;
}

function loggerSingleton(): Logger {
  const loggerOptions = getLoggerOption();
  const logger = pino(loggerOptions);

  return logger;
}

const globalForLogger = globalThis as {
  logger?: Logger;
};
export const logger = globalForLogger.logger ?? loggerSingleton();
globalForLogger.logger ??= logger;
