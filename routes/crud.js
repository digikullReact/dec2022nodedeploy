const express=require("express");
const router=express.Router();
const {saveData,getData,deleteData,getDataById,editData}=require("../repository/crud");

router.get("/", (req, res) => {
    res.render("form");

})




router.get("/viewData", (req, res) => {
    const data=getData();
    res.render("viewData",{list:data});

})

router.post("/", (req, res) => {
    saveData(req.body);
    res.redirect("/crud/viewData");

  ///  console.log("Form incoming",req.body)

})
router.post("/edit", (req, res) => {
    console.log(req.body);
    editData(req.body);
    res.redirect("/crud/viewData");

  ///  console.log("Form incoming",req.body)

})

router.post("/delete", (req, res) => {
    console.log(req.body)
    deleteData(req.body.id);
    res.redirect("/crud/viewData");

  ///  console.log("Form incoming",req.body)

})
router.get("/:id", (req, res) => {
    const id=req.params.id;
    let dataOfUser=getDataById(id)
    res.render("editForm",{data:dataOfUser});

})

module.exports=router;

// To complete the viewData page 
// show the data in table format
// Two buttons one on view data
// one on form