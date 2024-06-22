
// #! /user/bin/env node

// import the 'inquirer'  module, which is a command live inter face for node.js
import inquirer from "inquirer"

// Declare a constant anserses' and assign it to the result of inquirer .prompt function


const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word"
    }
])

const words = answers.Sentence.trim().split(" ")

// console.log(words);

 console.log(`Your sentence word count is ${words.length}`);