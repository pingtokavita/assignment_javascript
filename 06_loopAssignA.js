console.log(`------Count the total no of vowels------`);
var str = "I am very good IT Developer";
var vowels = "aeiou";
var count=0;
for (let index = 0; index < str.length; index++) 
{
   var ch =str.charAt(index)
   var chLowerCase = ch.toLowerCase ();
   vowels.includes(chLowerCase )
   {
    count = count + 1;
   }
    
}
console.log(count);
