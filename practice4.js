// practive set 4
// ques on array !!

/* Ques. For a given array with marks of students-> [85,97,44,37,76,60].
Find the averagemarks of the entire class*/

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let val of marks) {
    sum = sum + val;
}
console.log(sum);

let avg = sum/marks.length;
console.log(`avg marks of the class is = ${avg}`);

/* Ques. For a given array with prices of 5 items --> [250, 645, 300, 900, 50].
All items have 10% OFF on them. Cchange the array to store final price after
 applying offer.*/

 let items = [250, 645, 300, 900, 50];
 let i = 0;
 
 for (let val of items) {
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`price after offer = ${items[i]}`);
    i++;
 }

