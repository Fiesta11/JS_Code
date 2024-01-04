// singelton or // constructor
// const tinderuser = new Object();

const tinderuser = {}
tinderuser.id = "434efd"
tinderuser.name = "mohit"
tinderuser.isloggedin = false
// console.log(tinderuser);
// nesting of objects
const grandfather = {
    name : "abcss",
    father : {
        name : "jgfh",
        son : {
            name : "utsds",
            grandson : {
                name : "ffdsjs"
            }
        }
    }
}
console.log(grandfather.father.son.grandson);

const obj1 = {1 : 'a' , 2 : 'b'};
const obj2 = {3 : 'a' , 4 : 'c'};

const obj_merge = Object.assign({} , obj1 , obj2);
// console.log(obj_merge);
const obj_merge2 = {...obj1 , ...obj2};
// console.log(obj_merge2);

// array of objects

const arr1 = [
    {
        id : '211',
        name : "fdfdf"
    },
    {
        id : "4343",
        name:"fdjfg"
    }
]
// console.log(arr1[0].id);
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty("isloggedin"));