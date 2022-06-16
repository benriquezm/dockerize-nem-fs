const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Rating {
        rate: Float!
        count: Float!
    }

    type Product {
        id: Int!,
        title: String!
        price: Float!
        description: String!
        category: String!
        image: String!
        rating: Rating!
    }

    type Query {
        products: [Product]
        product(productId: Int!): Product
    }
`;

module.exports = { typeDefs };
