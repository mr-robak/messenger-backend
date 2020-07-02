const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const { PORT, DB_HOST_URL } = require("./config/constants");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const db = require("./models");
// const db = { User: "Marcin" };

const server = new ApolloServer({
  typeDefs,
  resolvers,

  context: ({ req }) => {
    return { db, req };
  },
});
const app = express();
server.applyMiddleware({ app });

// app.get("/", (req, res) => {
//   res.send(` Server listening at http://localhost:${PORT} `);
// });

app.listen({ port: PORT }, () =>
  console.log(`Server listening at http://${DB_HOST_URL}:${PORT}`)
);
