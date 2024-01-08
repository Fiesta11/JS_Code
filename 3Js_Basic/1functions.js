function func(){
    console.log("Utsav");
}
func()

function sum(num1 , num2){
    return (num1+num2)
}

const result = sum(3 , 4)
console.log(result);

function loginuser_message(username = "sam"){
    if(username != undefined){
    return `${username} Just looged in`
    }
    else
    return `Please enter the username`
}
console.log(loginuser_message("Gullu"))