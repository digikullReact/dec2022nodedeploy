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

const getDataPagination=async (pageNumber=0,limit=10,search,sortOrder="asc",sortField="username")=>{
    const t0 = performance.now();
    const re=new RegExp(search, 'gi');
    sortOrder=sortOrder=="desc"?-1:0;

const data=  await Promise.all([userModel.find({name:{ $regex:re }}).skip(pageNumber*limit).limit(limit).sort({[sortField]:sortOrder}),
    
    userModel.count()])

  

  const t1 = performance.now();
console.log(`Call to doSomething took ${(t1 - t0)/1000} seconds.`);
  
return data;

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

const aggregateSalary=async ()=>{
   
     userModel.aggregate([
            {
                $group:{
                   
                    "totalSalary":{
                        $sum:"$salary"
                    }
                }
            }
    
        ]).exec().then(data=>{
            console.log("Data---",data);
        }).catch(err=>{
            console.log("Error---",err);
        })
       
        
    
  

}




module.exports={
    saveData,
    getData,
    deleteData,
    getDataById,
    editData,
    insertMany,
    getDataByUsername,
    aggregateSalary,
    getDataPagination
    
    
}