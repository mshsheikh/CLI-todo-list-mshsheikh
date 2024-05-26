#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
while (true) {
    let input = await inquirer.prompt([
        {
            name: "listItem",
            type: "input",
            message: "What do you want to add to your Todo list?",
        },
        {
            name: "addMore",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to add more items?",
        },
    ]);
    const { listItem, addMore } = input;
    todos.push(listItem);
    if (addMore == "No") {
        console.log("Here's your Todo List: ");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1}. ${todos[i]}`);
        }
        break;
    }
}
