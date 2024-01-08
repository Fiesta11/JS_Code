const user = {
    names : "Utsav",
    Price : 999,

    user_welcome : function(){
        console.log(`${this.names} , Welcome to my Course`);
        console.log(this);
    }
}

// user.user_welcome();
// user.names = "Mohit";
// user.user_welcome();
// console.log(this);

// function chai() {
//     let name = "Gullu"
//     console.log(this.name);
// }
// const chai = () => {
//   console.log(this);
// }
// chai()

// const sum = (num1 , num2) => {
//     return num1 + num2;
// }

const sum = (num1 , num2) => (num1 + num2)
console.log(sum(4,7))