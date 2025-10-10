import "server-only";

import {
  pino,
  stdTimeFunctions,
  type Logger,
  type LoggerOptions,
  transport,
} from "pino";

function getLoggerTransport() {
  return transport({
    target: "pino-pretty",
  });
}

const globalForLogger = globalThis as {
  logger?: Logger;
  loggerTransport?: ReturnType<typeof getLoggerTransport>;
};

export const loggerTransport =
  globalForLogger.loggerTransport ?? getLoggerTransport();
globalForLogger.loggerTransport ??= loggerTransport;

function loggerSingleton(): Logger {
  const loggerOptions: LoggerOptions = {
    level: "info",
    timestamp: stdTimeFunctions.isoTime,
  };
  const logger = pino(loggerOptions, loggerTransport);

  return logger;
}

export const logger = globalForLogger.logger ?? loggerSingleton();
globalForLogger.logger ??= logger;
