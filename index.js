require("dotenv").config();
const express = require("express");

const port = process.env.PORT;

const app = express();

// app.get("/", (req, res) => {
//   res.send(` Server listening at http://localhost:${PORT} `);
// });

app.listen({ port }, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
