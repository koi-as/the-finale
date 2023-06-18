const {model, Schema, Types} = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
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
    return this.followers.length;
  });


// username: String,
// password: String,
// email: String,
// createdAt: String,
// posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
// });

// Pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
//   Compare incoming password with hashed password
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = model('User', userSchema);

module.exports = User;