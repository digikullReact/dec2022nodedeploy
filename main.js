const express = require("express");  // we are requirung express module
const app = express();  // We are calling express method to create an app object
const fs=require("fs");
const productRouter=require("./routes/product");
const rootRouter=require("./routes/data");
const htmlRoutes=require("./routes/html");
const {engine}=require("express-handlebars");
const templateEngineRoutes=require("./routes/templateengine");
const crudRoute=require("./routes/crud");
const authRoutes=require("./routes/authRoutes");
const restRoute=require("./routes/crud_rest");
const mongoose = require('mongoose');
const {log}=require("./middlewares/middleware");
const fileUploadRoutes=require("./routes/fileUploadroutes");



const dbConnect=()=>{
   return  mongoose.connect('mongodb+srv://dbuser:E1yXLwftoemYcA42@cluster0.jkkvfwg.mongodb.net/?retryWrites=true&w=majority')


}


// How to get 
// route params
// query params
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('uploads'))

app.use(log);// App level middleware
app.use(express.json());// its a middleware that parses the json body
app.use(express.urlencoded({extended:true}));
app.use("/html",htmlRoutes);
app.use("/template",templateEngineRoutes);
app.use("/crud",crudRoute);
app.use("/rest",restRoute);
app.use("/auth",authRoutes);
app.use("/file",fileUploadRoutes);




app.use("/products",productRouter)
app.use("/",rootRouter);




 
dbConnect().then(data=>{
    console.log("Connected with Mongdob----")

app.listen("8080", () => {
    console.log("Server running at port 8080")
})

}).catch(err=>{
    console.log(err);
})







// You have to create a post route which sends the product inoformation
//  /product -->POST route 
// {name:"productname",brand:"",stock:""};
// store it into file --->