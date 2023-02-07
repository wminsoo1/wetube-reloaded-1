import express from "express";
import {
  getjoin,
  postjoin,
  getlogin,
  postlogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { publicOnlyMiddleware } from "../middlewares";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getjoin).post(postjoin);
rootRouter
  .route("/login")
  .all(publicOnlyMiddleware)
  .get(getlogin)
  .post(postlogin);
rootRouter.get("/search", search);

export default rootRouter;
