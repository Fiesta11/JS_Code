// const promise_one = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log('Async Task is Executed');
//         resolve()
//     }, 1000);
// })

// promise_one.then(() => {
//     console.log('Promise Consumed');
// })

// new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log('Async2 is Created');
//         resolve();
//     }, 1000);
// }).then(()=>{
//     console.log('Async2 is Consumed');
// })

// new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve({username : 'Gullu' , email : 'gullu@bullu.com' , age : 100})
//     }, 1000);
// }).then((user)=> {
//     console.log(user);
// // })
// new Promise((resolve , reject) => {
//    setTimeout(() => {
//     const err = false;
//     if(!err)
//     {
//         resolve({username : "Utsav" , email : "utsav@google.com" , id : 7771})
//     }
//     else{
//         reject('Error Caused');
//     }
//    }, 2000);
// }).then((user) => {
//     console.log(user);
//     return user.email
// }).then((email) => {
//     console.log(email);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log('Resolve and Reject are Working Properly');
// })

const prom = new Promise((resolve , reject) => {
   setTimeout(() => {
    const err = true;
    if(!err)
    {
        resolve({coursename : "Javascript" , price : 10000 , instructor : "Hitesh"})
    }
    else{
        reject('Error Caused');
    }
   }, 2000);
})

async function promi(){
   try {
    const response = await prom;
    console.log(response);     
   } catch (error) {
    console.log(error);
   }
}
promi()