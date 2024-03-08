const express = require("express");
const server = express();
const port = 3000;

require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

module.exports.supabase = createClient(supabaseUrl, supabaseKey)

const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");

server.use(express.json());

const authMiddleware = require('./middleware/authMiddleware');

server.use('/user', authMiddleware, userRouter);


server.use("/", productRouter);
server.use("/", userRouter)


server.listen(port, () => {
    console.log(`Le serveur est connecté et écoute le port ${port}`)
  })

