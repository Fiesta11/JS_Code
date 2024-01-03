// primitive datatype - call by value
// 7 types = string , number , boolean , undefined , null , symbol , BIGINT

const score = 100;
const outtemp = null;
const istrue = false;

const id = Symbol('123');
const an_id = Symbol('123');

console.log(id == an_id);

const big_number = 23243584878475n;
console.log(big_number);

// Reference Type - Non - Primitive type
// Array , Objects , Functions

const heroes = ["spiderman" , "shaktiman" , "Hulk" , "Naagraj"]

let myobj = {
    name : "Utsav",
    age : 22,
}

const my_func = function(){
    console.log("hello world");
}


console.log(typeof heroes);
// JS is Dynamically Typed Language


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

