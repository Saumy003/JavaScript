// Callback in JS //

function sum(a , b) {
    console.log(a + b);
}

function calculator(a , b, sumCallback) {
    sumCallback(a , b);
}

calculator(1 , 2 , sum);   // sum function is passed as argument to calculator function //


// Callback //

function getData(dataId) {
    setTimeout(() => {
        console.log("Saumy Kumar" , dataId);
    } , 2000);
}

