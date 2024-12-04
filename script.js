// const
let stringOne = prompt('enter your information', 'hello');
if (stringOne === ' ') {
    stringOne = prompt('enter your information in the correct', 'hello');
} else if (stringOne === null) {
    stringOne = prompt('enter your informati, hello');
} else if (stringOne.length < 2) {
    stringOne = prompt('enter your information in the correct', 'hello');
}
// const
let stringTwo = prompt('enter your information', 'hello');
if (stringTwo === ' ') {
    stringTwo = prompt('enter your information in correct fofmat', 'hello');
} else if (stringTwo === null) {
    stringTwo = prompt('enter your information', 'hello');
} else if (stringTwo.length < 2) {
    stringTwo = prompt('enter your information in the correct', 'hello');
}
// const
let stringThree = prompt('enter your information', 'hello');
if (stringThree === ' ') {
    stringThree = prompt('enter your information in the correct fofmat', 'hello');
} else if (stringThree === null) {
    stringThree = prompt('enter your information', 'hello');
} else if (stringThree.length < 2) {
    stringThree = prompt('enter your information in the correct', 'hello');
}

let strings = `${stringOne}, ${stringTwo}, ${stringThree}`;

console.log(strings);