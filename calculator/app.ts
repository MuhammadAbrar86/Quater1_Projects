#! /usr/bin/env node

import inquirer from "inquirer";
import showBanner from "node-banner"


(async () => {
    await showBanner('M.I calculator', 'This calculator perform Addition | Subtraction | Multiplication && Division', "red","blue");
    cal()
})();

async function cal (){
    
console.log(`
_____________________
|  _________________  |
| |      M.I        | |
| | CLI calculator  | |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`);

const calculator = await inquirer.prompt([
   {
       name : "number1",
       type: "number",
       message : "Enter Your First Number"
   },
   {
       name : "number2",
       type: "number",
       message : "Enter Your Second Number"
   },
   {
       name : "oprator",
       type: "list",
       message : "Select Your Opration",
       choices:[ "Add", "Sub", "Mul" , "Div"]
   }
]);

let {number1,number2,oprator} = calculator

if(oprator === "Add"){
   console.log("Your Answer is:", number1 + number2);  
}
else if(oprator === "Sub"){
   console.log("Your Answer is:", number1 - number2); 
}
else if(oprator === "Mul"){
   console.log("Your Answer is:", number1 * number2); 
}
else if(oprator === "Div"){
   console.log("Your Answer is:", number1 / number2); 
}
};
