const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    followers: [{ //Might need to change for follower count.
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
})

userSchema
.virtual('Followers')
.get(function() {
    return this.followers.length
})

const User = model('user', userSchema)

module.exports = User