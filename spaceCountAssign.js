// function spaceCount(str) {
//     let spaceCounter = 0;

// //     // Loop through each character in the string
//     for (let index = 0; index < str.length; index++) {
//         // If the character is a space, increment the counter
//         if (str[index] === ' ') {
//             spaceCounter++;
//         }
//     }
//   // Return the total number of spaces
//     return spaceCounter;


// }

// // Example usage
// let exampleString1 = "Revision is the mother of success";
// let exampleString2 = "Javascript is the language of internet world";

// let count1 = spaceCount(exampleString1);
// let count2 = spaceCount(exampleString2);
// console.log(`===============================`);
// console.log(`The total number of spaces in the string "${exampleString1}" is: ${count1}`);
// console.log(`===============================`);
// console.log(`The total number of spaces in the string "${exampleString2}" is: ${count2}`);


// spaceCount using split() method
function spaceCountOfString (str){
let spacesBetString  = str.split(" ").length-1
console.log(`spaces between string is ${spacesBetString}`);
}
spaceCountOfString("revision is the mother of success");
spaceCountOfString("javascript is the language of internet world");
