//! module 5 1/20

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
//   };
  

//!   module 5 2/20

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

  //!   module 5 3/20

//   const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//       return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = this.orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
//   };

//!   module 5 4/20

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

//!   module 5 5/20

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

//!   module 5 6/20
// class Car {
  
// }

//!   module 5 7/20

// class Car {
//   // Change code below this line
// constructor(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

//!   module 5 8/20

// class Car {
//   // Change code below this line
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

//!   module 5 9/20

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
// getPrice() {
//   return this.price;
// }
// changePrice(newPrice) {
//   return this.price = newPrice;
// }

//   // Change code above this line
// }

//!   module 5 10/20

// class Storage {
//   constructor(items){
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     return this.items.splice(1, 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//!   module 5 11/20

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
// }
// getValue(value) {
//   return this.value;
// }
// padEnd(str) {
// this.value = this.value + str;
// }
// padStart(str) {
// this.value = str + this.value;
// }
// padBoth(str) {
// this.value = str + this.value + str;
// }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//! module 5 12/20

// class Car {
//   // Change code below this line
// #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
// changeBrand (newBrand) {
//   this.#brand = newBrand;
// }
//   // Change code above this line
// }

//! module 5 13/20

// class Storage {
//   // Change code below this line
// #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]
  
//! module 5 14/20

// class StringBuilder {
//   // Change code below this line
// #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//! module 5 15/20

// class Car {
//   // Change code below this line
//   #brand;
// #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }
// get brand() {
//   return this.#brand;
//  }
//   set brand(ewBrand) {
//     this.#brand = newBrand;
//   }
//   // getBrand() {
//   //   return this.#brand;
//   // }
//   // setBrand() {
//   //   return this.#brand;
//   // }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.model;
//   }
//   // getModel() {
//   //   return this.model;
//   // }
//   set model(newModel) {
//     this.model = newModel;
//   }
//   // updateModel(newModel) {
//   //   this.model = newModel;
//   // }
//   get price() {
//     return this.price;
//   }
//   // getPrice() {
//   //   return this.price;
//   // }
//   set price(newPrice) {
//     this.price = newPrice
//   }
//   // setPrice(newPrice) {
//   //   this.price = newPrice;
//   // }
//   // Change code above this line
// }

//! module 5 16/20

// // * Example
// // class User {
// //   // Оголошення та ініціалізація статичної властивості
// //   static Roles = {
// //     ADMIN: "admin",
// //     EDITOR: "editor",
// //   };

// //   #email;
// //   #role;

// //   constructor({ email, role }) {
// //     this.#email = email;
// //     this.#role = role;
// //   }

// //   get role() {
// //     return this.#role;
// //   }

// //   set role(newRole) {
// //     this.#role = newRole;
// //   }
// // }

// // const mango = new User({
// //   email: "mango@mail.com",
// //   role: User.Roles.ADMIN,
// // });

// // console.log(mango.Roles); // undefined
// // console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// // console.log(mango.role); // "admin"
// // mango.role = User.Roles.EDITOR;
// // console.log(mango.role); // "editor"

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
 
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//       return this.#price = newPrice;
//   } else return this.#price;

// // // * Variant 2
// //   newPrice < Car.MAX_PRICE ? this.#price = newPrice : this.#price
  
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//! module 5 17/20

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
// static checkPrice(price) {
//      if (price > Car.#MAX_PRICE){
//        return "Error! Price exceeds the maximum";
//      } else return "Success! Price is within acceptable limits";

// // * Variant 2
//      return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits"
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//! module 5 18/20

class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line

class Admin extends User {
  static AccesLevel = {BASIC: "basic", SUPERUSER: "superuser"};

}
console.log(AccesLevel[AccesLevel])
// * 1. Оголоси клас Admin, який наслідує від класу User;     
// * 2. Додай класу Admin публічну статичну властивість AccessLevel
// * 3. 

    