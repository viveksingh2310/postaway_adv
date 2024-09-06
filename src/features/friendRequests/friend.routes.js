import { Router } from "express";
import FriendController from "./friend.controller.js";
const FriendRouter=new Router();
// api/friends
FriendRouter.get('/get-friends/:userId',FriendController.getFriends);
FriendRouter.get('/get-pendingRequest',FriendController.getPendingRequests);
FriendRouter.post('/toggleFriendship/:friendId',FriendController.toggleFriendship);// the frinedId's status will be changed here
FriendRouter.post('/response-to-request/:friendId',FriendController.responseRequest);//here the response to the friend request send by the specific friendid will be responsed 