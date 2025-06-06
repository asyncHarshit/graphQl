// this fill will tell that the structure of the data

import gql from "graphql-tag";

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
    inStock: Boolean!
  }

  type Query {
  products : [Product!]!
  product(id:ID!):Product
  }
`;

export {typeDefs}