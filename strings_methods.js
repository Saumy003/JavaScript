// Strings Methods

// 1. str.toUpperCase()
let str = "apna college";
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);

// 2. str.toLowerCase()

// 3. str.trim()
let str1 = "     apna college JS       ";
console.log(str1.trim());

// 4. str.slice(start,end?)

let num = "1347507";
console.log(num.slice(2-6));  //7507

// 5. str1.concat(str2)

let str2 = "virat";
let str3 = "kholi";
console.log(str2.concat(str3));  // console.log(virat + kholi)

// str.replace(searchVal , newVar)

let str4 = "hello";
console.log(str4.replace("h" , "m"));

// str.charAt(val of index)
let str5 = "IloveJS";
console.log(str5.charAt(3));