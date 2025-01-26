import 'dotenv/config';
import { createLogger, transports, format } from 'winston';

const env = process.env.NODE_ENV || 'development';

export const logger = createLogger({
  level: env === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    env === 'development'
      ? format.combine(
          format.colorize({ all: true }),
          format.printf(({ timestamp, level, message, stack }) => {
            if (stack) {
              return `${timestamp} [${level}]: ${message}\nError stack trace: ${stack}`;
            }
            return `${timestamp} [${level}]: ${message}`;
          })
        )
      : format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'logs/combined.log',
      level: 'debug',
    }),
  ],
});
