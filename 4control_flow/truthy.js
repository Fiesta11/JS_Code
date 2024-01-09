const user_email = "hitesh@ai"

if(user_email) console.log("Email Received");
else console.log("Email Not Received");

// Falsy Values
// false , 0 , -0 , BigInt 0n , "" , NaN , null , undefined
// truthy Values
// "0" , 'false' , "false" , " " , [] , {} , function(){}

const empty_obj = {}

if(Object.keys(empty_obj).length === 0)
{
    console.log("Empty Objects");
}
