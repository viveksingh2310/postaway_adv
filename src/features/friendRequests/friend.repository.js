import mongoose from 'mongoose';
import { friendSchema } from './friend.schema.js';

const FriendModel = mongoose.model('FriendModel', friendSchema);

export default class FriendRepository {
    static async getFriends(id) {
        try {
            const user = await FriendModel.findById(id);
            if (!user) {
                throw new Error("User not found");
            }
            return user.friends;
        } catch (error) {
            console.error('Error fetching friends:', error);
            throw error;
        }
    }
    static async toggleFriendship(userId, friendId) {
        try {
            const user = await FriendModel.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }
            const friend = user.friends.find(f => f._id.equals(friendId));
            if (friend) {
                friend.status = friend.status === 'Friend' ? 'Unfriend' : 'Friend';
            } else {
                user.friends.push({ _id: friendId, status: 'Friend' });
            }
            await user.save();
            return user;
        } catch (error) {
            console.error('Error toggling friendship:', error);
            throw error;
        }
    }
    static async responseRequest(userId, friendId, response) {
        try {
            const pendingRequests = await this.getPendingRequest(userId);
            if (pendingRequests && pendingRequests.some(req => req._id.equals(friendId))) {
                const request = pendingRequests.find(req => req._id.equals(friendId));
                request.status = response;
                await FriendModel.updateOne({ _id: userId }, { pending: pendingRequests });
                return response;
            } else {
                throw new Error("Pending request not found");
            }
        } catch (error) {
            console.error('Error responding to friend request:', error);
            throw error;
        }
    }
    static async getPendingRequest(userId) {
        try {
            const user = await FriendModel.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }
            return user.pending;
        } catch (error) {
            console.error('Error fetching pending requests:', error);
            throw error;
        }
    }
}
