const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book{
    _id: ID!
    title: String!
    description: String
    image: String
    link: String
    bookId: String!
    authors: [String!]
  }

  type User {
    _id: ID!
    username: String
    bookCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
   # book: [Book]
   # user(_id: String): [User]
    me: User
  }

   type Mutation {
      addUser(username: String!, email: String!, password: String!): Auth
      # function name/expected input parameters / return value
#     createMatchup(tech1: String!, tech2: String!): Matchup
#     createVote(_id: String!, techNum: Int!): Matchup
   }
`;

module.exports = typeDefs;