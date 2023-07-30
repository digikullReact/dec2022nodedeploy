const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt=require("jsonwebtoken");


const encryptPassword=(req,res,next)=>{
    const password=req.body.password;
    // we will encrypt the password here

    bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err){
            res.send("Error occurred");
            console.log(err);
            return ;
        }
        req.body.password=hash;

        next();

    });

}

const verifyToken=(req,res,next)=>{
    const token=req.headers["authorization"];

    if(token){
        jwt.verify(token, 'mysecretkey', function(err, decoded) {
            if(err){
                res.status(401).json({
                    "message":"Failed",
                    "data":null,
                    error:"Please Provide Proper token"
                })
        

            }else{
                next();
            }
          
          });
     

    }
    else{

        res.status(401).json({
            "message":"Failed",
            "data":null,
            error:"Please Provide Proper token"
        })

    }

    
}

module.exports={
    encryptPassword,
    verifyToken
}