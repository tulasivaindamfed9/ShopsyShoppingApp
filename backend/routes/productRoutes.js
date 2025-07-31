// express router helps in code readability and divide code into diff components => same like in front end react-router-dom
// importing express router from express
const express=require('express')
const router=express.Router()
// import model product
const Products=require('../models/products.js')

router.get('/',async(req,res)=>{
  try{
       const response=await Products.find()
       console.log(response)
       res.status(200).json(response)
  }catch(err){
    res.status(500).json({error:"Internal server error"})
  }
 
})

module.exports=router