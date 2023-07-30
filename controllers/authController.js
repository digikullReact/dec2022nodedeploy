const { saveData,getDataByUsername } = require("../repository/mongodb");
const  jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const Signup=(req, res) => {

    saveData(req.body).then(result => {
        res.json({
            message: "Success",
            data: result,
            error: null
        })

    }).catch(err => {
        res.json({
            message: "Failed",
            data: null,
            error: err.toString()
        })
    })


}

const Login=(req, res) => {

    getDataByUsername(req.body.username).then(result => {
      /// We will generate token here 
      if(result){
        // We have to match the password 

        bcrypt.compare(req.body.password, result.password, function(err, data) {
            if (!data){
                res.json({
                    message:"Failed",
                    data:null,
                    error:"Passwords donot match"
                })
            }else{

          // We will now generate the token
          const token = jwt.sign({ username: result.username}, 'mysecretkey');


          res.json({
            message:"Success",
            data:token,
            error:null
        })

            }
         

        });

         



      }else{

        res.json({
            message: "Failed",
            data: null,
            error: "UserName Not found"
        })
      }

     

     

    }).catch(err => {
        res.json({
            message: "Failed",
            data: null,
            error: err.toString()
        })
    })


}

module.exports={
    Signup,
    Login
}