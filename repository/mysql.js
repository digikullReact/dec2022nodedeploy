/**
 * 
 * INSERT INTO users (name,username,about,salary,password,image) VALUES("john","john123","hi there",9000,"123456","")
 * SELECT * FROM `users` ;
 * UPDATE users SET name="Louis" ,username="louis1" WHERE id=1;
 * DELETE FROM users WHERE id=1;
 * SELECT * FROM `users` LIMIT 5 OFFSET 5
 * SELECT * FROM `users`   WHERE name LIKE 'k%' any name that starts with k
 * SELECT * FROM `users`   WHERE name LIKE '%h%' any name that has h in between
 * SELECT * FROM `users`   ORDER BY name ASC  -->it will give the rows sorted by name in ASC order
 * 
 */

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('digikulldecbatch', 'admin', 'BRetC61c', {
    host: 'mysql-138855-0.cloudclusters.net',
    port:'14150',
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  })

  const User = sequelize.define("users", {
    name: DataTypes.TEXT,
    about: DataTypes.TEXT,

    password: DataTypes.TEXT,

    username: DataTypes.TEXT,

    image: DataTypes.TEXT,
   salary: DataTypes.INTEGER,
  });

  const saveData=(data)=>{
 return  User.create(data);

  
  }
const editData=(data)=>{
    return User.update(data,{
        where:{
            id:data.id
        }
    })
 
 }

const getData=(data)=>{
    return User.findAll();


}



const deleteData=(id)=>{
    return User.destroy({
        where:{
            id:id
        }
    })


}
// So complete these method getData by ID

const getDataById=(id)=>{

   // return User.findByPk(id);
   return User.findOne({
    where:{
        id:id
    }
   })

 


}

const getDataByUsername=(username)=>{

    return User.findOne({
        where:{
            username:username
        }
       })

 


}

const insertMany=(data)=>{
    return User.bulkCreate(data);

}


  module.exports=
  {
    sequelize,
    saveData,
    editData,
    getData,
    insertMany,
    getDataByUsername,
    getDataById,
    deleteData
  }