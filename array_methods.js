// some array methods
/* push() & pop() */
let veggies = ["potato", "tomato", "cabbage" , "onoin", ];
console.log(veggies);

/* toString() */
let fruits = ["apple" , "banana" , "mango" , "lichi"];
console.log(fruits);
console.log(fruits.toString());

/* Concat() */
let arr1 = [23,57, 93, 73, 84, 62,49];
let arr2 = [32, 87, 35];

let arr = arr1.concat(arr2);
console.log(arr);

/* upshift() & shift() */
let cgpa = [2.3 , 6.7, 8.9 ,9.3, 5.4, 7.6];
console.log(cgpa.unshift(4.8));

/* slice() */
let val = [4,5,3,7,4,9,0,2];
console.log(val);
console.log(val.slice(1,4));

/* splice() */
let marks = [1, 2, 3, 4, 5, 6, 7];
marks.splice(2, 2, 8,9);

// to add element
marks.splice(2, 0, 7);

// to delete element
marks.splice(2, 3);

// to replace element
marks.splice(2, 2, 3,4);
