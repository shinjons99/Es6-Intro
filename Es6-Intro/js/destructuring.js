//* object destructuring

const fish = {
    name: 'king Hilsa',
    address: 'chandpur',
    color: 'silver',
    phone: '01777668766',
    price:4000
};

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const {phone} = fish;

console.log(phone);

const {age, name, profession} = {name:'almas', age:56, profession:'makeup artist'};
console.log(age, name, profession);


const {address} = fish;
console.log(address);


//* array destructuring
const [first, another] = [44, 99];
console.log(first, another);


//*
const nayoks = ['sakib', 'bappi', 'raj'];
const[king, lost, notun]= nayoks;
console.log(notun);


function getName(){
    return ['alim', 'halim'];
}

const [baba, chacha] = getName();
console.log(chacha, baba);


