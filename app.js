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
const mysqlRoute=require("./routes/mysql_rest");

const {log}=require("./middlewares/middleware");
const fileUploadRoutes=require("./routes/fileUploadroutes");
const cors=require("cors");




// How to get 
// route params
// query params
app.use(cors());
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
app.use("/mysql",mysqlRoute);

app.use("/auth",authRoutes);
app.use("/file",fileUploadRoutes);




app.use("/products",productRouter)
app.use("/",rootRouter);

module.exports=app;