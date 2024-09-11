import mongoose from 'mongoose'
import { friendSchema } from './friend.schema.js'
const FriendModel=mongoose.model('friendmodel',friendSchema)
// userId sent friends pending
export default class FriendRepository{
    static async getFriends(id){
        const user=await FriendModel.findById(id);
        if(user)
            return user.friends;
    }
    static async toggleFriendship(userId,friendId){

        const friend=await FriendModel.updateMany(userId,
            {
             $cond:{
                $if:{
                    $friends:{$contains:friendId}
                },
                $then:{
                   $if:{
                    $eq:{
                    $friends[friendId].status:'Unfriend'}
                   },
                   $then:{
                    $set:{
                        $friends[friendId].status:'Friend'}
                    },
                    $else:{
                      $set:{
                        $friends[friendId].status:'Unfriend'}
                    }  
                    },
                   }
                }
            );
             }//function ending is here only
    static async responseRequest(userId,friendId,response){
        const result=this.getPendingRequest(userId);
        if(result.contains(friendId))
            result[friendId].status=response;
        return response;
    }
        static async getPendingRequest(userId){
            const result=FriendModel.findById(userId);
            if(result)
                return result.pending;//which would be an array of the pending requests
            else return
        }
}