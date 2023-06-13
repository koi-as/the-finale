const { Schema, model, Types } = require('mongoose')

const commentSchema = new Schema({
    commentId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId
    },
    commentBody: {
        type: String,
        required: true,
        max_length: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false
})

const postShema = new Schema({
    postText: {
        type: String,
        required: true,
        max_length: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    username: {
        type: String,
        required: true,
    },
    comments: [commentSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
})

postSchema
.virtual('commentCount')
.get(function() {
    return this.reactions.length
})

const Post = model('post', postShema)

module.exports = Post