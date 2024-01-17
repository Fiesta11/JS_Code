// for(let index=1;index<=10;index++)
// {
//     if(index == 8)
//     {
//         // console.log("8 is the best number");
//     }
//     console.log(index*2);
// }

// for(let i=0;i<10;i++)
// {
//     for(let j=0;j<10;j++)
//     {
//         console.log(`Inner loop ${i} and inner loop value ${j}`);
//     }
// }
let arr = ['Spideman' , 'Superman' , "Hulk" , "Batman"]

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

for(let i=0;i<=10;i++)
{
    if(i == 7)
    continue;
    if(i == 9)
    break;
    console.log(i);
    
}