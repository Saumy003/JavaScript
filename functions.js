// functions in JS

function fun() {
    console.log("Welcome to VS Code");
    console.log("I am learing JavaScript");
}

fun();

// function -> 2 number sum

function sum(num1 , num2) {
    console.log(num1 + num2);
}

sum(4 , 7);


// arrow function

const arrowSum = (a , b) => {
    return a + b;                    // add
};

const arrowMul = (x , y) => {
    console.log(x * y);             // multiplication
};

// forEach loop in arrays

let arr = [1,2,3,4,5,6];

arr.forEach(function printVal(val) {       // each element of array will pass as parameter in call back func.
    console.log(val);

} );

//

let cities = ["pune", "delhi", "mumbai"];

cities.forEach( (val , idx , cities) => {
    console.log(val.toUpperCase() , idx , cities);
} );

// some more array methods

// 1. map
let newArr = [2,3,4,5,6,7];
newArr.map((val) => {
    console.log(val * 2);
});

// 2. filter
let evenNum = [2,26,47,89,34];
let evenArr = evenNum.filter((val) => {
    return val % 2 === 0;
} );

console.log(evenArr);

// 3. reduce
let array1 = [1, 2, 3, 4];

const output = array1.reduce((res , curr) => {    // initially res =1 and curr = 2
    return res + curr;
} );

console.log(output);  // 10
