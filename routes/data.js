const express=require("express");
const router=express.Router();

router.get("/", (req, res) => {
    res.send("hi there");

})


router.get("/data", (req, res) => {
    res.send("hi data");

})

// Getting request body
router.post("/data",(req,res)=>{

    console.log("Request body----",req.body);

   // fs.writeFile("")

   /**
    * res.setHeader("content-type","application/json");
    * res.write('{name:"shubham"}')
    * res.end()
    */

    res.json({
        name:"shubham"

    })

})

router.put("/data",(req,res)=>{
    /**
     * res.setHeader("content-type","application/json");
     * res.write('{name:"shubham"}')
     * res.end()
     */
 
     res.json({
         name:"Put request"
 
     })
 
 })


 router.delete("/data",(req,res)=>{
    /**
     * res.setHeader("content-type","application/json");
     * res.write('{name:"shubham"}')
     * res.end()
     */
 
     res.json({
         name:"Delete request"
 
     })
 
 })

 //query Params
 router.get("/query", (req, res) => {
    console.log(req.query);
    res.send("hi there");

})


// route params
router.get("/:id", (req, res) => {
    console.log(req.params.id);
    res.send("hi there");

})


module.exports=router;