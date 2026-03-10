/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter
let fl=students.filter((el)=>el.marks>=40)
console.log(fl)

//map
let grade = students.map(st => {
  let grade;
  if (st.marks >= 90) {
    grade = "A";
  } else if (st.marks >= 75) {
    grade = "B";
  } else if (st.marks >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }

  return { ...st, grade };
});

console.log(grade);

//reduce
let r=students.reduce((acc,el)=>el.marks+acc,0)
v=r/students.length;
console.log(v)

//find
let f=students.find((el)=>el.marks=92)
console.log(f)

//find index
let fi=students.findIndex((el)=>el.name=="Kiran")
console.log(fi)