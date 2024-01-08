
// ... -> rest operator
function calculate_cart_price(val1 ,val2 , ...num1){
    return num1
}

console.log(calculate_cart_price(70 , 60 , 124 ,546 , 445))

//play with objects

const user = {
    name : "Utsav",
    age : 20
}

function func(obj){
    console.log(`User name is ${obj.name} and user age is ${obj.age}`);
}

func({
    name : "Mohit",
    age : 22
})

// play with arrays

const newArray = [400 , 200 , 800 , 1000];

function check(arr) {
    return arr[2]
}
console.log(check(newArray));