if(3 == '3')
{
    console.log("Yes!");
}
const temp = 50;

// if(temp >= 50)
// {
//     console.log("Yes temperatur is greater than or equal to 50");
// }
// const score = 200;

// if(score >= 200)
// {
//     let power = "fly"
//     console.log(`Utsav Can ${power}`);
// }
// console.log(power);

const balance = 1000;

// if(balance > 7700) console.log("balance is Greater than 100");
// else console.log("Balance is less than 500");

if(balance < 500)
{
    console.log("Cond1 exectued");
}
else if(balance < 400)
{
    console.log("cond2 executed");
}
else if(balance > 1000)
{
    console.log("YAAAAAAA");
}
else{
    console.log("OHHHHH");
}

// const user_loggedin = true;
// const user_debit_card = true;
// const user_paid = false;

// if(user_debit_card || user_loggedin && user_paid)
// {
//     console.log(`Welcome to the course`);
// }
// const month = 99;

// switch(month)
// {
//     case 1 :
//         console.log("Jaunuary");
//         break;
//     case 2 :
//         console.log("February");
//         break;
//     case 3 :
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5 :
//         console.log("May");
//         break;
//     case 6 :
//         console.log("June");
//         break;
//     case 7 :
//         console.log("July");
//         break;
//     case 8 :
//         console.log("August");
//         break;
//     case 8 :
//         console.log("september");
//         break;
//     case 9 :
//         console.log("October");
//         break;
//     default:
//         console.log("No month");
// }

val1 = 0 ?? 2;
const val2 = null ?? 7
console.log(val2);
console.log(val1);

// Ternary Operator

const tea_price = 25;

tea_price < 27 ? console.log("Good Price") : console.log("Costly");