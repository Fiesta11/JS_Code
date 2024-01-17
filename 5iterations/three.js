
// let arr = [3,5,6,87,2];

// for(let num of arr)
// {
//     console.log(num);
// }

// const greet = "Hello World";

// for(const greeting of greet)
// {
//     console.log(`The letter is ${greeting}`);
// }

const map = new Map();
map.set('IN' , 'India');
map.set('USA' , 'United States of America');
map.set('UK' , 'United Kingdom');

// console.log(map);

// for(let key of map)
// {
//     console.log(key);
// }

for(let [key , value] of map)
{
    console.log(key,value);
}