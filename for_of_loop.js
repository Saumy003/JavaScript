// for_of loop used to iterate b/w strings and array

let str = "JavaScript";

let size = 0;
for (let i of str) {
    console.log("i=" , i);
    size++;
}
console.log("string size =" , size);