// object literals
const mysym1 = Symbol("key1")
const jsuser = {
    name: "Utsav",
    "Full name" : "Utsav Barnwal",
    [mysym1] : "mykey11",
    age : 23,
    location : "India",
    email : "utsav@nasa.com",
    isloggedin : false,
    lastlogin : ["monday" , "saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["Full name"]);
// console.log(jsuser[mysym1]);
// Object.freeze(jsuser)
jsuser.email = "utsav@google.com"
// console.log(jsuser["email"]);
// console.log(jsuser);

jsuser.greet = function(){
    console.log("Hello JS User");
}
// console.log(jsuser.greet);
// console.log(jsuser.greet());

jsuser.greet2 = function(){
    console.log(`Hello Js My name is ${this["Full name"]}`);
}
console.log(jsuser.greet2());
