const coding = ['js' ,'py' , 'cPP' , 'go'];

// coding.forEach((item) =>{
//     console.log(item);
// })

function print(item){
    console.log(item);
}

// coding.forEach(print)
// coding.forEach((item , index, arr) => {
//     console.log(item , index , arr);
// })

const my_coding = [
    {
        lang_name : "C++",
        lang_type : "CPP"
    },
    {
        lang_name : "Java",
        lang_type : "java"
    },
    {
        lang_name : "Javascript",
        lang_type : "CPP"
    },
    {
        lang_name : "Python",
        lang_type : "CPP"
    },
]

my_coding.forEach((item) => {
    console.log(item.lang_name);
});