import { Request, Response, NextFunction } from 'express';

const ALLOWED_ORIGINS = [
  process.env.APP_BACKEND,
  process.env.APP_FRONT,
];

export const customCors = (req: Request, res: Response, next: NextFunction) => {
  if (ALLOWED_ORIGINS.indexOf(req.headers.origin) > -1) {
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Origin', req.headers.origin);
  } else {
    res.set('Access-Control-Allow-Origin', '*');
  }
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
};
