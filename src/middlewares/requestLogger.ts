import { Request, Response, NextFunction } from 'express';
import { logger } from './logger';

const isProduction = process.env.NODE_ENV === 'production';

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  const { method, url, body, headers } = req;

  // Nivel básico de logging en producción
  if (isProduction) {
    logger.info(`Request: ${method} ${url}`);
  } else {
    logger.info(`Request: ${method} ${url}`);
    logger.debug(`Headers: ${JSON.stringify(headers)}`);
    if (body && Object.keys(body).length > 0) {
      // logger.debug(`Body: ${JSON.stringify(body)}`);
    }
  }

  res.on('finish', () => {
    logger.info(`Response: ${res.statusCode} for ${method} ${url}`);
  });

  next();
};
