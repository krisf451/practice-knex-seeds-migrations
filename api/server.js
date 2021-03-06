const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`sanity check passed`);
});

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
