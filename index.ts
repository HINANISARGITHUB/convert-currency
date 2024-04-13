#!/usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";


console.log(chalk.bold.bgCyan("Hi everyone! in this project we will convert pakistani currency from different country currency"));

console.log(chalk.bold.bgYellow("So Let begin"));

const currency: any = {
  PKR : 280, //base currency
  USD : 1,
  INR : 83.99,
  EUR : 0.93,
  GBP : 0.8,
  CAD : 1.37,
  AUD : 1.54,
  JPY : 154,
  NZD : 1.67,
  CHF : 0.91,
  ZAR : 18.87,
  RUB : 92.1,
  BGN : 1.83,
  CNY : 7.28,
  SAR : 3.77,
  TRY : 32.54,
  IQD : 1318,
  LKR : 300.66,
  OMR : 0.387,
  QAR : 3.66,
  BDT: 110.54,
  AED : 3.69,
  KWD: 0.31,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message:(chalk.greenBright ("Enter from currency you want to convert : ")),
      choices: ["PKR", "USD", "INR", "EUR", "GBP", "CAD", "AUD", "JPY", "NZD", "CHF", "ZAR", "RUB", "BGN", "CNY", "SAR", "TRY", "IQD", "LKR", "OMR","QAR", "BDT", "AED", "KWD"],

  },

  {
    name: "to",
    type: "list",
    message:(chalk.cyanBright("Enter to currency you want to convert : ")),

    choices: ["PKR", "USD", "INR", "EUR", "GBP", "CAD", "AUD", "JPY", "NZD", "CHF", "ZAR", "RUB", "BGN", "CNY", "SAR", "TRY", "IQD", "LKR", "OMR","QAR", "BDT", "AED", "KWD"],

  },

  {
    name: "amount",
    type: "number",
    message: (chalk.bold.magentaBright("Enter your amount : ")),
  },
]);

//Dynamic Approach Method
let fromAmount = currency [user_answer.from];
let toAmount = currency [user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bold.blueBright(convertedAmount));
console.log(chalk.bold.yellowBright("Thank you for using"));