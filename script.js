// const
let stringOne = prompt('enter your information', 'hello');

if (stringOne === null) {
    stringOne = prompt('enter your information or goodbay', 'hello');
    if (stringOne === null) {
        alert('Good bay');
        stringOne = 'see you';
    }
} else if (!stringOne.trim()) {
    stringOne = prompt('enter your information, hello');
} else if (stringOne.length < 2) {
    stringOne = prompt('enter your information in the correct', 'hello');
}
// const
let stringTwo = prompt('enter your information', 'hello');
if (stringTwo === null) {
    stringTwo = prompt('enter your information or goodbay', 'hello');
    if (stringTwo === null) {
        alert('Good bay');
        stringTwo = 'see you';
    }
} else if (!stringTwo.trim()) {
    stringTwo = prompt('enter your information', 'hello');
} else if (stringTwo.length < 2) {
    stringTwo = prompt('enter your information in the correct', 'hello');
}
// const
let stringThree = prompt('enter your information', 'hello');
if (stringThree === null) {
    stringThree = prompt('enter your information or goodbay', 'hello');
    if (stringThree === null) {
        alert('Good bay');
        stringThree = 'see you';
    }
} else if (!stringThree.trim()) {
    stringThree = prompt('enter your information', 'hello');
} else if (stringThree.length < 2) {
    stringThree = prompt('enter your information in the correct', 'hello');
}

const strings = `${stringOne}, ${stringTwo}, ${stringThree}`;

console.log(strings);
alert(strings);