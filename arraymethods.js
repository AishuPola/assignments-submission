// const oranges=[3,7,8,9];
// oranges.push(10);

// console.log(oranges);//address of the 1st value doesnot cchange.
// //it wil allow to change the array.
// //only value changed, adrres not chnaged. so
// oranges[0]=8;//no error

// oranges=[7,8]
// //here ADDRESS WILL CHANGE

// const arr=[1,2,3,4,5]
// arr.reverse()
//it modifies the orginal array.
//it doesnot copy
//it mutates the arrays--->changes the orginal .

//map
const a = [5, 9, 10, 11];
a.map((x) => x * 2);
console.log(a);

let x2 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < x2.length; i++) {
  x2[i] = x2[i] * 2;
}
console.log(x2);

// for(let idx in marks){//in-->index
//     console.log("index:",idx,"marks:",marks[idx]);
// }
// //readable and cleaner
// for(let mar of marks){
//     console.log("mark:",mar);
// }

let x3 = [1, 2, 3, 4, 5, 6, 7];
let x1 = [...x3];

for (let i in x3) {
  x1[i] = x1[i] * 2;
}
console.log(x3);
console.log(x1);

const chikus = [1, 2, 3, 4, 5, 6, 7, 8];
function doublechikus(chikus) {
  for (chiku of chikus) {
    doublechikus.push(chik * 2);
  }

  return doublechikus();
}
console.log(doublechikus);
console.log(chikus);

//map function
// console.log(chikus.map((chiku)=> chiku*2))
// console.log(chikus)

// [5,6,7,8].map((b)=>b*2)
const doublingchiku = (chiku) => chiku * 2;
[5, 6, 7, 9].map(doublingchiku);
// function is getting called with the argument
//fuction go to item

//what code,implementation is done inside the map

let arr = [5, 6, 9, 10];

let x = [];
function Ownmap(fn, arr) {
  for (let i of arr) {
    x.push(fn(i));
  }

  console.log(arr);
  console.log(x);
}

Ownmap((chiku) => chiku * 2, arr);
Ownmap((chiku) => chiku - 2, arr);

//task-2
// let v=[5,6,9,10].map((x,i)=>x*2 +i);
// console.log(v)

let z = [5, 6, 9, 10];
let z2 = [];
function Ownmap1(fn1, z) {
  for (let p in z) {
    z2.push(fn1(z[p]) + z.indexOf(arr[p]));
  }

  console.log(z);
  console.log(z2);
}
Ownmap1((chiku) => chiku * 2, arr);

///length
const avengers = [
  "Hulk",

  "Iron man",

  "Black widow",

  "Captain america",

  "Spider man",

  "Thor",
];
console.log(avengers.map((count) => count.length));

//letter count should be more than 10.
const avengerss = [
  "Hulk",

  "Iron man",

  "Black widow",

  "Captain america",

  "Spider man",

  "Thor",
];
console.log(avengers.filter((count) => count.length > 10));

const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

console.log(
  books
    .filter((book) => book.rating >= 4.7)
    .map((book) => book.title)
    .sort()
);

// Rating 4.7 or more

// Output
// ['A Brief History of Time', 'Clean Code', 'Sapiens' ]
// Task 1: High-Value Transactions in 2023
// Description: Given an array of transactions, identify transactions that are above $5000,
// occurred in 2023, and belong to the 'Business' category. Transform this filtered
// array into an array of strings formatted as "Transaction [id]: $[amount] on [date]".
// Data:
const transactions = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];
// Expected Output:
// ["Transaction T2: $6500 on 2023-02-20"]

const abc = transactions
  .filter((transaction) => {
    return (
      transaction.amount >= 5000 &&
      transaction.category == "Business" &&
      transaction.date.startsWith("2023")
    );
  })
  .map((transaction) => {
    return `Transaction ${transaction.id}: $${transaction.amount} on ${transaction.date}`;
  });

console.log(abc);

// Top 3 Students
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 79 },
  { name: "Eva", score: 95 },
];

// This should output: "Eva, Bob, Charlie"

const result = students
  .sort((a, b) => b.score - a.score)
  .map((student) => student.name)
  .slice(0, 3)
  .join(", ");
console.log(result);

//   Task 2: Departmental Salary Expenditure
// Description: Calculate the total salary expenditure for each department from an array of departments,
// each with an array of employees.
// Data:
const departments = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];
// Expected Output:
[{ Engineering: 170000 }, { Marketing: 125000 }];

//const res=departments.map((department)=>department.salary)

// Grade is 80 or more - promote

const employees = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

console.log(employees);
const r = employees.filter((employee) => employee.grade >= 80);
console.log(r.map((employee) => ({ ...employee, status: "promoted" })));

const players = [
  { name: "Alice", skills: ["defense", "speed"] },
  { name: "Bob", skills: ["speed", "attack", "strategy"] },
  { name: "Charlie", skills: ["speed", "attack"] },
  { name: "David", skills: ["strategy", "defense", "speed"] },
  { name: "Eva", skills: ["speed", "strategy"] },
];

const requiredSkills = ["speed", "strategy"];

//Output
//'David, Eva','bob'

const v = players
  .filter((player) =>
    requiredSkills.every((skill) => player.skills.includes(skill))
  )
  .map((player) => player.name);
console.log(v);

const person1 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
  place: {
    //     city: "Chennai",
  },
};

if (person1.place) {
  if (person1.place.city) {
    console.log("city is not known");
  } else {
    console.log(person1.place.city);
  }
} else {
  console.log("city is unknown");
}

//or
person1?.place?.city;
// ?.--optional chaining
person1?.place?.city || "unknown";
//if person1?.place?.city is falsy, then unknown is given as output

// null,undefined as taken as falsy in nullish colleasc,
//or use

// if key name and variable name are same then it can be shortend--object shortend

// Ex1

// const person = {
//   name: {
//     first: "Alice",
//     last: "Johnson",
//   },
//   age: 28,
//   favoriteColors: ["blue", "green"],
// };

// function getPersonInfo(p) {
//   const firstName = p.name.first;
//   const lastName = p.name.last;
//   const personAge = p.age;
//   const primaryColor = p.favoriteColors[0];
//   const secondaryColor = p.favoriteColors[1];

//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// }

// console.log(getPersonInfo(person));

// is equivalent to:
// const a = obj.a;
// const b = obj.b;

//sol:

const person2 = {
  name: {
    first: "Alice",
    last: "Johnson",
  },
  age: 28,
  favoriteColors: ["blue", "green"],
};

function getPersonInfo(p) {
  const {
    age: personAge,
    name: { first: firstName, last: lastName },
  } = p;

  const [primaryColor, secondaryColor] = p.favoriteColors;

  return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}

console.log(getPersonInfo(person2));

//2
function getPersonInfo1(p) {
  const {
    age: personAge,
    name: { first: firstName, last: lastName },
    favoriteColors: [primaryColor, secondaryColor],
  } = p;

  //const [primaryColor, secondaryColor] = p.favoriteColors;

  return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}

console.log(getPersonInfo1(person2));

//3
function getPersonInfo2({
  age: personAge,
  name: { first: firstName, last: lastName },
  favoriteColors: [primaryColor, secondaryColor],
}) {
  //const [primaryColor, secondaryColor] = p.favoriteColors;

  return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}
console.log(getPersonInfo2(person2));

//4
const getPersonInfo3 = ({
  age: personAge,
  name: { first: firstName, last: lastName },
  favoriteColors: [primaryColor, secondaryColor],
}) =>
  `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;

console.log(getPersonInfo3(person2));

//task-2

function createBook(title, author, year) {
  return {
    title: title,
    author: author,
    year: year,
    getSummary: function () {
      return `${title} by ${author}, published in ${year}.`;
    },
  };
}

const book = createBook("1984", "George Orwell", 1949);
console.log(book.getSummary(), book);

//1
function createBook1(title, author, year) {
  return {
    title,
    author,
    year,
    getSummary() {
      return `${title} by ${author}, published in ${year}.`;
    },
  };
}

const book1 = createBook1("1984", "George Orwell", 1949);
console.log(book1.getSummary(), book1);
//2
const createBook2 = (title, author, year) => ({
  title,
  author,
  year,
  getSummary() {
    return `${title} by ${author}, published in ${year}.`;
  },
});

const book2 = createBook2("1984", "George Orwell", 1949);
console.log(book2.getSummary(), book2);
//3
const createBook3 = (title, author, year) => ({
  title,
  author,
  year,
  getSummary() {
    return `${title} by ${author}, published in ${year}.`;
  },
});

const book3 = createBook2("1984", "George Orwell", 1949);
console.log(book3.getSummary(), book3);
/////////////////
//task=3
// Ex3:
const users = [
  {
    id: 1,
    name: "Alice",
    profile: {
      age: 25,
      address: {
        city: "Wonderland",
        zip: "12345",
      },
    },
  },
  {
    id: 2,
    name: "Bob",
  },
];

function displayUserProfile(userId) {
  const user = users.find((u) => u.id === userId);

  const age = user?.profile?.age ?? "unknown";
  const city = user?.profile?.address?.city ?? "unknown";

  console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
}

displayUserProfile(1); // Should work
displayUserProfile(2); // Throws  error due to missing profile data =. Hence gracefully handle the case

// Ex 4
const library = [
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    borrowed: true,
  },
  { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
  { title: "1984", authors: ["George Orwell"], borrowed: true },
  { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
  { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
];

// Task 4.1: Determine if all books in the library have been borrowed.
const q = library.every((lib) => lib.borrowed == true);
if (q) {
  console.log("Yes, all books are borrowed");
} else {
  console.log("not all books are borrowed");
}

// console.log(library?.borrowed ||"Yes, all books are borrowed")

// Output
// "Yes, all books are borrowed"

// Task 4.2: Determine if there are books in the library written by multiple authors

console.log(library?.authors || "No, there are no multiple authors");
// Output
// "No, there are no multiple authors"

//to have the highest value using reduce.
const arr5 = [1, 7, 3, 10, 5];
const max1 = arr5.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});
console.log(max1);
