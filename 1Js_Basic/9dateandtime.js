let mydate = new Date();
console.log(mydate);
console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleDateString());
console.log(typeof mydate);

const newdate = new Date(2002 , 5 , 29 , 4 , 30);
console.log(newdate.toLocaleString());
const anydate = new Date("12-01-2005");
console.log(anydate.toLocaleString());

let time_stamp = Date.now();
console.log(time_stamp);
let curr_time = anydate.getTime();
console.log(curr_time);