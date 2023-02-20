// const number = [45, 12, 36, 84];
// number.unshift(25);
// console.log(number);

function getSum(a, b =9){
    return a + b;
}
// console.log(getSum(2, 7));

const y = x=> x*x;
const z= y(5);
// console.log(z);

const name = 'Hero';
const greetings = `Welcome Home! ${name}`;
// console.log(greetings);

const division = (num1, num2) => console.log(num1/num2);

const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
const array2 = [...nayikas];
// console.log(array2);

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 

console.log(newCars);
