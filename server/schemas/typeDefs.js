const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book{
    _id: ID!
    name: String!
  }

  type User {
    _id: ID!

  }

  type Query {
    book: [Book]
    user(_id: String): [User]
  }

#   type Mutation {
#     createMatchup(tech1: String!, tech2: String!): Matchup
#     createVote(_id: String!, techNum: Int!): Matchup
#   }
`;

module.exports = typeDefs;