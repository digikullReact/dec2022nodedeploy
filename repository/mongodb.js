const userModel=require("../db/models/user");

const saveData=(data)=>{
    const user=new userModel(data);

   return  user.save();
  }
const editData=(data)=>{
   return  userModel.updateOne({_id:data.id},{$set:data})
 
 }

const getData=(data)=>{

    return userModel.find();

}



const deleteData=(id)=>{

   return userModel.deleteOne({_id:id})

}
// So complete these method getData by ID

const getDataById=(id)=>{

 

    return userModel.findOne({_id:id})

}

const getDataByUsername=(username)=>{

 

    return userModel.findOne({username:username})

}

const insertMany=(data)=>{
    return userModel.insertMany(data);

}




module.exports={
    saveData,
    getData,
    deleteData,
    getDataById,
    editData,
    insertMany,
    getDataByUsername
    
    
}