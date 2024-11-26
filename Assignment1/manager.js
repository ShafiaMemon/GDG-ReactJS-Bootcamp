// Step 03: Import the Books array
const Books = require('./books');

// Step 04: Functions using map/filter

// 1. Function to print book titles with rating > 4.5
const highRatedBooks = Books.filter(book => book.rating > 4.5).map(book => book.title);
console.log("Books with rating higher than 4.5:", highRatedBooks);

// 2. Function to iterate over books and print details using destructuring
const printBookDetails = () => {
  Books.forEach(({ title, author, rating, genre }) => {
    console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
  });
};
printBookDetails();

// 3. Function to print book titles with genre "fiction"
const fictionBooks = Books.filter(book => book.genre.toLowerCase() === "fiction").map(book => book.title);
console.log("Fiction Books:", fictionBooks);

// 4. Function to display an array of book authors
const authors = Books.map(book => book.author);
console.log("Book Authors:", authors);
