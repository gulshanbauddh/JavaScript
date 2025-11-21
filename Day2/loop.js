let i=0;
while(i<5){
    console.log("Iteration number: " + i);
    i++;
} 

do{
    console.log("Do-While Iteration number: " + i);
    i++;
}while(i<10);

let myArray = ['apple', 'banana', 'cherry'];
while(myArray.length > 0){
    let fruit = myArray.pop();
    console.log("Popped fruit: " + fruit);
} 