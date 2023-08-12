const app=require("./app");
const {sequelize} = require("./repository/mysql");
const mongoose = require('mongoose');

const { createServer } = require("http");
const { Server } = require("socket.io");


const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
      origin: ["http://localhost:3000"]
    }
  });

const dbConnect=()=>{
    return  mongoose.connect('mongodb+srv://dbuser:E1yXLwftoemYcA42@cluster0.jkkvfwg.mongodb.net/?retryWrites=true&w=majority')
 
 
 }
 
 const mysqlConnect=()=>{
     return sequelize.authenticate();
       
 }
 

if (process.argv[2]=="mysql"){
    mysqlConnect().then(data=>{
        console.log("Connected with Mysql-------")
    
        httpServer.listen(8080,()=>{
            console.log("Socket server running")
        });

    
    }).catch(err=>{
        console.log(err);
    })

}else{
    dbConnect().then(data=>{
        console.log("Connected with Mongdob----")
    
        httpServer.listen(8080,()=>{
            console.log("Socket server running")
        });
    
    }).catch(err=>{
        console.log(err);
    })
    

}





io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("message",(data)=>{
       // console.log(data);
       socket.broadcast.timeout(5000).emit("serversent",data)    
    
    })
  // ...
});





// You have to create a post route which sends the product inoformation
//  /product -->POST route 
// {name:"productname",brand:"",stock:""};
// store it into file --->