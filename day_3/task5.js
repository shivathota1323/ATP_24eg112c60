/*ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
    */
   const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
let v=transactions.filter((el)=>el.type=="credit");
console.log("all transactions :",v);
//map
let m=transactions.map((el)=>{
    return [el.amount]
})
console.log("transaction amounts :",m);
//reduce
let final_bal=0;
let r=transactions.reduce((acc,el)=>{

    if(el.type=="credit")
    {
        final_bal=final_bal+el.amount;
    }
    else{
        final_bal=final_bal-el.amount;
    }
    return final_bal;
},0)
console.log("final balance :",r);
//find
let f=transactions.find((el)=>el.type=="debit")
console.log("finding first debit row :",f)
//find index
let fi=transactions.findIndex((el)=>el.amount==10000)
console.log("index of amount 10k :",fi)