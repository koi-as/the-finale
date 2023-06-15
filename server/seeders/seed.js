const db = require('../config/connection');
const { User, Post } = require('../models');
const userSeed = require('./userSeed.json');
const postSeed = require('./postSeed.json');

db.once('open', async () => {
    console.log('We up in this database');
  try {
    // Delete existing data
    await User.deleteMany({});
    await Post.deleteMany({});

    const newUsers = await User.create(userSeed);
    const newPosts = await Post.create(postSeed);

    for (let i = 0; i < newPosts.length; i++) {
      const post = newPosts[i];
      const randomUserIndex = Math.floor(Math.random() * newUsers.length);
      const randomUser = newUsers[randomUserIndex];

      post.user = randomUser._id;
      randomUser.posts.push(post._id);

      await randomUser.save();
      await post.save();
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('The bitterbase has been defiled successfully.');
  process.exit(0);
});
