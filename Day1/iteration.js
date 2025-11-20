// https://github.com/gulshanbauddh/JavaScript/blob/main/Day1/iteration.js
// // Print 100 numbers from 1 to 100 using a for loop
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }

// // Array of fruits
// const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// // Print all fruits using normal loop
// console.log("Fruits in the array using Normal loop:");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// // Print each fruit using a for...of loop
// console.log("Fruits in the array using for...of loop:");
// for (const fruit of fruits) {
//     console.log(fruit);
// }
// // Print each fruit using a for loop
// console.log("Fruits in the array using for each:");
// fruits.forEach((fruit)=>{
//   console.log(fruit);
// })

// Break & continue
console.log("Demonstrating break and continue:");
let arr = [];
for (let i = 0; i <= 20; i++) arr[i] = i;
console.log(`[ ${arr} ]`);

// for(no of  arr){
//   if(no==8) continue;
//   if(no==11) continue;
//   if(no==15) break;
//   console.log(`[ ${no} ]`);
// }
for (no of arr) {
  if (no < 8) {
    if (1) {
      console.log("I am Top- " + no); // 1
      console.log(`[ ${no} ]`);
      if (true) {
        if (no == 3) continue;
      }
    }
    console.log("I am 1st outside- " + no); // 2
  }
  console.log("I am 2nd outside- " + no); // 3
  console.log(
    "___________________________________________________________________"
  ); // 3
}
