//* breakup with var
//* no more use of var
//* let: let it to reassign
//* const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);


const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
const message = bird + 'potas potas';
console.log(bird);

const numbers = [12, 89, 65, 45];
//* reassign is not allowed
//* numbers = [77, 66, 55, 22, 99];
numbers.push(123);
console.log(numbers);