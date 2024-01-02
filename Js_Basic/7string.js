const names = "Utsav";
const repocount = 10;

// let's learn string interpolation

console.log(`my name is ${names} and my repo count is ${repocount}`);

const name1 = new String("Utsav");

console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.charAt(0));
console.log(name1.indexOf('t'));
console.log(name1.substring(0 , 2));
console.log(name1.slice(-1 , 2));

const check = "     Mohit     ";
console.log(check);
console.log(check.trim());
console.log(check.toUpperCase());

const str = "https://github.com/Fiesta11/JS_Code/tree/main/Js_Basic";
console.log(str.replace("/" , "*"));
console.log(str.includes("github"));

const str1 = "My name is Utsav Barnwal";

const arr = str1.split(' ');
console.log(arr);
console.log(typeof arr);