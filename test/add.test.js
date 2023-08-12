const { assert } = require("chai");
const {AddTwoNumbers,SubtractTwoNumbers,sumArray,getProperty} = require("../Add")

describe("AddTwoNumbers",function(){

    it("should add two numbers",function(){

        // We will call our function --->
       const result= AddTwoNumbers(23,7);
       assert.equal(result,30,"The numbers should be summed as 30");


    })

})

describe("SubtractTwoNumbers",function(){

    it("should subtract two numbers",function(){

        // We will call our function --->
       const result= SubtractTwoNumbers(23,7);
       assert.equal(result,16,"The numbers should be subtracted as 16");


    })

})

describe("sumArray",function(){

    it("should add all the numbers in an array",function(){

        // We will call our function --->
       const result= sumArray([1,2,2,3,7,8]);
       assert.equal(result,23,"The numbers should be summ as 23");

       const result2= sumArray([]);
       assert.equal(result2,0,"The numbers should be summ as 0 as empty array");



    })

})

describe("sumArrayEmpty",function(){

    it("should add all the numbers in an array",function(){

       const result2= sumArray([]);
       assert.equal(result2,0,"The numbers should be summ as 0 as empty array");



    })

})

describe("getProperty",function(){

    it("should return value of property",function(){

       const result2= getProperty({name:"John"},"name");
       assert.equal(result2,"John");



    })

})


describe("getPropertyNull",function(){

    it("should return value of property",function(){

       const result2= getProperty({name:"John"},"age");
       assert.equal(result2,null);



    })

})