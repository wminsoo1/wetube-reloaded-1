import express from "express";
import { getjoin, postjoin, login } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getjoin).post(postjoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

export default rootRouter;
