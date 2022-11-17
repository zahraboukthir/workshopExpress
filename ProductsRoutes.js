const express=require("express");
const productFiter = require("./productFilter");
const products = require("./products");
const router=express.Router()

router.get("/:idprod", (req, res) => {
    const { idprod } = req.params;
    const prod = products.find((el) => el.id == idprod);
    if (prod) {
      res.send({ produit: prod });
    } else {
      res.status(400).send({ msg: "produit not found" });
    }
  });
  
  router.get("/",productFiter, (req, res) => {
    console.log()
    res.send({products:req.products})
  });
  module.exports=router