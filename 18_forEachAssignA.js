console.log("==== Step 1: Array elements with their indices using forEach() and arrow function ====");
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
arrayNumbers.forEach((currentValue, index) => {
  console.log(`Element at index ${index} is ${currentValue}`);
});
// console.log(`\n`);  // Adds a blank line for spacing


console.log("==== Step 2: Positive numbers using forEach() with arrow function ====");
let positiveNumbers = [];
arrayNumbers.forEach((element) => {
    if (element > 0) {
      positiveNumbers.push(element);
     }
  });
console.log(`Positive numbers: [${positiveNumbers.join(", ")}]`);
// console.log(`\n`);


console.log("==== Step 3: Negative numbers using arrow function====");
let negativeNumbers = [];
arrayNumbers.forEach((element) => {
    if(element < 0){
        negativeNumbers.push(element);
    }
}) 
console.log(`Negative numbers: [${negativeNumbers.join(", ")}]`);


// console.log(`\n`);
console.log("==== Step 4: Even numbers using forEach() with arrow function ====");
const evenNumbers = [];
arrayNumbers.forEach((value) => {
    if (value % 2 == 0) {
        evenNumbers.push(value);
    }
});
console.log(`Even numbers: [${evenNumbers.join(", ")}]`);


console.log("==== Step 5: Sum of all elements from array ====");
let sum = 0
arrayNumbers.forEach((element) => {
    sum = sum + element;
});
console.log(`The sum of all elements in the array is: ${sum}`);


console.log("==== Step 6: Log only even index array value forEach() with arrow func ====");
arrayNumbers.forEach((element, index) => {
    if (index % 2 === 0) {
        console.log(`Value at even index ${index}: ${element}`);
    }
    
});
