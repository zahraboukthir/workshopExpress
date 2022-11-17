const express = require("express");
// const productFiter=require("./productFilter")
const app = express();
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 7000;
// const products=require('./products')
// app.get("/", (req, res) => {
//   res.send("hello");
// });
// app.get("/home", (req, res) => res.sendFile(__dirname + "/Public/home.html"));
app.use((req,res,next)=>{
  
})
app.use(express.static(path.join(__dirname, "Public")));
// app.get("/products",(req,res)=>res.send({products}))
// app.use(productFiter)
app.use("/products",require("./ProductsRoutes"))

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server is runnig on port ${port}`)
);
