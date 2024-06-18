const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`====step 1:=======`);
const newArray = arrayNumbers.map((element) => {
    return element + 10
})
console.log('Array after adding 10 to each element:', newArray);


console.log(`====step 2:=======`);
const cubeOfEachElement = arrayNumbers.map((element) =>{
    return element * element * element
})
console.log('Array with the cube of each element:', cubeOfEachElement);


console.log(`====step 3:=======`)
const arrayIndex = arrayNumbers.map((element, index) => element + index);
console.log('Array after adding the index to each element:', arrayIndex);

