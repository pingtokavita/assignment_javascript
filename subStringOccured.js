console.log(`=====chatgpt==========`);
const givenString = "Today dayday is Monday";
let count = 0;
let position = 0;
const occurredWord = "day";

while ((position = givenString.indexOf(occurredWord, position)) !== -1) {
    count++;
    position += occurredWord.length;
}

console.log(`The word "${occurredWord}" occurs ${count} times in the string.`);


console.log(`======ketan code=======`);  
  const text = "Today dayday is Monday";
  let myarray = text.split("day");
  console.log(myarray);
  let occurence = 0;
  for (let index = 0; index < myarray.length-1; index++) {
   
        occurence ++ ;
      }
    
  
  console.log(occurence );
