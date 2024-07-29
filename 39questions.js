const transactions1 = [
  { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
  { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
  { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
  // more transactions...
];
// Expected Output:
// ["Transaction T2: $6500 on 2023-02-20"]

const w = transactions1
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

console.log(w);

//task2

//   Task 2: Departmental Salary Expenditure
// Description: Calculate the total salary expenditure for each department from an array of departments, each with an array of employees.
// Data:
const departments1 = [
  { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
  { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
  // more departments...
];
// Expected Output:
// [{ "Engineering": 170000 }, { "Marketing": 125000 }]

const res = departments1.map((department) => {
  const sum_sal = department.employees.reduce((acc, employee) => {
    return acc + employee.salary;
  }, 0);
  return { [department.name]: sum_sal };
});
console.log(res);

// Data: Array of departments with employees and their salaries
//task-3
// Task 3: Weather Data Sorting and Structuring
// Description: Sort an array of weather data objects in descending order
//of temperature and restructure the data into an object with dates as keys and temperatures as
// values.
// Data:
const weatherData = [
  { date: "2023-03-01", temperature: 16 },
  { date: "2023-03-02", temperature: 20 },
  { date: "2023-03-03", temperature: 18 },
  // more data...
];
// Expected Output:
// { "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }

// const y=
//     weatherData.sort((a,b)=>b.temperature-a.temperature)

// console.log(y.reduce((acc,{date,temperature})=>{
//     acc[date]=[temperature]
//     return acc

// },{}
const transformedData = weatherData
  .sort((a, b) => b.temperature - a.temperature)
  .reduce((acc, { date, temperature }) => {
    acc[date] = temperature;
    return acc;
  }, {});

console.log(transformedData);

//   Task 4: Analyzing Electronics Products
// Description: From an array of products, find products in the 'Electronics' category with more than
// 50 reviews and a rating of at least 4.0. Calculate the average price of
// these products.
// Data:
const products = [
  { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
  { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
  { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
  // more products...
];
// Expected Output:
// 199.99 // Assuming only one product meets the criteria

const ep = products.filter(
  (product) =>
    (product.category =
      "Electronics" && product.reviews > 50 && product.rating >= 4.5)
);
const t =
  ep.reduce((acc, product) => {
    return acc + product.price;
  }, 0) / ep.length;

console.log(t);

// Task 5: Merging User and Order Data
// Description: Merge two arrays of objects based on a common key ( userId ) to create a new array of objects
// that includes each user's name and their corresponding
// order details.
//Data:
const users = [
  { userId: "U1", name: "Alice" },
  { userId: "U2", name: "Bob" },
  // more users...
];
const orders = [
  { userId: "U1", orderDetails: "Order 1 Details" },
  { userId: "U2", orderDetails: "Order 2 Details" },
  // more orders...
];
// Expected Output:
// [
// { name: 'Alice', orderDetails: 'Order 1 Details' },
// { name: 'Bob', orderDetails: 'Order 2 Details' }
// ]

// const arr=[...users,...orders]
// const b=arr.filter((user)=>user.name )

// console.log(b.filter((order)=>order.orderDetails))

// var tmp=[];
// users.map(user=>{

//     let abc={}
//     abc=orders.filter((value)=>value.userId==user.userId )
//     console.log(abc)
//     // abc.push(user.name)
//     tmp.push(abc.orderDetails)
//     tmp.push(user.name)

// }

// )
// console.log(tmp)

let tmp = [];
users.map((user) => {
  let order = orders.filter((value) => value.userId == user.userId)[0]
    .orderDetails;
  tmp.push(user.name, order);
});
console.log(tmp);

// Q1. Implement getUserAge function
const userData = {
  user: {
    profile: {
      name: "Alice",
      age: null,
    },
  },
};

function getUserAge(userData) {
  const age = userData?.user?.profile?.age || "Age not provided";
  return age;
}

console.log(getUserAge(userData)); // Should print: Age not provided
console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
console.log(getUserAge({ user: {} })); // Should print: Age not provided
//2

// Q2. Write a function that returns a new array with an additional skill for each employee
// Clue
// const employees = [
//   {
//     id: 1,
//     name: "Alice",
//     position: "Developer",
//     skills: ["JavaScript", "React"],
//   },
//   {
//     id: 2,
//     name: "Bob",
//     position: "Manager",
//     skills: ["Leadership", "Communication"],
//   },
//   { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision"] },
// ];

// console.log(addSkill(employees, "Problem Solving"));
// Should print:
// [
//   { id: 1, name: "Alice", position: "Developer", skills: ["JavaScript", "React", "Problem Solving"] },
//   { id: 2, name: "Bob", position: "Manager", skills: ["Leadership", "Communication", "Problem Solving"] },
//   { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision", "Problem Solving"] }
// ]

// Q3. Find the total price of all products using arrow functions and
// array methods - Implement getTotalPrice
const products1 = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

function getTotalPrice(products1) {
  return products1.reduce((acc, curr) => acc + curr.price, 0);
}

console.log(getTotalPrice(products1)); // Should print: 2200
//4
// Write a function that extracts the user's name and theme,
// providing default values if they are missing
const userProfile = {
  id: 1,
  name: "Eve",
  settings: {
    theme: "dark",
  },
};

function getUserSettings(userProfile) {
  let b = userProfile?.name ?? "unknown";
  let u = userProfile?.settings?.theme ?? "light";

  return `${b} prefers the ${u} theme`;
}

console.log(getUserSettings(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings({ id: 2, name: "Adam" })); // Should print: Adam prefers the lig

//using destructuring
// const getPersonInfo3=({
//   age: personAge,
//   name: { first: firstName, last: lastName },
//   favoriteColors:[primaryColor, secondaryColor]
// }) =>
const getUsersettings = (userProfile) => {
  const {
    name,
    setting: { theme },
  } = userProfile;
  console.log(settings);
  return `${name} prefers the dark theme`;
};
//5
//Write a function that takes a user object and
//returns a message indicating if the user is active or not
const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };

function getUserStatus(user) {
  let h = user.active == false ? "inactive" : "active";
  return `${name} is currently ${h}`;
}

console.log(getUserStatus(user1)); // Should print: Jane is currently active
console.log(getUserStatus(user2)); // Should print: John is currently inactive

//6
// Q6: Write a function that returns the user's age if available, or
//  a default message if not, using nullish coalescing and optional chaining
const userWithFullProfile = {
  id: 1,
  name: "Alice",
  profile: {
    age: 25,
    address: {
      city: "Wonderland",
      zip: "12345",
    },
  },
};

const userWithPartialProfile = {
  id: 2,
  name: "Bob",
  profile: {
    age: null,
  },
};

function getUserAge(user2) {
  return user2?.profile?.age || "Age not provided";
}
console.log(getUserAge(userWithFullProfile)); // Should print: 25
console.log(getUserAge(userWithPartialProfile)); // Should print: Age not provided
console.log(getUserAge({ id: 3, name: "Charlie" })); // Should print: Age not provided

//7
//Q7: Write a function that generates a summary string for the top scorer
// using template literals and array methods

const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
];

function getTopScorer(scores) {
  let new1 = scores.reduce((acc, curr) => {
    return acc.score > curr.score ? acc : curr;
  });
  return `${new1.name} is the top scorer with a score of ${new1.score}`;
}

console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score of 92.

///Q8: Create a function that returns a greeting message based on the time of day
// Clue
// Use Date methods
// Ex26 - Create a function that returns a greeting message based on the time of day
function greet(name) {
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";
  return `Good ${timeOfDay}, ${name}!`;
}

console.log(greet("Alice")); // Good morning, Alice! (If the time 10am)
console.log(greet("Alice")); // Good afternoon, Alice! (If the time 1pm)
console.log(greet("Alice")); // Good evening, Alice! (If the time 7pm)

//9
// Q9: Write a function that returns the name of a user's first friend using nested destructuring

// function getPersonInfo2({
//   age: personAge,
//   name: { first: firstName, last: lastName },
//   favoriteColors: [primaryColor, secondaryColor],
// }) {
//   //const [primaryColor, secondaryColor] = p.favoriteColors;

//   return `${firstName} ${lastName} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
// }
// console.log(getPersonInfo2(person2));
const users1 = [
  { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
  { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
  { id: 4, name: "Deepak", friends: [] },
];
function getFirstFriendName(id) {
  let searchuser = users1.find((user) => user.id == id);

  if (searchuser) {
    return searchuser.friends[0]?.name ?? `${searchuser.name} has no friends`;
  } else {
    return "user not found";
  }
}

console.log(getFirstFriendName(1)); // Should print: Bob
console.log(getFirstFriendName(2)); // Should print: Eve
console.log(getFirstFriendName(3)); // Should print: User not found
console.log(getFirstFriendName(4)); // Should print: Deepak has no friends 🥲

const movies = [
  {
    id: 1,
    title: "Baahubali",
    director: "S. S. Rajamouli",
    year: 2015,
    ratings: [8, 9, 10],
    genre: "Action",
  },
  {
    id: 2,
    title: "Arjun Reddy",
    director: "Sandeep Reddy Vanga",
    year: 2017,
    ratings: [9, 8, 9],
    genre: "Drama",
  },
  {
    id: 3,
    title: "Mahanati",
    director: "Nag Ashwin",
    year: 2018,
    ratings: [10, 9, 8],
    genre: "Biography",
  },
  {
    id: 4,
    title: "Eega",
    director: "S. S. Rajamouli",
    year: 2012,
    ratings: [7, 8, 9],
    genre: "Fantasy",
  },
  {
    id: 5,
    title: "Jersey",
    director: "Gowtam Tinnanuri",
    year: 2019,
    ratings: [9, 9, 8],
    genre: "Sports",
  },
];
// Q10. Write a function that finds a movie by id and returns its title and
//genre in a formatted string

function getMovieDetails(id) {
  const fMovie = movies.find((movie) => movie.id === id);
  if (fMovie) {
    return `${fMovie.title} is a ${fMovie.genre} movie`;
  } else {
    return "Movie not found";
  }
}

console.log(getMovieDetails(1)); // Should print: Baahubali is an Action movie
console.log(getMovieDetails(5)); // Should print: Jersey is a Sports movie
console.log(getMovieDetails(6)); // Should print: Movie not found

// Q11. Write a function that filters out movies released before a
// certain year and calculates the average rating of the remaining movies (Rating must be rounded)

function getAverageRatingAfterYear(year) {
  let res = movies.filter((movie) => movie.year < year);

  const y = res.reduce((acc, movie) => {
    return (acc + movie.ratings) / res.length;
  }, 0);
  if (y) return y;
  else return "no  movies after the specified year ";
}

// function getAverageRatingAfterYear(year) {
//   let res = movies
//     .filter((movie) => movie.year < year)
//     .reduce((acc, movie) => {
//       return (acc + movie.ratings) / res.length;
//     }, 0);
//   if (res) return res;
//   else return "no  movies after the specified year ";
// }
console.log(getAverageRatingAfterYear(2016)); // Should print: 8.83 (average rating of Arjun Reddy, Mahanati, and Jersey)
console.log(getAverageRatingAfterYear(2020)); // Should print: No movies after the specified year

//Q12: Write a function that checks if all movies of a certain genre have ratings above a certain value
function allRatingsAboveForGenre(value, genre) {
  const filtered = movies.filter((movie) => movie.genre == genre);
  const new1 = filtered.every((movie) => movie.ratings.every((n) => n > value));
  return new1
    ? `yes, all ${genre} movies are above ${value} ratings`
    : `No, not all ${genre} movies are above ${value} ratings`;
}
console.log(allRatingsAboveForGenre(7, "Action")); // Should print: Yes, all Action movies are above 7 ratings
console.log(allRatingsAboveForGenre(8, "Biography")); // Should print: No, not all Biography movies are above 8 ratings

//Q13: Write a function that returns a string with each movie's title and its ratings joined by commas

function getTitlesAndRatings() {
  const ratings5 = movies.map((movie) => {
    return `${movie.title}:${movie.ratings.join(",")}`;
  });

  return ratings5.join("|");
}
console.log(getTitlesAndRatings());

// Should print: Baahubali: 8, 9, 10 | Arjun Reddy: 9, 8, 9 | Mahanati: 10, 9, 8 | Eega: 7, 8, 9 | Jersey: 9, 9, 8

//Q14: Write a function that returns a single array containing all ratings of all movies

function getAllRatings() {
  return movies
    .map((movie) => movie.ratings)
    .reduce((acc, curr) => acc.concat(curr), []);
}
console.log(movies.map((mv) => mv.ratings.flat()));
console.log(getAllRatings());
// Should print: [8, 9, 10, 9, 8, 9, 10, 9, 8, 7, 8, 9, 9, 9, 8]

// Q15: Write a function that returns an array of titles of movies that
// have ratings above a certain threshold in any rating

function getTitlesWithHighRatings(ratings) {
  var gettitbyrating = movies.filter((movie) => {
    return movie.ratings.every((every1) => every1 > ratings);
  });
  let zzz = gettitbyrating.map((movie) => movie.title);

  return zzz;
}

console.log(getTitlesWithHighRatings(9)); // Should print: ["Baahubali", "Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesWithHighRatings(10)); // Should print: ["Mahanati"]

//Q16: Write a function that returns an array of movie titles sorted
//by their average ratings in descending order

function getTitlesSortedByAverageRating() {
  const gettitle = movies
    .sort((a, b) => b.ratings - a.ratings)
    .map((movie) => movie.title);
  return gettitle;
}
console.log(getTitlesSortedByAverageRating()); // Should print: ["Baahubali", "Arjun Reddy", "Jersey", "Mahanati", "Eega"]

//Q17: Write a function that finds the movie with the highest average rating and returns its title

function getMovieWithHighestAverageRating() {
  const sortedMovies = movies.sort((a, b) => {
    const aAvg =
      a.ratings.reduce((sum, rating) => sum + rating, 0) / a.ratings.length;
    const bAvg =
      b.ratings.reduce((sum, rating) => sum + rating, 0) / b.ratings.length;
    return bAvg - aAvg;
  });

  return sortedMovies[0].title;
}
console.log(getMovieWithHighestAverageRating());

//Q18: Write a function that returns an array of movie titles released after a certain year

function getTitlesAfterYear(year) {
  const b = movies.filter((movie) => movie.year > year);
  const a = b.map((movie) => movie.title);
  return a;
}

console.log(getTitlesAfterYear(2015)); // Output: ["Arjun Reddy", "Mahanati", "Jersey"]
console.log(getTitlesAfterYear(2018)); // Output: ["Jersey"]

//Q19: Write a function that finds a movie by its title and returns a formatted string with its director and year

function getMovieInfoByTitle(title) {
  let a = movies.find((movie) => movie.title == title);
  if (a) return `${a.title} directed by ${a.director} in ${a.year}`;
  else {
    return "movie not found";
  }
}
console.log(getMovieInfoByTitle("Baahubali")); // Should print: Baahubali directed by S. S. Rajamouli was released in 2015
console.log(getMovieInfoByTitle("Jersey")); // Should print: Jersey directed by Gowtam Tinnanuri was released in 2019
console.log(getMovieInfoByTitle("Avatar")); // Should print: Movie not found

//Q20: Write a function that returns an array of titles of movies that
//have at least one rating below a certain threshold
function getTitlesWithLowRatings(ratings) {
  let gettit = movies.filter((movie) => {
    return movie.ratings.some((some1) => some1 < ratings);
  });
  let gettit2 = gettit.map((movie) => movie.title);

  return gettit2;
}
console.log(getTitlesWithLowRatings(8)); // Should print: ["Eega"]
console.log(getTitlesWithLowRatings(9)); // Should print: ["Baahubali", "Mahanati", "Eega", "Jersey"]

//Q21: Write a function that calculates the total number of ratings for movies of a specific genre

function getTotalRatingsByGenre(genre) {
  let a = movies
    .filter((movie) => movie.genre == genre)
    .reduce((acc, movie) => (acc = acc + movie.ratings.length), 0);
  return a;
}

console.log(getTotalRatingsByGenre("Action")); // Should print: 3
console.log(getTotalRatingsByGenre("Drama")); //Should print: 3

//Q22: Write a function that returns an array of movies where
//the average rating is above a certain value, including the average rating in the result

// const moviesWithAverageRating = movies.map(movie => {
//   const totalRating = movie.ratings.reduce((sum, rating) => sum + rating, 0);
//   const averageRating = totalRating / movie.ratings.length;
//   return { ...movie, averageRating };
// });

// // Filter the movies with an average rating above the minimum
// const highRatedMovies = moviesWithAverageRating.filter(movie => movie.averageRating >= minRating);

// // Format the result as requested
// return highRatedMovies.map(movie => `${movie.title} has an average rating of ${movie.averageRating.toFixed(2)}`);
// }

function getMoviesWithHighAverageRating(ratings) {
  let getmovies = movies.map((movie) => {
    const getmovie =
      movies.ratings.reduce((acc, movie) => acc + movie, 0) /
      movies.ratings.length;
    return getmovie;
  });
}
console.log(getMoviesWithHighAverageRating(8.5));
// Should print: ["Baahubali has an average rating of 9.00", "Arjun Reddy has an average rating of 8.67", "Jersey has an average rating of 8.67"]

//Q23: Write a function that returns an array of movie titles directed by a specific director,
// sorted by year in ascending order

function getTitlesByDirectorSortedByYear(director) {
  let c = movies
    .filter((movie) => movie.director == director)
    .sort((a, b) => a.year - b.year)
    .map((movie) => movie.title);
  return c;
}

console.log(getTitlesByDirectorSortedByYear("S. S. Rajamouli")); // Should print: ["Eega", "Baahubali"]
console.log(getTitlesByDirectorSortedByYear("Nag Ashwin")); // Should print: ["Mahanati"]

//Q24: Write a function that returns the average rating of movies released in a specific year

function getAverageRatingByYear(year) {
  let avg_total = movies.find((movie) => movie.year == year);
  let ratings1 = avg_total.ratings;
  let sum = ratings1.reduce((acc, curr) => acc + curr, 0);
  let average = sum / ratings1.length;
  return average;
}

//   if (avg_total) {
//     let bb = avg_total.ratings
//     let qqq =
//       bb.reduce(acc, movie) => (acc = acc + movie);

//     return bb;
//   } else {
//     ("  No movies released in the specified year");
//   }
// }
console.log(getAverageRatingByYear(2018)); // Should print: 9.00
console.log(getAverageRatingByYear(2015)); // Should print: "No movies released in the speci

//Q25: Write a function that returns an array of objects with
// movie titles and their highest ratings

function getMoviesWithHighestRatings() {
  return movies.map((movie) => ({
    title: movie.title,
    highestRating: Math.max(...movie.ratings),
  }));
}
console.log(getMoviesWithHighestRatings());
// Should print: [{ title: "Baahubali", highestRating: 10 },
// { title: "Arjun Reddy", highestRating: 9 },
// { title: "Mahanati", highestRating: 10 }, { title: "Eega", highestRating: 9 },
//  { title: "Jersey", highestRating: 9 }]

//Q26: Write a function that returns the director with the most movies directed

// function getDirectorWithMostMovies() {
//   const directorCounts = movies.reduce((acc, movie) => {
//     acc[movie.director] = (acc[movie.director] || 0) + 1;
//     return acc;
//   }, {});

//   const maxDirector = Object.keys(directorCounts).reduce((max, director) =>
//     directorCounts[max] > directorCounts[director] ? max : director
//   );

//   return { director: maxDirector, count: directorCounts[maxDirector] };
// }
// console.log(getDirectorWithMostMovies()); // Should print the director with the most movies

//Q27: Write a function that merges two arrays of movies into one using the spread operator
const moreMovies = [
  {
    id: 6,
    title: "RRR",
    director: "S. S. Rajamouli",
    year: 2022,
    ratings: [10, 10, 9],
    genre: "Action",
  },
  {
    id: 7,
    title: "Pushpa",
    director: "Sukumar",
    year: 2021,
    ratings: [8, 9, 8],
    genre: "Action",
  },
];

function mergeMovies(movies, moreMovies) {
  const merged = [...movies, ...moreMovies];
  return merged;
}

console.log(mergeMovies(movies, moreMovies));
// Should print: array with all 7 movies

//Q28: Write a function that accepts any number of movie objects and returns
// an array of their titles using the rest operator

function getTitles(...movies) {
  return movies.map((movie) => movie.title);
}
console.log(getTitles(...movies)); // Should print titles of all movies in the array
console.log(getTitles(movies[0], movies[1])); // Should print: ["Baahubali", "Arjun Reddy"]

//output wrong
//Q29: Write a function that merges two arrays of movies into one using the spread operator
//and provides a default value for the second array

// function mergeMovies(movies, moreMovies = []) {
//   const mer = [...movies, ...moreMovies];
//   return mer;
// }

// console.log(mergeMovies(movies, moreMovies)); // Should print the merged array of movies
// console.log(mergeMovies(movies)); // Should print the original array of movies

//Q30: Write a function that returns the last N movie titles, using slice and spread operator
// with a default value for N

function getLastNMovieTitles(N) {
  return [...movies.map((movie) => movie.title).slice(-N)];
}

console.log(getLastNMovieTitles(3)); // Should print the last 3 movie titles
console.log(getLastNMovieTitles(2)); // Should print the last 2 movie titles

//Q31: Write a function that accepts multiple movie IDs, fetches the titles, and returns a formatted
// string using the rest operator, nullish coalescing, and template literals Interesting

function getMovieTitlesByIds(...id) {
  let getid = id.map((id) => {
    let getmovie = movies.find((movie) => movie.id == id);
    return getmovie?.title ?? "unknown title";
  });
  return `selectedMovies:${getid}`;
}

console.log(getMovieTitlesByIds(1, 3, 5));
// Should print: selected Movies: Baahubali, Mahanati, Jersey
console.log(getMovieTitlesByIds(1, 6));
// Should print: Selected Movies: Baahubali, Unknown Title
console.log(getMovieTitlesByIds(5, 1));
// Should print: Selected Movies: Jersey, Baahubali,

//Q32: Write a function that accepts any number of movies and returns a formatted string
// listing their titles and genres using the rest operator, nullish coalescing, and
//template literals Interesting

function listMovies(...movies) {
  let moviess = movies.map((movie) => {
    const title = movie?.title ?? "Unknown Title";
    const genre = movie?.genre ?? "Unknown Genre";
    return `${title} (${genre})`;
  });

  return moviess.join(", ");
}

console.log(listMovies(...movies));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Mahanati (Biography), Eega (Fantasy), Jersey (Sports)
console.log(listMovies(movies[0], movies[1], movies[111]));
// Should print: Baahubali (Action), Arjun Reddy (Drama), Unknown Title (Unknown Genre)

//Q33: Write a function that calculates the total number of ratings for each director Challenging
// Ex81 -
const getTotalRatingsForDirectors = () => {
  return movies.reduce((acc, movie) => {
    acc[movie.director] = (acc[movie.director] || 0) + movie.ratings.length;
    return acc;
  }, {});
};

console.log(getTotalRatingsForDirectors());
// Should print: { "S. S. Rajamouli": 6, "Sandeep Reddy Vanga": 3, "Nag Ashwin": 3, "Gowtam Tinnanuri": 3 }

//Q34: Write a function that returns an array of genres sorted by the total number
//of ratings received by movies in that genre Challenging

function getGenresSortedByTotalRatings() {
  const ratingsgiven = movies.map((movie) => movie.ratings);
}
console.log(getGenresSortedByTotalRatings()); // Should print genres sorted by total ratings
//29,28-wrong op,33
