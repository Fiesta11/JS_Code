// memory
// primitive type  - stack memory
// non-primitive type - heap memory

// let understand by example

let username = "Utsav barnwal";
let anothername = username;

// console.log(anothername);
anothername = "Mohit Singh";
console.log(username);
console.log(anothername);

let obj1 = {
    name : "Utsav",
    email : "utsav@google.com"
}

let obj2 = obj1;

obj2.name = "utsav Barnwal";
console.log(obj1);
console.log(obj2);