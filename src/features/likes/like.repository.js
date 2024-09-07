import mongoose from 'mongoose'
import {likeSchema} from './like.schema.js'
export const LikeRepository=mongoose.model('likerepository',likeSchema)
