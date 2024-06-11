const fruits_seasonal = ["Banana","Orange","Apple","Mango","water Melon"];
console.log(`=======Step 1: log the first and last element on console ===========`);
console.log(fruits_seasonal);
console.log("First Position element:" ,fruits_seasonal[0]);
console.log("Last position element: ",fruits_seasonal [fruits_seasonal.length-1]);

console.log(`=========Step 2:  add element papaya before the element 'Banana' and then log array on console ========-`);
console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`========Step 3: Remove 'Mango' from the array ========`);
console.log(fruits_seasonal);
fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);

console.log(`========Step 4:  Add element or insert an element 'pineapple' at the last position ========`);
fruits_seasonal.push("Pineapple");
console.log();
console.log(fruits_seasonal);

console.log(`=======step 5: Insert an element -'Dragon fruit' before "water melon"=========`);

fruits_seasonal.splice( 4 , 0, "Dragon fruit")

console.log(fruits_seasonal);

console.log(`=======Step 6: Replace an element 'orange with 'Kiwi'=========`);
fruits_seasonal[2] = "Kiwi";
console.log(fruits_seasonal);

console.log(`=====Step 7: log the element starting from index 1 to 4===========`);

var answer = fruits_seasonal.slice(1 , 5);
console.log(answer);




console.log(`======step 8: Only select last 3 element and log on console: using length property======`);
console.log(fruits_seasonal);
var n = fruits_seasonal.length-1;
var result = fruits_seasonal.slice(4, n);
console.log(result);


