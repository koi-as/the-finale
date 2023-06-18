// import npm packages
const express = require('express'); // import express
const path = require('path'); // import path
const { ApolloServer } = require('apollo-server-express'); // import apollo-server-express
// import local files
const { typeDefs, resolvers } = require('./schemas');

const Post = require('./models/Post');
const User = require('./models/User');

// import db connection
const db = require('./config/connection')

const PORT = process.env.PORT || 9001; // you can change the port if you'd like, I just chose something that most likely wasn't being used

const server = new ApolloServer({ // instantiate the ApolloServer with our schema setup
  typeDefs,
  resolvers,
  persistedQueries: false
})

const app = express(); 
app.use(express.urlencoded({ extended: true })); // allow post requests
app.use(express.json()); // allow http requests

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// Added GET route for database seed posts.
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().populate('comments');
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Added POST route for posting to the database from the main feed.
app.post('/api/posts', async (req, res) => {
  try {
    const { username, content } = req.body;
    const newPost = await Post.create({ username, content });

    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a new post' });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create a new user' });
  }
});


const startApolloServer = async () => { // declare function named startApolloServer
  await server.start(); // start server
  server.applyMiddleware({ app });

  db.once('open', () => { // open db
    app.listen(PORT, () => { // listen to server
      console.log(`Use graphql at http://localhost:${PORT}${server.graphqlPath}`) // send a console message where the server is running at
    })
  })
}

startApolloServer(); // call the server start function