const { gql } = require('apollo-server-express');

// create our typeDefs here
const typeDefs = gql`
    type Query{
        sayHi: String!
    }
`

module.exports = typeDefs; // export typeDefs
