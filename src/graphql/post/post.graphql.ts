export default `
directive @auth on FIELD_DEFINITION

type Post {
  id: ID
  title: String
  text: String
}

type Query {
  posts: String @auth
}
`