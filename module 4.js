// Module 4
 
// module 4 1/48

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
//   // Change code below this line
  
//   const result = makePizza();
//   const pointer = makePizza;

// module 4 2/48

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName, makeMessage) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   // Chande code below this line
//   function makeMessage(pizzaName, callback) {
//     return callback (pizzaName);
//   }

// module 4 3/48

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
//   // Change code below this line
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log (`Eating pizza ${pizzaName}.`);
//   });

// module 4 4/48

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)){
//             console.log(makePizza(pizzaName))
//         }
//         console.log(onError(`There is no pizza with a name ${pizzaName} in the assortment.`))
//     },
//   };
//   // Change code above this line
  
//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }
  
//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }
  
//   // Method calls with callbacks
//   pizzaPalace.order("Smoked", makePizza, onOrderError);
//   pizzaPalace.order("Four meats", makePizza, onOrderError);
//   pizzaPalace.order("Big Mike", makePizza, onOrderError);
//   pizzaPalace.order("Vienna", makePizza, onOrderError);


// module 4 5/48

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
  
//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     //   totalPrice += orderedItems[i];
//     // }
//     orderedItems.forEach(function (number) {
//     totalPrice += number;
      
//     })
  
//     // Change code above this line
//     return totalPrice;
//   }

// module 4 6/48

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//        }
//   });
  
//     // Change code above this line
//     return filteredNumbers;
//   }

// module 4 7/48

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line
  
//     firstArray.forEach(function(element) {
//       if (firstArray.includes(element) === secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }
  
//     console.log(commonElements);
//   }
//     // Change code above this line
  
//   getCommonElements([1, 2, 3], [2, 4]);
//   getCommonElements([1, 2, 3], [2, 1, 17, 19]);
//   getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
//   getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
//   getCommonElements([1, 2, 3], [10, 20, 30]);

// module 4 8/48

// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// module 4 10/48

// // Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach ((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line

// module 4 12/48

// Change code below this line
const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
  
    firstArray.forEach((element) => {
      if (secondArray.includes(element)) {
        commonElements.push(element);
      }
    });
  
    // Change code above this line
    return commonElements;
  }
  
  // module 4 13/48
  
  // function changeEven(numbers, value) {
  //   const newArray = [];
  //   numbers.forEach(number => {
  //     if (number % 2 === 0) {
  // newArray.push(number + value);
  //     } else if (number % 2 !== 0) {
  //       newArray.push(number);
  //     }
  //   });
  
  //   return newArray;
  // };
  
  // changeEven([1, 2, 3, 4, 5], 10);
  
  // module 4 14/48
  
  // const planets = ["Earth", "Mars", "Venus", "Jupiter"];
  
  // const planetsLengths = planets.map(planet => planet.length);
  // console.log(planets);
  
  
  // module 4 15/48
  
  // const books = [
  //   {
  //     title: "The Last Kingdom",
  //     author: "Bernard Cornwell",
  //     rating: 8.38,
  //   },
  //   {
  //     title: "Beside Still Waters",
  //     author: "Robert Sheckley",
  //     rating: 8.51,
  //   },
  //   {
  //     title: "The Dream of a Ridiculous Man",
  //     author: "Fyodor Dostoevsky",
  //     rating: 7.75,
  //   },
  //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  // ];
  
  // const titles = books.map(book => book.title);
  // console.log(titles);
  
  // module 4 16/48
  
  // const books = [
  //   {
  //     title: "The Last Kingdom",
  //     author: "Bernard Cornwell",
  //     genres: ["adventure", "history"],
  //   },
  //   {
  //     title: "Beside Still Waters",
  //     author: "Robert Sheckley",
  //     genres: ["fiction"],
  //   },
  //   {
  //     title: "Redder Than Blood",
  //     author: "Tanith Lee",
  //     genres: ["horror", "mysticism"],
  //   },
  // ];
  
  // const genres = books.flatMap(book => book.genres);
  // console.log(genres);
  
  // module 4 17/48
  
  // const getUserNames = users => (users.map(user => user.name));
  // const getUserNames = users => {return name = users.map(user => user.name)};
  
  // module 4 18/48
  
  // const getUserEmails = users => {return email = users.map(user => user.email)};
  
  // module 4 19/48
  
  // const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
  
  // const evenNumbers = numbers.filter(value => value % 2 === 0);
  // const oddNumbers = numbers.filter(value => value % 2 !== 0);
  
  // module 4 20/48
  
  // const books = [
  //   {
  //     title: "The Last Kingdom",
  //     author: "Bernard Cornwell",
  //     genres: ["adventure", "history"],
  //   },
  //   {
  //     title: "Beside Still Waters",
  //     author: "Robert Sheckley",
  //     genres: ["fiction", "mysticism"],
  //   },
  //   {
  //     title: "Redder Than Blood",
  //     author: "Tanith Lee",
  //     genres: ["horror", "mysticism", "adventure"],
  //   },
  // ];
  // const allGenres = books.flatMap(book => book.genres);
  // console.log(allGenres);
  // const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);
  // console.log(uniqueGenres);
  
  // module 4 21/48
  
  // const books = [
  //   {
  //     title: "The Last Kingdom",
  //     author: "Bernard Cornwell",
  //     rating: 8.38,
  //   },
  //   {
  //     title: "Beside Still Waters",
  //     author: "Robert Sheckley",
  //     rating: 8.51,
  //   },
  //   {
  //     title: "The Dream of a Ridiculous Man",
  //     author: "Fyodor Dostoevsky",
  //     rating: 7.75,
  //   },
  //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  // ];
  
  // const MIN_RATING = 8;
  // const AUTHOR = "Bernard Cornwell";
  
  // const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
  // console.log(topRatedBooks);
  // const booksByAuthor = books.filter (book => book.author === AUTHOR);
  // console.log(booksByAuthor);
  
  // module 4 22/48
  
  // Change code below this line
  // const getUsersWithEyeColor = (users, color) => {
   
  // return name = users.filter(user => user.eyeColor === color);
  //   };
    // Change code above this line
  
    // module 4 24/48
  
    // const getUsersWithFriend = (users, friendName) => {
    //   return users.filter(user => user.friends.includes(friendName));
    //   };
  
    // module 4 25/48
  
  // const getFriends = (users) => {
  //   const allFriends = users.flatMap(user => user.friends);
  //  return allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
  // };
  
  // module 4 26/48
  
  // const getActiveUsers = (users) => {
  //   return users.filter(user => user.isActive === true);
  // };
  
  // module 4 27/48
  
  // const getInactiveUsers = (users) => {
  //   return users.filter(user => user.isActive === false);
  // };
  
  // module 4 28/48
  
  // const books = [
  //   {
  //     title: 'The Last Kingdom',
  //     author: 'Bernard Cornwell',
  //     rating: 8.38,
  //   },
  //   {
  //     title: 'Beside Still Waters',
  //     author: 'Robert Sheckley',
  //     rating: 8.51,
  //   },
  //   {
  //     title: 'The Dream of a Ridiculous Man',
  //     author: 'Fyodor Dostoevsky',
  //     rating: 7.75,
  //   },
  //   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  // ];
  // const BOOK_TITLE = 'The Dream of a Ridiculous Man';
  // const AUTHOR = 'Robert Sheckley';
  // // Change code below this line
  
  // const bookWithTitle = books.find( book => book.title 
  //  === BOOK_TITLE);
  // const bookByAuthor = books.find( book => book.author === AUTHOR);
  
  // module 4 29/48
  
  // const getUserWithEmail = (users, email) => {
  //   return name = users.find(user => user.email === email);
  //   };
  
  // module 4 30/48
  
  // const firstArray = [26, 94, 36, 18];
  // const secondArray = [17, 61, 23];
  // const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  // // Change code below this line
  
  // const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
  // const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);
  
  // const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
  // const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);
  
  // const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
  // const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);
  
  // module 4 31/48
  
  // const isEveryUserActive = (users) => {
  //   return users.every(user => user.isActive);
  // };
  
  // module 4 32/48
  
  // const firstArray = [26, 94, 36, 18];
  // const secondArray = [17, 61, 23];
  // const thirdArray = [17, 26, 94, 61, 36, 23, 18];
  // // Change below this line
  
  // const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
  // const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);
  
  // const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
  // const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);
  
  // const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
  // const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);
  
  // module 4 33/48
  
  // const isAnyUserActive = users => {
  //   return users.some(user => user.isActive);
  // };
  
  // module 4 34/48
  
  // const players = {
  //   mango: 1270,
  //   poly: 468,
  //   ajax: 710,
  //   kiwi: 244
  // };
  // const playtimes = Object.values(players); // [1270, 468, 710, 244]
  // // Change code below this line
  
  // const totalPlayTime = playtimes.reduce((previousValue, number) => {
  //   return previousValue + number;
  // }, 0);
  
  // // Change code above this line
  // const averagePlayTime = totalPlayTime / playtimes.length;
  
  // module 4 35/48
  
  // const totalAveragePlaytimePerGame = players.reduce((avarage, player) => {
  //   return avarage + player.playtime / player.gamesPlayed
  //  },0);
  
  // module 4 36/48
  
  // const users =
  // [
  //   {
  //     name: "Moore Hensley",
  //     email: "moorehensley@indexia.com",
  //     eyeColor: "blue",
  //     friends: ["Sharron Pace"],
  //     isActive: false,
  //     balance: 2811,
  //     gender: "male"
  //   },
  //   {
  //     name: "Sharlene Bush",
  //     email: "sharlenebush@tubesys.com",
  //     eyeColor: "blue",
  //     friends: ["Briana Decker", "Sharron Pace"],
  //     isActive: true,
  //     balance: 3821,
  //     gender: "female"
  //   },
  //   {
  //     name: "Ross Vazquez",
  //     email: "rossvazquez@xinware.com",
  //     eyeColor: "green",
  //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  //     isActive: false,
  //     balance: 3793,
  //     gender: "male"
  //   },
  //   {
  //     name: "Elma Head",
  //     email: "elmahead@omatom.com",
  //     eyeColor: "green",
  //     friends: ["Goldie Gentry", "Aisha Tran"],
  //     isActive: true,
  //     balance: 2278,
  //     gender: "female"
  //   },
  //   {
  //     name: "Carey Barr",
  //     email: "careybarr@nurali.com",
  //     eyeColor: "blue",
  //     friends: ["Jordan Sampson", "Eddie Strong"],
  //     isActive: true,
  //     balance: 3951,
  //     gender: "male"
  //   },
  //   {
  //     name: "Blackburn Dotson",
  //     email: "blackburndotson@furnigeer.com",
  //     eyeColor: "brown",
  //     friends: ["Jacklyn Lucas", "Linda Chapman"],
  //     isActive: false,
  //     balance: 1498,
  //     gender: "male"
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     email: "shereeanthony@kog.com",
  //     eyeColor: "brown",
  //     friends: ["Goldie Gentry", "Briana Decker"],
  //     isActive: true,
  //     balance: 2764,
  //     gender: "female"
  //   }
  // ];
  
  // const calculateTotalBalance = users.reduce((sum, user) => {
  //   console.log('sum', sum);
  //   console.log('user', user);
  //   return sum + user.balance;
  // }, 0);
  // console.log(calculateTotalBalance);
  
  // 'Ответ для автопроверки'
  
  // const calculateTotalBalance = users => users.reduce((sum, user) => {
  //   return sum + user.balance;
  // }, 0);
  
  // module 4 37/48
  
  // const getTotalFriendCount = users.reduce((total, user) => {
  //   console.log('total', total);
  //   console.log('user', user);
  //   return total + user.friends.length;
  // }, 0);
  // console.log(getTotalFriendCount);
  
  // 'Ответ для автопроверки'
  
  // const getTotalFriendCount = users => users.reduce((sum, user) => {
  //   return sum + user.friends.length;
  // }, 0);
  
  // module 4 38/48
  
//   const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
//   const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//   ];
//   // Change code below this line
  
//   const ascendingReleaseDates = [...releaseDates].sort();
//   console.log(releaseDates);
  
//   const alphabeticalAuthors = [...authors].sort();
//   console.log(authors);

  // module 4 39/48

//   const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
//   // Change code below this line
  
//   const ascendingReleaseDates = [...releaseDates].sort();
  
//   const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

 // module 4 40/48

//  const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
//   ];
//   // Change code below this line
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
//   console.log(authorsInAlphabetOrder);
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
//   console.log(authorsInReversedOrder);

// module 4 41/48

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author)
//   );
//   console.log(sortedByAuthorName);
//   const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author)
//   );
//   console.log(sortedByReversedAuthorName);
//    const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
//   console.log(sortedByAscendingRating);
  
//   const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
//   console.log(sortedByDescentingRating);

// module 4 42/48

const users =
[
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ];
//   const sortByAscendingBalance = users =>
//   [...users].sort((firstUser, secondUser) => { 
//     return firstUser.balance - secondUser.balance;
//   });

// module 4 43/48

// const sortByDescendingFriendCount = users => 
//   [...users].sort((firstUser, secondUser) => {
//     return secondUser.friends.length - firstUser.friends.length
//   });

// module 4 44/48

// const sortByName = users => [...users].sort((firstUser, secondUser) => {
//   return firstUser.name.localeCompare(secondUser.name)
// });

// module 4 45/48

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
// .filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author, books.rating)
// .sort((a, b) => a.localeCompare(b));
// console.log(names);

// module 4 46/48
    
// const getNamesSortedByFriendCount = users => {
//   return [...users]
// .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
// .map(user => user.name)
// };

// module 4 47/48

// const getSortedFriends = users => {
//   return [...users]
//   .flatMap(user => user.friends)
//   .filter((friend, index, array) => array.indexOf(friend) === index)
//   .sort();
//   };

// module 4 48/48

const byGender = (users, gender) = users.filter(user => user.gender === gender);
console.log(byGender);
// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const calculateTotalBalance = users.reduce((sum, user) => {
//     console.log('sum', sum);
//     console.log('user', user);
//     return sum + user.balance;
//   }, 0);
//   console.log(calculateTotalBalance);
// const gender =

  // const getTotalBalanceByGender = (users, gender) => [...users]
  // .filter(user => user.gender === gender)
  // .reduce((acc, user) => acc + user.balance, 0);
  // console.log(getTotalBalanceByGender);