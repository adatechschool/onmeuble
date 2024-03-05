const express = require("express");
const server = express();
const port = 3000;
const productRouter = require("./routes/productRoute");

server.use(express.json());
server.use("/", productRouter);

server.listen(port, () => {
    console.log(`Le serveur est connecté et écoute le port ${port}`)
  })