/* practice set 6 in javascript 
Classes & Objects */

/* You are creating a website for your college. Create a class USER with 2 
properties, name & email. I also has method called viewdata() that allow user to view
website data */

let DATA = "secret information"

class user {
    constructor(name , email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data=" , DATA)
    }

}

let student1 = new user("thor" , "thor@gmail.com");
let student2 = new user("iron-man" , "ironman@gamil.com");