const { v4: uuidv4 } = require('uuid');
 // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

let Db=[

]


const saveData=(data)=>{
   data.id=uuidv4();
    Db.push(data);
    return data;

}
const editData=(data)=>{
    Db=Db.filter(ele=>ele.id!=data.id);
   
     Db.push(data);
     return data;
 
 }

const getData=(data)=>{

    return Db;

}



const deleteData=(id)=>{

    Db=Db.filter(ele=>ele.id!=id);

    return Db;

}

const getDataById=(id)=>{

    const data=Db.find(ele=>ele.id==id);

    return data;

}




module.exports={
    saveData,
    getData,
    deleteData,
    getDataById,
    editData
    
    
}