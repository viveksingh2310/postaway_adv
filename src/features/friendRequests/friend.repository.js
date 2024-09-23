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
    static async toggleFriendship(userId, friendId) {
        // Find the user document
        const user = await FriendModel.findById(userId);
    
        if (user) {
            // Find the friend in the user's friends list
            const friend = user.friends.find(f => f._id.equals(friendId));
    
            if (friend) {
                // Toggle the status between 'Friend' and 'Unfriend'
                friend.status = friend.status === 'Friend' ? 'Unfriend' : 'Friend';
            } else {
                // If friend is not in the list, add them as a new friend with status 'Friend'
                user.friends.push({ _id: friendId, status: 'Friend' });
            }
    
            // Save the updated user document
            await user.save();
            return user;
        } else {
            throw new Error("User not found");
        }
    }
    //function ending is here only
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