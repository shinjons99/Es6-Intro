// function add(first, second){
//     console.log(first, second);
//     // second = second ||0;
//     // if(second == undefined){
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }

function add(first, second = 36){
    const total = first + second;
    return total;
}
const result = add(10);
console.log(result);

//*Without second value we find the result because of parameter declaration in es6
function fullName(first, last = 'chowdhury'){
    const name = first + '' +last;
    return name;
}
const name = fullName('Aslam');
console.log(name);