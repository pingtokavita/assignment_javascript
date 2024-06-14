var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`===Step 1: find the total elements  available or length and log on console====== `);
arrayNumbers.length;
console.log(arrayNumbers);

console.log(`=====Step 2: Log the first and last element in arrayNumbers=======`);
console.log("First Element:",arrayNumbers[0]);
console.log("Last Element:",arrayNumbers[arrayNumbers.length-1]);

console.log(`=======Step 3:Log the 3rd last element using length property=========`);
console.log(arrayNumbers );
console.log(arrayNumbers[arrayNumbers.length-3]);


console.log(`=======Step 4:find the all even numbers using for of loop =========`);
const even = [];
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const num of arrayNumbers) {
    if (num % 2 === 0) {
        even.push(num);
    }
}
console.log(even);


console.log(`=======Step 5:find the all odd  numbers using for of loop =========`);
const odd = [];
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
for (const num of arrayNumbers)
{
    if(num % 2 !== 0 ){
        odd.push(num);
    }
}
console.log(odd);

console.log(`=======Step 6:find the all even positioned elements from arrayNumbers, sum it ====================`);

    let sum = 0;
    for (let i = 0; i < arrayNumbers.length; i += 2) {
        if (arrayNumbers [i] % 2 === 0) {
           sum = sum + arrayNumbers [i]
        }
    }
    console.log(`Even positioned elements sum is: ${sum}`);
    
console.log(`=======Step 7:Find all the odd positioned elements from arrayNumbers, sum it ====================`);
let add = 0;
for (let index = 0; index < arrayNumbers.length; index=index+2) 
{
    if(arrayNumbers[index] % 2 ===1)
    {
     add = add + arrayNumbers[index]
    }
    
}
console.log(`Odd positioned elements sum is: ${add}`);

console.log(`=======Step 8:Find the Sum  of all elements  from arrayNumbers================`)
let count = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    count = count + arrayNumbers[index];
    
}
console.log(`Sum of all elements from arrayNumbers: ${count}`);

console.log(`=======Step 9:Find the numbers which are multiple of 5================`)
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element % 5 === 0){
        console.log(element);
    }
    
}

console.log(`=======Step 10:Is number 115 available in arrayNumbers================`)
console.log(arrayNumbers.includes(115)); 

console.log(`=======Step 11:Is number 23 available in arrayNumbers================`)
console.log(arrayNumbers.includes(23)); 

console.log(`=======Step 12: Insert numbers 55, 66 at index 3 and log array================`)
arrayNumbers.splice( 3, 0, 55,66);
console.log(arrayNumbers);

console.log(`=======Step 13: Delete 3 elements starting from index 4 ================`)
arrayNumbers.splice(4,3)
console.log(arrayNumbers);