const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./graphql/products/typeDefs");
const { resolvers } = require("./graphql/products/resolvers");

const app = express();

// method init server mode async
const start = async () => {
    //  create instance of ApolloServer
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });
    //  init Apollo Server
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    //  config others routes 404
    app.use("*", (req, res) => { res.status(404).send("Not found.") })

    app.listen(3000, () => {
        console.log("Server on port ", 3000);
    });
};

start();

module.exports = app;
