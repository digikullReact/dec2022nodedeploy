/**
 * 
 * INSERT INTO users (name,username,about,salary,password,image) VALUES("john","john123","hi there",9000,"123456","")
 * SELECT * FROM `users` ;
 * UPDATE users SET name="Louis" ,username="louis1" WHERE id=1;
 * DELETE FROM users WHERE id=1;
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
   date:DataTypes.TIME
  });

  const saveData=(data)=>{
 return  User.create(data);

  
  }
const editData=(data)=>{
 
 }

const getData=(data)=>{


}



const deleteData=(id)=>{


}
// So complete these method getData by ID

const getDataById=(id)=>{

 


}

const getDataByUsername=(username)=>{

 


}

const insertMany=(data)=>{

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