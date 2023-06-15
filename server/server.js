// import npm packages
const express = require('express'); // import express
const path = require('path'); // import path
const { ApolloServer } = require('apollo-server-express'); // import apollo-server-express
// import local files
const { typeDefs, resolvers } = require('./schemas');
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
