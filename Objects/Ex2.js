// . Write a program that creates an array of objects, each representing a book with properties for title, author, and number of pages.
//Then, loop through the array and print out a message for each book that says "The book [title] by [author] is [pages] pages long."
function bookTitles() {
  const books = [
    {
      title: "Unscripted",
      author: "M. J. DeMarko",
      pages: 450,
    },
    {
      title: "Can't hurt me",
      author: "David Goggins",
      pages: 345,
    },
    {
      title: "1984",
      author: "G. Orwell",
      pages: 501,
    },
  ];

  books.forEach(book => {
    console.log(`The book ${book.title} by ${book.author} is ${book.pages} pages long.`)
  });
}

bookTitles()