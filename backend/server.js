// importing express and storing it in app
const express = require("express");
const app = express();

const cors = require("cors"); // ✅ import CORS
require('dotenv').config()
// importing mongodb server
const db = require("./db");
const Products=require('./models/products')
// importing body-parser after installing it
const bodyParser = require("body-parser");
app.use(cors()); // ✅ allow all origins
app.use(bodyParser.json()); //req.body


const PORT=process.env.PORT ||8000

app.get('/',(req,res)=>{
  res.send("Welcome to shopsy")
})

// import routes
const productRoutes=require('./routes/productRoutes')

// use routes
app.use('/products',productRoutes)

// our server is active at port 3000 ie at adress http://localhost:3000
app.listen(PORT,()=>{
  console.log('Listening to port')
});
