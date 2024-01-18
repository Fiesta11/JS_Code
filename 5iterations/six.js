const coding = ['Js' , "java" , 'cpp' , "Python" , "Ruby"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const ans = arr.filter((num) => {
    return (num % 2 == 0) 
})
// console.log(ans);

const nums = [];

arr.forEach((item) =>{
    if(item > 4 && item % 2 == 0)
        nums.push(item)
})
// console.log(nums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const after_2000 = books.filter((item) => {
    return item.publish > 2000;
})

const genere_history = books.filter((item) => {
    return item.genre == 'History'
})
// console.log(after_2000);
console.log(genere_history);