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

  input bookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    

  type User {
    _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
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
      login(email: String!, password: String!): Auth
      addBook(bookData: bookInput!): User
      removeBook(bookId: ID): User
   }
`;

module.exports = typeDefs;