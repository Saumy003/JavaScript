// Callback in JS //

function sum(a , b) {
    console.log(a + b);
}

function calculator(a , b, sumCallback) {
    sumCallback(a , b);
}

calculator(1 , 2 , sum);   // sum function is passed as argument to calculator function //


// Callback //

function getData(dataId , getNextData) {
    setTimeout(() => {
        console.log("data" , dataId);
        if (getNextData) {
            getNextData();
        }
    } , 2000);
}

// Callback Hell //

getData(1 ,() => {
    getData(2 ,() => {
        getData(3 , () => {
            getData(4);
        })
    });
});

// Note :-
// Hence, Callback Hell is problem in javascript. So to tackle this problem we have PROMISES in JS //