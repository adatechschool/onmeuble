const express = require("express");
const server = express();
const port = 3000;

require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

//const supabaseUrl = "https://gfllyyikdnoqlywlxiqr.supabase.co"
//const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmbGx5eWlrZG5vcWx5d2x4aXFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2Mzc4NTUsImV4cCI6MjAyNTIxMzg1NX0.93fTxP2mDET-7aXhIBFq5_vdeDNMsRQYCKsq_uVmpzs";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey)

module.exports.supabase = supabase; 

const productRouter = require("./routes/productRoute");

server.use(express.json());
server.use("/", productRouter);


server.listen(port, () => {
    console.log(`Le serveur est connecté et écoute le port ${port}`)
  })