const stringOne = prompt('enter your information', 'hello');
if (stringOne === ' ') {
    stringOne = prompt('enter your information in the correct', 'i am string');
} else if (stringOne === null) {
    stringOne = prompt('enter your information', 'i am string');
} else if (stringOne.length < 2) {
    stringOne = prompt('enter your information in the correct', 'i am string');
}

const stringTwo = prompt('enter your information', 'hello');
if (stringTwo === ' ') {
    stringTwo = prompt('enter your information in correct fofmat', 'i am string');
} else if (stringTwo === null) {
    stringTwo = prompt('enter your information', 'i am string');
} else if (stringTwo.length < 2) {
    stringTwo = prompt('enter your information in the correct', 'i am string');
}

const stringThree = prompt('enter your information', 'hello');
if (stringThree === ' ') {
    stringThree = prompt('enter your information in the correct fofmat', 'i am string');
} else if (stringThree === null) {
    stringThree = prompt('enter your information', 'i am string');
} else if (stringThree.length < 2) {
    stringThree = prompt('enter your information in the correct', 'i am string');
}

let strings = `${stringOne}, ${stringTwo}, ${stringThree}`;

console.log(strings);