import mongoose from 'mongoose'
import { likeSchema } from './like.schema.js'
export const LikeModel = mongoose.model('likerepository', likeSchema)
export default class LikeRepository {
    static async getLikes(userId) {
        const result = await LikeModel.find(userId)
        return result.likeable;
    }
    static async toggleLikes(userId, itemId, type) {
        const result = await LikeModel.findOneAndUpdate(
            {
            userId:userId,
            $likeable:
            {
            $contains:itemId,
            }
         },// the was the finding part of the query
          {// this is the updation part of the array
            $cond: {
                $if: {
                    // $likeable[on_model]: { $eq: type }
                },
                $then: {
                    $if: {
                        $eq: 'like'
                    },
                    $then: {
                        $set: 'unlike'
                    },
                    $else: {
                        $set: 'like'
                    }
                },
            }
        }// updation part ending here only
        );
        return result;
    }

}
