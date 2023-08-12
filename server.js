const app=require("./app");
const {sequelize} = require("./repository/mysql");
const mongoose = require('mongoose');


const dbConnect=()=>{
    return  mongoose.connect('mongodb+srv://dbuser:E1yXLwftoemYcA42@cluster0.jkkvfwg.mongodb.net/?retryWrites=true&w=majority')
 
 
 }
 
 const mysqlConnect=()=>{
     return sequelize.authenticate();
       
 }
 

if (process.argv[2]=="mysql"){
    mysqlConnect().then(data=>{
        console.log("Connected with Mysql-------")
    
    app.listen("8080", () => {
        console.log("Server running at port 8080")
    })
    
    }).catch(err=>{
        console.log(err);
    })

}else{
    dbConnect().then(data=>{
        console.log("Connected with Mongdob----")
    
    app.listen("8080", () => {
        console.log("Server running at port 8080")
    })
    
    }).catch(err=>{
        console.log(err);
    })
    

}



 /*
dbConnect().then(data=>{
    console.log("Connected with Mongdob----")

app.listen("8080", () => {
    console.log("Server running at port 8080")
})

}).catch(err=>{
    console.log(err);
})


*/





// You have to create a post route which sends the product inoformation
//  /product -->POST route 
// {name:"productname",brand:"",stock:""};
// store it into file --->