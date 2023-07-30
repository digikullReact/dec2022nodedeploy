//App Level middleware
// Route Level Middleware
// Routes Level Middleware
// Error Middleware
const fs=require("fs");
const os=require("os");
function log(req,res,next){
    console.log(" Applevel ---Middleware Calledd-----------")

   // res.send("I stopping you from further request")
   next();
}


function RoutesLevelLog(req,res,next){

  //  console.log("Routes Level Middleware Calledd ---- -----------")
    next();
}

function RouteLevelLog(req,res,next){

   // console.log("single route  Level Middleware Calledd ---- -----------")
    next();
}

function LogRouteName(req,res,next){
    let  fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    fs.writeFile("./../logs/request.log",`${fullUrl}${os.EOL}`,(err,data)=>{
        if (err){
            console.log(err)
        }
        next();
    })
  //  console.log(fullUrl)
   
}

module.exports={
    log,
    RoutesLevelLog,
    RouteLevelLog,
    LogRouteName
}


// You have to create a routes level middleware 
// And log all the names of the routes that are called --