import inquirer from "inquirer"
    
    const currency: any = {
    USD:1, //Base currency
    EUR:0.92,
    GBP:0.79,
    INR:74.56,
    PKR:200
};

let user_answer = await inquirer.prompt(
    [
 
    
        {
  
          name: "from",
          message:"Enter from Currency ",
          type:"list",
          choices:["USD","EUR","GBP","INR","PKR"]
          
        },
        {
          
            name: "to",
            message:"Enter to Currency",
            type:"list",
            choices:["USD","EUR","GBP","INR","PKR"] 
        },
        {
            name: "amount",
            message:"Enter your Amount",
            type: "number"
        }
    ]
)
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to] 
let amount = user_answer.amount / fromAmount
let baseAmount = amount / fromAmount
let convertedAmont = baseAmount * toAmount
console.log(convertedAmont);