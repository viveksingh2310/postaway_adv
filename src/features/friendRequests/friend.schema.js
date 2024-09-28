import mongoose from 'mongoose';

export const friendSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true 
        }
    ],
    friends: [
        {
            _id: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            status: {
                type: String,
                enum: ['Friend', 'Unfriend'],
                default: 'Friend'
            }
        }
    ],
    pending: [
        {
            _id: { 
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            status: {
                type: String,
                enum: ['Pending', 'Rejected', 'Accepted'],
                default: 'Pending'
            }
        }
    ]
});
