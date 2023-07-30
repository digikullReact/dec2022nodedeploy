const express=require("express");
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("Product route");
})

router.get("/data",(req,res)=>{
    res.send("Product Data route");
})


module.exports=router;