import { Router } from "express";
import { testFunction } from "../controllers/database.controller";

const appRouter = Router();

appRouter.get('/test-endpoint', testFunction);

export default appRouter;