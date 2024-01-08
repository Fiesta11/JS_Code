var c = 20;
let a = 22;
{
    let a = 12;
    const b = 22;
    console.log(c);
    console.log(a);
    var c = 14;
}
console.log(a);
// console.log(b);
console.log(c);