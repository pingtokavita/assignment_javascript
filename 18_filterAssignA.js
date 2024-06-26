console.log(`====Step1:=======`);
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const newArray = arrayNumbers.filter( (element)=>{
    return element > 50 ;
});
console.log(`Numbers greater than 50: [${newArray}]`);

console.log(`====Step2:=======`);
const EvenNumbers = arrayNumbers.filter((element) => {
    return element % 2 == 0;
})
console.log(`Even numbers: [${EvenNumbers}]`);

console.log(`====Step3: =======`);
const OddNumbers = arrayNumbers.filter((element) => {
     return element % 2 !== 0
})
console.log(`Odd numbers: [${OddNumbers}]`);

console.log(`====Step4:=======`);
const multipleOfNum = arrayNumbers.filter((element) => {
    return element % 5 == 0
})
console.log(`Numbers that are multiples of 5: [${multipleOfNum}]`);

console.log(`====Step4:5 =======`);
const numbersBetween = arrayNumbers.filter((element) => {
    return element >= 20 && element <= 50;
})
console.log(`Numbers between 20 and 50: [${numbersBetween}]`);
