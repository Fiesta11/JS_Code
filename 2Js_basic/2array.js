const marvel_heros = ["spiderman" , "thor" , "ironman"]
const dc_heros = ["batman" , "superman" , "flash"]

// marvel_heros.push(dc_heros);
// const newarray = marvel_heros.concat(dc_heros);
// console.log(marvel_heros);
// console.log(newarray);

const all_new_heros = [...marvel_heros , ...dc_heros];
console.log(all_new_heros);

const another_array = [1,5,8,[3,5 , [3,6 , [8,9,12]]]]
console.log(another_array.flat(Infinity));
const arr1 = Array.from("utsav");
console.log(arr1);
console.log(Array.isArray(arr1));