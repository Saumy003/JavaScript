let promises = new Promise((resolve , reject) => {
console.log("This is promise");
resolve("Use to solve Callback hell problem.")
})


function getData(dataId , getNextData) {
    return new Promise((resolve , reject) => {
       setTimeout(() => {
        console.log("data" , dataId);
        resolve("success")
        if (getNextData) {
            getNextData();
        }
    } , 5000);
});
}
    
// Promise Methods:-

// 1. promise.then()

const getPromise = () => {
    return new Promise((resolve , reject) => {
        console.log("This is promise");
        resolve("success")
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled" , res);
});

// 2. promise.catch()
const getPromises = () => {
    return new Promise((resolve , reject) => {
        console.log("This is promise");
        reject("error")
    });
};
promise.catch((err) => {
    console.log("rejected" , err);
});

// Example
function asyncFunc() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}

console.log("fetching data1...")
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
});

