import 'dotenv/config';
import { app } from './app';
import { logger } from './middlewares/logger';

const port = process.env.API_PORT || 3000;
const baseUrl = process.env.APP_BACKEND || `http://localhost:${port}`;

app.listen(port, () => {
  logger.info(`Listening server on port -> ${baseUrl}`);
});
