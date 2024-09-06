import mongoose from 'mongoose'
import { friendSchema } from './friend.schema.js'
const FriendModel=mongoose.model('friendmodel',friendSchema)
export default class FriendRepository{
    static async getPendingRequest(){

    }
}