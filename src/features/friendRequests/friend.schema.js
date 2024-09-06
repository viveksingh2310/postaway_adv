import mongoose from 'mongoose'
export const friendSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sent: [// the user can send request to multiple other users, we can also add the functionality to cancel the sent request to a specific friend later on
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    friends: [// the toggle status of the friendship with other person
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            status:['Friend','Unfriend']
        }
    ],
    pending: [// here response-to-request function will get executed succesfully
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            status:{
                type:String,
                enum:['Pending','Rejected','Accepted']
            }
        }
    ]

})