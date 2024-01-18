const mynum = [1,2,3,4,5,6,7,8,9,10]

const newnum = mynum.map((mynum) =>{
 return mynum + 10
});
// console.log(newnum);

const arr = [2, 6 , 8, 12 , 3 ,7, 4, 9];

const new_arr = arr.map((item) => item * 10)
   .map((item) => item + 3)
   .filter((item) => item > 50)

console.log(new_arr);