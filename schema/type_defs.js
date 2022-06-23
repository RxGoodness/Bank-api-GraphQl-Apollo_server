import { gql } from "apollo-server";
const typeDefs = gql`

type User {
    id: ID!
  name: String!
  username: String!
  age: Int!
  nationality: Nationality!
  friends: [User]
}
    type Query {
    users: [User!]!
    }

enum Nationality {
Canada
Germany
England
Brazil
Nigeria
}

   `;    
export default typeDefs;