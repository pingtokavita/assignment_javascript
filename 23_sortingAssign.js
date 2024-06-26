console.log(`=====STEP 1=======`);
const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
arrayRollNumbers.reverse();
console.log(`Reversed array: [${arrayRollNumbers}]`);
console.log(`=====STEP 2======`);
arrayRollNumbers.sort();
console.log(`sorted array: [${arrayRollNumbers}]`);
console.log(`=====STEP 3=======`);
arrayRollNumbers.sort((n1, n2)=>{
    return n1>n2 ? 1 : -1;
});
console.log(`Numerically sorted array: [${arrayRollNumbers}]`);


console.log(`=====STEP 4=======`);
const maxNumber = Math.max(...arrayRollNumbers);
console.log(`Greater number: [${maxNumber}]`);
console.log(`=====STEP 5=======`);
const minNumber = Math.min(...arrayRollNumbers);
console.log(`smallest number: [${minNumber}]`);
console.log(`=====STEP 6=======`);
const uniqueArray = [...new Set(arrayRollNumbers)];
console.log(`Array with duplicates removed: [${uniqueArray}]`);

