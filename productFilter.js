
const products=require("./products")
const productFiter=(req,res,next)=>{

    const { pricemin } = req.query;
    if (pricemin) {
        const prodsF = products.filter((el) => el.price > pricemin);
        req.products=prodsF
        return next()
      } else {
      res.send({products})
      }
   
}

module.exports=productFiter

