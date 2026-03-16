// Asynchronous program in JS // 

console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello");
}, 4000);  // timeout , 4sec === 4000 milli sec

console.log("three")
console.log("four")


// async keyword & await keyword//

// Exampl 1:-
function  api() {
return new Promise((resolve , reject) =>{
    setTimeout(() => {
        console.log("Weather data");
        resolve(200);
    } , 2000);
});
}

async function getWeatherdata() {
    await api();      //1st
    await api();      //2nd
}

// Example 2:-
function getData(dataId) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("data" , dataId);
            resolve("success")
        } , 4000);
    });
}

async function getDataFunc() {
    console.log("getting data 1...");
    await getData(1);
    console.log("getting data 2...");
    await getData(2);
    console.log("getting data 3...");
    await getData(3);
}

/* IIFE function that is called immediately as soon as it is defined. 
Can we used once only. Below is the syntax of IIFE. */

// (async function () {
//     console.log("getting data 1...");
//     await getData(1);
//     console.log("getting data 2...");
//     await getData(2);
//     console.log("getting data 3...");
//     await getData(3);
// }) ();