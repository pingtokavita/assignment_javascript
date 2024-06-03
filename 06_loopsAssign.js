
console.log(`------1. Count the total no of vowels------`);
function countVowelsReduce(str) {
    const vowels = "aeiouAEIOU";
    return str
        .split("")
        .reduce(function (count, char) {
            return vowels.indexOf(char) !== -1
                ? count + 1
                : count;
        }, 0);
}
const result = countVowelsReduce("I am very good IT developer");
console.log(result);

console.log(`------2. sum of cube of numbers from 1 to 5------`);
var sumOfCube=0;
for (let index = 1; index <= 5; index++)
 {
   var cube = index * index * index;
   sumOfCube = sumOfCube + cube;

}
console.log(sumOfCube);

console.log(`------3. Odd positioned Characters------`);
var oddPositionChars = function  (str){


for (let index = 0; index < str.length; index++)
 {
    var ch = str.charAt(index);
    if (index % 2 == 1 && ch!= ' ')
    {
        console.log(ch);
    }
    
}
}
oddPositionChars("Hard work always pays back");
oddPositionChars("Soon I will be UI IT champ")

