const express=require("express");
const router=express.Router();
const path=require("path");
const fs=require("fs");

const viewPath=path.join(__dirname,"../","html")

const data=[
    {
        name:"Priyank",
    occupation:"student"
    },
    {
        name:"Jahnavi",
    occupation:"teacher"
    }
]

const data2=[
 "Noman",
 "Joe"
]
router.get("/",(req,res)=>{
   // console.log();


   res.render("home");
})


router.get("/data",(req,res)=>{
    // console.log();
 
    fs.readFile("./db/db.json","utf-8",(err,result)=>{
        if(err){
            res.send("Error")
            return
        }

       // console.log(result);
        res.render("data",{name:"shubham",list:JSON.parse(result)});

    })
 
 })
 



module.exports=router;