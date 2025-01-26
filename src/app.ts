import { logger } from "./middlewares/logger";
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import { requestLogger } from "./middlewares/requestLogger";
import appRouter from "./routes/database.routes";

logger.info(
  `Logger initialized with level: ${logger.level} for environment: ${process.env.NODE_ENV}`
);

export const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true}));
app.use(requestLogger);

app.use('/backend/api', appRouter)

app.get(`/health`, (req: Request, res: Response) => {
  logger.info('Health check OK');
  res.status(200).json({ code: 200, message: 'Health OK' });
});

app.use((err: Error, req: Request, res: Response, next: Function) => {
  logger.error(`Unhandler error: ${err.message}`);
  res.status(500).json({ error: 'Internal Server Error' });
});