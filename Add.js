function AddTwoNumbers(a,b){
    return a+b;

}

function SubtractTwoNumbers(a,b){
    return a-b;

}
function sumArray(arr){
   return arr.reduce((acc,ele)=>acc+ele,0);

}

function getProperty(obj,key){
    return obj[key] ?obj[key]:null;
 }
///console.log(AddTwoNumbers(3,4));

module.exports={
    AddTwoNumbers,
    SubtractTwoNumbers,
    sumArray,
    getProperty
}

/**
 
1. **Basic Addition Test**:
    - Write a function called `multiply` that takes in two numbers and returns their product.
    - Using Mocha and Chai, write a unit test to ensure this function works correctly.

2. **Array Sum Test**:
    - Write a function called `sumArray` that takes in an array of numbers and returns the sum of all its elements.
    - Write unit tests to check:
      - If the function returns `0` for an empty array.
      - If it correctly sums up the elements of an array.

3. **Object Properties Test**:
    - Consider a function called `getProperty` that takes in an object and a string (property name). The function should return the value of the property if it exists, or `null` otherwise.
    - Write unit tests to:
      - Check if the function returns the correct value of a given property.
      - Ensure it returns `null` for a non-existent property.

4. **Array Filter Test**:
    - Write a function called `filterEvens` that takes in an array of numbers and returns a new array containing only the even numbers.
    - Write unit tests to ensure:
      - The function filters out odd numbers.
      - Returns an empty array if there are no even numbers.

5. **Modify Object Test**:
    - Consider a function called `updateName`. It takes in an object and a string (new name). The function should update the `name` property of the object with the provided string and return the updated object.
    - Write unit tests to:
      - Check if the function updates the name correctly.
      - Ensure it doesn't modify other properties of the object.

 */