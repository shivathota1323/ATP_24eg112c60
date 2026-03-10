/*ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
    */
   const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
let fl=movies.filter((el)=>el.genre=="Sci-Fi")
console.log(fl)
//map
// let m=movies.map((el)=>{
//     let v=el.title=="Inception";
//     let s=el.rating=8.8;
//     return {v,s} 
// })
// console.log(m)/

//reduce
let r=movies.reduce((acc,el)=>el.rating+acc,0)
console.log(r)
//find
let f=movies.find((el)=>el.title=="Joker")
console.log(f)
//findindex
let fi=movies.findIndex((el)=>el.title=="Avengers")
console.log(fi)