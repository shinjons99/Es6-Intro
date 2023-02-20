const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiline = 'First Line text \n' +
'second line of code \n' + 'third line of text \n'+
'fourth line of texg \n';
console.log(multiline);


const newMultiline = `first line of text
second line of text
third line of text
fourth line o text`;
//* console.log(newMultiline);

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444]
const summary = 'sum of:' + a +' and ' + b + ' is:' + (a+b);
//* console.log(summary);

const newSummary = `sum of ${a} and ${nums.length} is: ${a+b}`;
console.log(newSummary);