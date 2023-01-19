import express from "express";
import {
  watch,
  edit,
  deleteVideo,
  upload,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", watch);
<<<<<<< HEAD
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
=======
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
>>>>>>> parent of 1e367a5 (edit video 1)

export default videoRouter;
