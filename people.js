const {firstName, lastName } = require("./names.js");
const [hobbyOne, hobbyTwo, hobbyThree] = require("./hobbies.js");

function generateObject (){
    return {
        firstName, 
        lastName,
        hobbyOne,
        hobbyTwo,
        hobbyThree
    }
}

const generatedObject = generateObject();

console.log(generatedObject)