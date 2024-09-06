export default class FriendController{
    static async getFriends(req,res){
        const userId=req.params;
    }
    static async toggleFriendship(req,res){
const friendId=req.param;
    }
    static async responseRequest(req,res){
const friendId=req.param;
    }
    static async getPendingRequests(req,res){
const userId=req.body.userId;
    }
}