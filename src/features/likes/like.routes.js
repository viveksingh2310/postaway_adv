import { Router } from "express";
import LikeController from "./like.controller.js";
const LikeRouter=new Router();
//api/likes/
LikeRouter.get('/:id',LikeController.getLikes);//only the userid
LikeRouter.post('/toggle/:id',LikeController.toggleLikes);//user,itemid,type in req.body
export default LikeRouter;
