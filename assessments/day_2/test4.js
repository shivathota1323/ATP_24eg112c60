/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
    
    */


let temp=[32,35,28,40,38,30,42]
let v1=temp.filter((element)=>element>35)
console.log(v1)

let v2=temp.map((element)=>(element*(9/5))+32)
console.log(v2)

let v3 =temp.reduce((a,element)=>a+element)
let s=0;
for(let i=0;i<temp.length;i++)
{
    s++;
}
//console.log(temp)
console.log(v3/s)

/*
ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
    */
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//let v4=cart.filter((product)=>(product.inStock))
let v4=cart.filter((element)=>element.inStock===true)
console.log(v4)

//const inStockProducts = cart.filter(product => product.inStock);inStockProducts
const productSummary = cart.map(product => ({
  name: product.name,
  totalPrice: product.price * product.quantity
}));
console.log(productSummary);

/*
let v5=cart.map((element)=>element.name,element.totalPrice)
console.log(v5)
*/

let v6=cart.find((element)=>element.name=="Mouse")
console.log(v6)

let v7=cart.findIndex((element)=>element.name=="Keyboard")
console.log(v7)