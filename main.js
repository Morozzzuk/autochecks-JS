// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//     return 'Access denied, wrong password!';
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));


// const numbers = [21, 45, 90, 86, 120, 3, 1];
// console.table(numbers);
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// console.log('smallestNumber: ', smallestNumber);

// const numbers = [21, 45, 90, 86, 120, 3, 1];
// console.table(numbers);
// let largestNumber = numbers[0];
// for (const number of numbers) {
//   if (number > largestNumber) {
//     largestNumber = number;
//   }
// }
// console.log('largestNumber: ', largestNumber);

// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length - 1]];

//   // Change code above this line
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["Earth", "Mars", "Venus"]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   return message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// splitMessage("Mango hurries to the train", " ");
// splitMessage("Mango", "");
// splitMessage("best_for_week", "_");

// function makeStringFromArray(array, delimiter) {
//   const string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_");

// function slugify(title) {
//   // Change code below this line
// // const slug1 = title.tolowerCase().split(' ').join('-');
//   // const normilizedTitle = title.toLowerCase();
//   // // console.log(normilizedTitle);
//   // const words = normilizedTitle.split(' ');
//   // // console.log(words);
//   // const slug = words.join('-');
//   // console.log(slug);
//   const slug = title.toLowerCase().split(' ').join('-');
//   console.log(slug);
//   return slug;

//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// console.table(fruits);

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(2,5);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   const thirdArray = firstArray.concat(secondArray);
//   // console.table(thirdArray);
//   const lastArray = thirdArray.slice(0, maxLength);
//   // console.log(lastArray);

//   if (thirdArray.length > maxLength) {
//     return lastArray;
//   }
//     return thirdArray;



//     // Change code above this line
//   }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0;i < order.length; i += 1) {
//  total = total + order[i];
// }
//   // Change code above this line
//   console.log(total);
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// // 116/503/1116

// function findLongestWord(string) {
//   // Change code below this line
//   let newArray = string.split(" ");
//   let largestWord = "";
//   for (const word of newArray){
//     if (word.length > largestWord.length) {
//       largestWord = word;
//     }
//   }
//   console.log (largestWord);

//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//  for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   console.log(numbers);
// }

// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);

// module 2 23/32
// function filterArray(numbers, value) {
//    // Change code below this line
// const bigNumbers = [];
// for (let number of numbers) {
//   if (number > value) {
//     bigNumbers.push(number);
//   }

// }
// console.log(bigNumbers);
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// module 2 24/32
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   const message = fruits.includes(fruit) ? true : false;
//    console.log(message);
// }
// checkFruit("plum");
// checkFruit("mandarin");
// checkFruit("pear");
// checkFruit("Pear");
// checkFruit("apple");

// module 2 25/32
// function getCommonElements(array1, array2) {
//   // Change code below this line
// const newArray = [];
//   for (let i of array1) {
//     if (array2.includes(i)) {
//       newArray.push(i);
//     }
//   }
// console.log(newArray);

//  // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// module 2 26/32
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (const value of order) {
//   total += value;
// }


//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   // Change code above this line
//   console.log(total);
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([]);

// module 2 27/32
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];
// for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }

//   }
//  console.log(filteredNumbers);

//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// module 2 29/32
// function getEvenNumbers(start, end) {
//    // Change code below this line
//     let newArray = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//     newArray.push(i);
//     }
//     }
//     console.log(newArray);
// }

//     // Change code above this line

// getEvenNumbers(2, 5);
// getEvenNumbers(3, 11);
// getEvenNumbers(6, 12);
// getEvenNumbers(8, 8);
// getEvenNumbers(7, 7);

// module 2 32/32
// function includes(array, value){
//   // Change code below this line
//     for (let i = 0; i <= array.length; i += 1) {
//         if (array[i] === value) {
//             console.log(true);
//         }
//     } console.log(false);
//   // Change code above this line
// }

// variant2
// function includes(array, value) {
//   // Change code below this line
//     for (const item of array) {
//         if (item === value) {
//             console.log(true);
//         }
//     } console.log(false);
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");



// module 3
// module 3 3/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// // console.log (aptRating);

// console.log (aptRating);
// console.log(aptDescr);
// console.log (aptPrice);
// console.log (aptTags);


// module 3 4/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

// // console.log(ownerName);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);


// module 3 5/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment;
// const aptDescr = apartment;
// const aptPrice = apartment;
// const aptTags = apartment;
// // Change code above this line


// module 3 6/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");
// console.log(apartment.owner.name);


// module 3 7/41

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica"};
// apartment.location.city = "Kingston";

// module 3 10/41

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (key in apartment) {
// keys.push(key);
// values.push(apartment[key]);
// }

// module 3 12/41

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//   if (object.hasOwnProperty(key)){
//    propCount += 1;
//   }
// }
//   // Change code above this line
//   console.log(propCount);
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// module 3 13/41

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for (key of keys) {
//     values.push(apartment[key]);
// }


// module 3 14/41

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }
// const keys = Object.keys(object);
// for (const key of keys) {
//   propCount += 1;
// }
//   console.log(propCount);
//   // Change code above this line
// }
// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// module 3 16/41

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// for (const key in salaries) {
//   if (salaries.hasOwnProperty(key)){
//    totalSalary += salaries[key];
//   }
// }
//   // Change code above this line
//   console.log(totalSalary);
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });


// module 3 17/41

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//    }
// console.log(hexColors);
// console.log(rgbColors);


// module 3 18/41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//         if (product.name === productName) {
//            console.log(product.price);
//         } 

//         // Change code above this line
//     }console.log('null');
// }
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");

// module 3 19/41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     // const keys = Object.keys(propName);
//     //     console.log(keys);

//     // for (key of keys) {
//     //     values.push(apartment[key]);
//     const propertyValues = [];
//     for (let product of products) {
//         const keys = Object.keys(product);
//         if (keys.includes(propName)) {
//             propertyValues.push(product[propName]);
//         }
//     }
//     console.log(propertyValues);
        
//     // Change code above this line
// }
//     getAllPropValues("name");
//     getAllPropValues("quantity");
//     getAllPropValues("price");
//     getAllPropValues("category");

// module 3 20/41

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     for (const product of products) {
//         if (product.name === productName) {
//             console.log(product.price * product.quantity);
//         }
//     } console.log(0);
//     // Change code above this line
// }

// calculateTotalPrice("Blaster");
// calculateTotalPrice("Radar");
// calculateTotalPrice("Droid");
// calculateTotalPrice("Grip");
// calculateTotalPrice("Scanner");

// module 3 21/41

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } = highTemperatures;
// console.log(highTemperatures);

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// module 3 23/41

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// console.log(highTemperatures);

// // Change code above this line
// const meanTemperature = (highToday + highTomorrow + highYesterday) / 3;
// console.log(meanTemperature);

// module 3 24/41

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push({ hex, rgb }.hex);
//   rgbColors.push({ hex, rgb }.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// module 3 25/41

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: {
//     low: lowToday ,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// module 3 26/41

// Change code below this line
// function calculateMeanTemperature(forecast) {
//        const {
//   today: {
//     low: todayLow ,
//     high: todayHigh,
//   },
//   tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh,
//   },
// } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// module 3 27/41

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore);
// console.log(worstScore);

// module 3 28/41

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
// console.log(bestScore);

// module 3 29/41

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// module 3 30/41

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// console.log({category: "General", priority: "Normal", ...data, completed: false});
//   // Change code above this line
// }
// makeTask({});
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" });
// makeTask({ category: "Finance", text: "Take interest" });
// makeTask({ priority: "Low", text: "Choose shampoo" });
// makeTask({ text: "Buy bread" });

// module 3 31/41

// function add(...args) {
//     let total = 0;
//     for (let i = 0; i < args.length; i += 1) {
//         total = total + args[i];
//     }console.log(total);
// }
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);

// module 3 32/41

// function addOverNum(a, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if(a < arg) {
//       total += arg;
//     }
//   }
//   console.log(total);
// }
//   // Change code above this line

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

// module 3 33/41


// function findMatches(array, ...args) {
//   const matches = [];
// for (let i of array) {
//     if (args.includes(i)) {
//      matches.push(i);
//     }
//   }
//   console.log(matches);
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);

// module 3 34/41
// function bookShelf(bookNames) {
//     const bookShelf = {
//         // Change code below this line
//         books: ["The last kingdom", "The guardian of dreams"],
//         getBooks() {
//             return "Returning all books";
//         },
//         addBook(bookName) {
//             return `Adding book ${bookName}`;
//         },
//         removeBook(bookName) {
//             return `Deleting book  ${bookName}`;
//         },
//         updateBook(bookName) {
//             return `Updating book  ${bookName}`;
//         }
//         // Change code above this line
//     };
// }
// bookShelf.removeBook('Red sunset');
// bookShelf.updateBook("Sands of dune", "Dune");


// module 3 35/41

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       const index = this.books.indexOf(oldName);
//       this.books.splice(index, 1, newName);
// console.log(this.books);


//     // Change code above this line
//   },
// };

// module 3 37/41
// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//     getPotions() {
//         return this.potions;
//     } 
//   // Change code above this line
// };


// module 3 38/41

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         // Change code below this line
//         this.potions.push(potionName);
        
//         // Change code above this line
//     },
// };


// module 3 39/41

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//       const indexPotion = this.potions.indexOf(potionName);
//     this.potions.splice(indexPotion,1);


//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad); 
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad); 
// atTheOldToad.removePotion("Stone skin");
// console.log(atTheOldToad); 

// module 3 40/41

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// const indexPotion = this.potions.indexOf(oldName);
//       this.potions.splice(indexPotion, 1, newName);
//     // Change code above this line
//   }, 
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invisibility")
// console.log(atTheOldToad);

// module 3 41/41

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//     },
  
//   addPotion(newPotion) {
//   for (const potion of this.potions) { 
//   if (potion.name === newPotion.name) {
//   return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//     this.potions.push(newPotion);
//     },
  
// removePotion(potionName) {
//   for (let i = 0; i < this.potions.length; i += 1) {
//   if (this.potions[i].name === potionName) {
//   this.potions.splice(i, 1);
//   }
//  }
// return `Potion ${potionName} is not in inventory!`;
//     },
  
// updatePotionName(oldName, newName) {
//   for (let i = 0; i < this.potions.length; i += 1) {
//   if (this.potions[i].name === oldName) {
//  this.potions[i].name = newName;
//   }
//   }
//   },
//   // Change code above this line
// };
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
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
// newArray.push(number + value);
//     } else if (number % 2 !== 0) {
//       newArray.push(number);
//     }
//   });
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   return newArray;
//   // Change code above this line
// };

// changeEven([1, 2, 3, 4, 5], 10);

// module 4 14/48

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
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
// // Change code below this line

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
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

// module 4 17/48

// const getUserNames = users => (users.map(user => user.name));
// const getUserNames = users => {return name = users.map(user => user.name)};

// module 4 18/48
