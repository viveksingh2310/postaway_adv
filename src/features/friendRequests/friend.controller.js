import FriendRepository from "./friend.repository.js";
export default class FriendController{
    static async getFriends(req,res){
        const userId=req.params;
        const result=FriendRepository.getFriends(userId)
        if(result)
            return res.status(200).send(result);
        else return res.status(500).send('a bad request is being made to get the friends lit of the desired user')
    }
    static async toggleFriendship(req,res){
const friendId=req.param;
const userId=req.body.userId;
const result=FriendRepository.toggleFriendship(userId,friendId)
if(result)
    return res.status(200).send(result)
else
return res.status(500).send('a bad request is being made to toggle the friendship')
    }
    static async responseRequest(req,res){
const friendId=req.param;
const userId=req.body.userId;
const response=req.body.response;
const result=FriendRepository.responseRequest(userId,friendId,response);
if(result)
    return res.status(200).send(result)
else return res.send(500).status('Bad request is being made for responding to the Friend Request')
    }
    static async getPendingRequests(req,res){
const userId=req.body.userId;
const result=FriendRepository.getPendingRequest(userId)
if(result)
    return res.status(200).send(result)
else
return res.status(500).send('Bad request id being made to get the pending friends requests')
    }
}