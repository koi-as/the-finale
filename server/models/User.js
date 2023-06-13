const {model, Schema, Types} = require('mongoose')

const userSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//     },
//     posts: [{
//         type: Schema.Types.ObjectId,
//         ref: 'Post'
//     }],
//     followers: [{ //Might need to change for follower count.
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     }]
// },
// {
//     toJSON: {
//         virtuals: true,
//     },
//     id: false,
// })

// userSchema
// .virtual('Followers')
// .get(function() {
//     return this.followers.length
username: String,
password: String,
email: String,
createdAt: String
})

const User = model('User', userSchema)

module.exports = User