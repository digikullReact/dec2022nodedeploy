const express=require("express");
const router=express.Router();
const path=require("path");

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
router.get("/",(req,res)=>{
   // console.log();


    res.sendFile(path.join(viewPath,"data.html"))
})

router.get("/product",(req,res)=>{
    console.log();


    res.sendFile(path.join(viewPath,"product.html"))
})


router.get("/users",(req,res)=>{

let dynamicData=``;

data.forEach(ele=>{
    dynamicData=dynamicData+`<li>Name -${ele.name} ,Occupation-${ele.occupation}<li>`

})
let htmlData=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Users</h1>
    ${dynamicData}
    
</body>
</html>`
 
res.send(htmlData)

})

module.exports=router;