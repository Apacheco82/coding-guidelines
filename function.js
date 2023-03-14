// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

//good
let newArr = [1, 2, 3];
newArr
  .map((x) => {
    const number = x + 1;
    return number * x;
  })

  [
    // bad
    (1, 2, 3)
  ].map((number) => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
  });

//good

let arr = [1, 2, 3];
arr.map((x) => {
  const number = x + 1;
  return `A string containing the ${number}.`;
});

//bad
x = 5;
y = 3;
function sum() {
  return a + b;
}

//good
let a = 5;
let b = 3;
const resultado = () => {
  return a + b;
};
