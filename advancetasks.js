//TASK 1: CONSOLIDATING EVENT ATTENDEES
//Description: Given arrays of attendees for different events, create a single
//array of unique attendees (no duplicates) sorted alphabetically by name.
//Data:
const event1Attendees = ["Alice", "Bob", "Charlie"];
const event2Attendees = ["Bob", "Dave", "Eve"];
const event3Attendees = ["Charlie", "Eve", "Frank"];

const alleventattendees = [
  ...event1Attendees,
  ...event2Attendees,
  ...event3Attendees,
];
function removeDuplicates(alleventattendees) {
  let unique = alleventattendees.reduce((acc, curr) => {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  return unique;
}

console.log(removeDuplicates(alleventattendees));
//Expected Output:
//['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank']

// TASK 2: ANALYZING SURVEY RESPONSES
// Description: You have an array of survey responses where each response
// includes a list of topics and a rating (1-5). Find the average rating of each
// topic.
// Data
// const surveyResponses = [
//   { topics: ["Environment", "Economy"], rating: 4 },
//   { topics: ["Economy", "Health"], rating: 3 },
//   { topics: ["Environment", "Politics"], rating: 5 },
// ];

//

//    Expected Output:
//    { 'Environment': 4.5, 'Economy': 3.5, 'Health': 3, 'Politics': 5 }

// TASK 3: FILTERING AND MAPPING BOOK DATA
// Description: From an array of books, select books published after 2000 and
// create an array of their titles and authors in the format "Title by Author".
//• Data
const books = [
  { title: "Book A", author: "Author 1", year: 1999 },
  { title: "Book B", author: "Author 2", year: 2005 },
  { title: "Book C", author: "Author 3", year: 2001 },
  // more books...
];

function gettitleandauthor(books) {
  let res = books.filter((book) => book.year > 2000);
  let res1 = res.map((book) => `${book.title} by ${book.author} `);
  return res1;
}
console.log(gettitleandauthor(books));
//Expected Output:
//['Book B by Author 2', 'Book C by Author 3']

// TASK 4: COMPLEX PRODUCT INVENTORY ANALYSIS
// Description: Given an array of products, each with a list of stores and their
// inventory, find products that are available in all stores. A product is available
// in a store if its inventory is more than 0.
const products = [
  {
    name: "Product 1",
    stores: [
      { storeId: "S1", inventory: 10 },
      { storeId: "S2", inventory: 0 },
    ],
  },
  {
    name: "Product 2",
    stores: [
      { storeId: "S1", inventory: 5 },
      { storeId: "S2", inventory: 7 },
    ],
  },
  // more products...
];

function productinventory(products) {
  const gettingstores = products.filter((product) => product.stores);
  console.log(gettingstores);
  const output = gettingstores.filter((product) =>
    product.stores.every((store) => store.inventory > 0)
  );
  console.log(output);
  const op1 = output.map((product) => `${product.name}`);
  return op1;
}
console.log(productinventory(products));
//Expected Output:
//['Product 2']

// TASK 5: CREATING A NESTED COMMENT THREAD
// Description: Given an array of comments, each with a `commentId`, `text`,
// and an optional `replyTo` indicating the `commentId` they are replying to,
// structure these into a nested comment thread.
// Data:
const comments = [
  { commentId: "c1", text: "Comment 1" },
  { commentId: "c2", text: "Comment 2", replyTo: "c1" },
  { commentId: "c3", text: "Comment 3" },
  // more comments...
];

//expected output
//    [
//     { commentId: 'c1', text: 'Comment 1', replies: [{ commentId: 'c2', text: 'Comment 2', replies: [] }] },
//     { commentId: 'c3', text: 'Comment 3', replies: [] }
//    ]
