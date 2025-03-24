const {firstName, lastName } = require("./names.js");
const {hobbyOne, hobbyTwo, hobbyThree} = require("./hobbies.js");

function generateString (){
    return `${firstName} ${lastName} ha come hobby ${hobbyOne}, ${hobbyTwo}, ${hobbyThree}`
}

const generatedString = generateString();

console.log(generateString)