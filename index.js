const express = require("express");

const PORT = process.env.PORT || 4000;

const app = express();

// app.get("/", (req, res) => {
//   res.send(` Server listening at http://localhost:${PORT} `);
// });

app.listen({ port: PORT }, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
