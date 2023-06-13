const { gql } = require('apollo-server-express');
// create our typeDefs here
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        posts: [posts]
        comments: [comments]
    }

    type Posts {
        _id: ID
        text: String
        createdBy: ID
        createdOn: String
        comments: [comments]
        dislikes: Number
    }
    
    type: Comments {
        _id: ID
        text: String
        CreatedBy: String
        CreatedOn: String
        post: ID
    }
`

module.exports = typeDefs; // export typeDefs
