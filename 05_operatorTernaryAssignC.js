console.log(`---------------Step1--------------------`);
function maleMarriageEligibility(gender, age, boyName)
{
    
   var result = (gender=="male" && age>=21) ? `${boyName} you are eligible for Marriage`: `${boyName} you are not eligible for marriage`;
   return result;
}
var value = maleMarriageEligibility("male", 25, "Billgates");
console.log( value);
var value = maleMarriageEligibility("male", 17, "Stew Jobs");
console.log(value);

console.log(`---------------Step2--------------------- `);
function femaleMarriageEligibility(gender, age, girlName)
{
 var result = (gender=="Female" && age>=18) ? `${girlName} you are eligible for Marriage`: `${girlName} you are not eligible for marriage`;
 return result;
}
var value = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(value );
var value = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(value );