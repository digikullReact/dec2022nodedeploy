const express=require("express");
const router=express.Router();
const {saveData,getData,deleteData,getDataById,editData,aggregateSalary, getDataPagination}=require("../repository/mongodb");
const {verifyToken}=require("../middlewares/auth");

//router.use(verifyToken);
router.get("/",async  (req, res) => {

    const data=await getData()
    res.json({
        data:data
    })

})

router.get("/paginated",async  (req, res) => {
    //limit and pageNumber will be getting req query
    const pageNumber=req.query["page"];
    const limit=req.query["limit"];
    const search=req.query["search"];
    const sortOrder=req.query["sortOrder"]

   const data=await getDataPagination(pageNumber,limit,search,sortOrder);
    res.json({
        data:data[0],
        total:data[1]
    })

})

//






router.post("/", (req, res) => {
   saveData(req.body).then(result=>{
    res.json({
        message:"success",
        data:result
    })

   }).catch(err=>{
    console.log(err);
    res.json({
        message:"failed",
        data:null,
        err:err
    })
   })

  

  ///  console.log("Form incoming",req.body)

})

router.put("/:id",async  (req, res) => {
    req.body.id=req.params.id
    let data=await editData(req.body);

    res.json({
        message:"success",
        data:data
    })

  ///  console.log("Form incoming",req.body)

})

router.delete("/:id", async (req, res) => {
  
    let data=await deleteData(req.params.id);

    res.json({
        message:"succesfully deleted",
        data:data
    })

  ///  console.log("Form incoming",req.body)

})

router.get("/:id",async  (req, res) => {

    const data=await getDataById(req.params.id)
    res.json({
        data:data
    })

})

router.get("/aggregateSalary",async  (req, res) => {
   try {
    const data=await aggregateSalary()
    console.log(data);
    res.json("hii");
    
   } catch (error) {
    res.json({
        data:error.toString()
    })

    // console.log(error);
   }
   

})




// You have to create put and delete routes;



module.exports=router;
