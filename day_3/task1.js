/*ASSIGNMENT 1:
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

//filter
let ip=cart.filter((e)=>e.inStock)
console.log(ip)

//map
let m=cart.map((e)=>[e.name,e.price*e.quantity])
console.log(m)

//reduce
let r=cart.reduce((acc,el)=>(el.price*el.quantity)+acc,0)
console.log("total cart value :",r)

//find(
let f=cart.find((el)=>el.name=="Mouse")
console.log(f)

//find index
let fi=cart.findIndex((el)=>el.name=="Keyboard")
console.log(fi)