export default `
type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    photo: String
  }

  input UserInput {
    name: String
    email: String
    password: String
    photo: String
  }


  type Query {
    users(page: Int, limit: Int, search: String, orderBy: String): [User] @auth
    user: User!
  }

  type Mutation {
    login(email: String, password: String): String
    createUser(input: UserInput): User
    updateUser(id: ID!, input: UserInput): User
    deleteUser(id: ID!): Boolean
  }
  `;