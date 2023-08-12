const { assert } = require("chai");
const {AddTwoNumbers,SubtractTwoNumbers} = require("../Add")

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