/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/
      console.log();
let index=0;
class Book{
    title;
    author;
    pages;
    isAvailable;
    constructor(title,author,pages,isAvailable)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    getInfo()
    {
        return "title: "+this.title+"  ,author: "+this.author+" ,pages: "+this.pages+" ,avialable: "+this.isAvailable;
    }
     borrow()
    {
      this.isAvailable=false;
      return " the book : "+this.title+ " ,is barrowed ,hence not avilable"; 
    }
    returnBook()
    {
      this.isAvailable=true;
      return "the book : "+this.title +" ,is returned ";
    }
}

let books=[new Book("harry potter","harry",500,true),
new Book("1984","boss",200,true),
new Book("jungle","dennie",400,true),
new Book("the hobbit","falsee",180,true),
new Book("fisherman","collecter",700,true)]


for(let i=0;i<books.length;i++)
{
    console.log(books[i].getInfo())
}
console.log();

console.log(books[1].borrow())
console.log(books[2].borrow())
console.log(books[1].returnBook())

console.log();
let count=0;
for(let i=0;i<books.length;i++)
{
    if(books[i].pages>300)
    {
        count++;
    }
}
//console.log("long books: ",count)
function isLongBook()
{
    console.log("total number of long books ( >=300 pages) are : ",count)
}
isLongBook();
