const nums = [1, 2, 3, 4];
const new_num = nums.reduce(function (acc, curr) {
  console.log(`acc : ${acc} , curr : ${curr}`);
  return acc + curr;
}, 0);
console.log(new_num);

const shopping_cart = [
  {
    name: "DSA in C++",
    price: 5000,
  },
  {
    name: "JS",
    price: 3000,
  },
  {
    name: "Python",
    price: 2000,
  },
  {
    name: "Data Science",
    price: 7000,
  },
];

const ans = shopping_cart.reduce((acc , item) => {
    return acc + item.price
} , 0)
console.log(ans);