//TODO:call() method : You need to immediately invoke the function with individual arguments.
// console.log(person.greet.call(john, "Hello ", " !"));
// const person = {
//   greet: function (greeting, punctuation) {
//     return greeting + " Name: " + this.name + punctuation + " Age: " + this.age;
//     return `${greeting} Name: ${this.name}${punctuation} age: ${this.age} `;
//   },
// };

// const john = {
//   name: "John",
//   age: 25,
// };

// //apply() method : You need to immediately invoke the function and already have arguments as an array.
// console.log(person.greet.apply(john, ["Hello ", " !"]));

// //bind() method : You need a reusable function with a specific this.
// const bound = person.greet.bind(john);

// console.log(bound("Hello ", " !"));

//TODO:Javascript closure : allows a function to access variables from its outer scope, even after the outer function has finished executing.
// function counterFunction() {
//   let count = 0;

//   return function counter() {
//     count++;
//     return count;
//   };
// }

// const counting = counterFunction();

// console.log(counting());
// console.log(counting());
// console.log(counting());
// console.log(counting());

//TODO:callbacks :  allows a function to access variables from its outer scope, even after the outer function has finished executing.
// function login(username, password, callback) {
//     console.log("Validating username and password...");
//     setTimeout(function(){
//         if(username === "Harish" && password === "12345"){
//             console.log("Login in successfully");
//             callback(null, { userID: 1, username: username, password: password});
//         } else {
//             callback("invalid username or password", null);
//         }
//     }, 2000)
// }

// function loadUserDetails(error, user){
//     if(error){
//         console.log("Error :",error);
//     }else{
//         console.log("Loading user details...");
//         console.log("UserID :", user.userID);
//         // console.log("User Name :", user.username);
//         console.log("Welcome ", user.username,"!");
//     }
// }

// function divide(div1, div2, callback) {
//     console.log("Dividing ", div1," / ", div2,"...");
//     setTimeout(function(){
//         if(div2 == 0){
//             callback("Cannot divisible by zero", null);
//         }else{
//             let total = div1 + div2;
//         callback(null, total);
//        }
//     },1500)
// }

// function finalAnswer(error, answer){
//     if(error){
//         console.log("Error : ", error);
//     } else{
//         console.log("Here comes your answer...");
//         setTimeout(() => {
//             console.log("The final answer is :", answer);
//         }, 2000);
//     }
// }

// divide(10, 5, finalAnswer);
// login("Harish", "1245", loadUserDetails);

//TODO:Promise:A Promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isWalkDog = true;
//       if (isWalkDog) {
//         resolve("you walk dog");
//       } else {
//         reject("you did not walk dog");
//       }
//     }, 1500);
//   });
// }
// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isCleanKitchen = true;
//       if (isCleanKitchen) {
//         resolve("you clean the kitchen");
//       } else {
//         reject("you did not clean the kitchen");
//       }
//     }, 2000);
//   });
// }
// function trashOut() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isTrashOut = false;
//       if (isTrashOut) {
//         resolve("you took out trash");
//       } else {
//         reject("you did not took out trash");
//       }
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen(); //value of walkdog -> resolve returns the cleanKitchen promise
//   })
//   .then((value) => {
//     console.log(value);
//     return trashOut(value); //value of cleanKitchen -> resolve returns the trashOut promise
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("all done");//value of trashOut and display "all done"
//   })
//   .catch((err) => {
//     console.log(err);
//     console.error("you failed!!");//value the failure value of any of the chained promises
//   })
//   .finally(() => {
//     console.log("Program End");// run after all promises have been fulfilled or after the catch statement;
//   });

// A promise has three possible states:
// 1.Pending: The initial state, neither fulfilled nor rejected.
// 2.Fulfilled: The operation completed successfully, and the promise has a resulting value.
// 3.Rejected: The operation failed, and the promise has a reason for the failure.

//TODO:Arrow function:
// const sumofvalue = (sum1, sum2) => {
//   let sum = 0;
//   return (sum = sum1 + sum2);
// };

// console.log("sum of two numbers = " + sumofvalue(10, 5));

//TODO:CAllback hell: callbacks nested inside another callback
// function task1(callback){
//     setTimeout(() => {
//         console.log("Task 1 completed");
//         callback();
//     }, 500);
// }
// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 completed");
//         callback();
//     }, 2500);
// }
// function task3(callback){
//     setTimeout(() => {
//         console.log("Task 3 completed");
//         callback();
//     }, 1000);
// }
// function task4(callback){
//     setTimeout(() => {
//         console.log("Task 4 completed");
//         callback();
//     }, 3000);
// }

// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 setTimeout(() => {
//                     console.log("All tasks completed");
//                 },2000);
//             });
//         });
//     });
// });

//TODO: asynchronous and synchronous
//sync function: execute line by line
// function task1(){
//     console.log("Task 1 completed");
// }

// task1();
// console.log("Task 2 completed");
// console.log("Task 3 completed");
// console.log("Task 4 completed");

//async function: executed concurrently and does't break the flow
//can be handled with: callbacks, Promise, Async/Wait;
// function func1(callback) {
//     setTimeout(console.log("Task 1 completed"), 2000);
//     callback();
// };
// function func2(){
//     console.log("Task 2 completed");
//     console.log("Task 3 completed");
//     console.log("Task 4 completed");
//     console.log("All tasks completed");
// };
// func1(func2);

//TODO: Js async: When you declare a function as async, it implicitly returns a Promise.
// async function greeting() {
//   return "Hello, Harish!";
// }

// const greet = greeting(); //returns promise value;

// greet
//   .then((value) => {
//     console.log(value);
//   })
//   .catch(() => {
//     console.error("error");
//   })
//   .finally(() => console.log("Yeah you!"));

//TODO:HTTP response status code :
//Http response status code indicate whether a specific HTTP request has been successfully completed.
//Responses are grouped in 5 classes;
//example-> status: 200
//1) Informational responses(100 - 199)
//2) Successful responses(200 - 299)
//3) Redirection responses(300 - 399)
//4) Client error responses(400 - 499)
//5) Server error responses(500 - 599)

//TODO:HTTP request methods: (Popular ones)
//1) POST request
//Sends data to the server in the body of the request.
//The data is sent as application/x-www-form-urlencoded.
//2) GET request
//Requests data from a specified resource.
//The data sent in the request is appended to the URL.
//3) PUT request
//Updates an existing resource.
//The data sent in the request replaces the current resource.
//4) DELETE request
//Removes a specified resource.
//The data sent in the request is not used.

//TODO: Map() method: goes through each element of the given array and returns only array
//takes 2 inputs : array and function
//function can take 3 arguments: first element, second index, third array;
// const numbers = [1, 2, 3, 4];

// const doubled = numbers.map((num) => num * 2);

// console.log(doubled);
// console.log(numbers);

// transforming objects:
// const users = [
//   { id: 1, name: "Harry" },
//   { id: 2, name: "Garry" },
//   { id: 3, name: "Berry" },
// ];

// const userNames = users.map((user, index) => ({name: user.name, index: index}));

// console.log(userNames);

//using thisArg: regular function not the arrow function as we use this keyword here
// const multiplier = {
//     factor: 5
// };

// const numbers = [1,2,3,4,5];

// const multipliedNumbers = numbers.map(function (num){ return num*this.factor;}, multiplier);

// console.log(multipliedNumbers);
//TODO: Filter() method:

//Filtering numbers:
// const numbers = [1, 2, 3, 4];

// const isEvenM = numbers.map((num) => num % 2 == 0? 1 : 0);
// const isEvenF = numbers.filter((num) => num % 2 === 0);

// console.log(isEvenM); //map()
// console.log(isEvenF); //filter()
// console.log(numbers); //Original array[]

//Filtering objects:
// const users = [
//   { id: 1, name: "Harry", age: 23 },
//   { id: 2, name: "Garry", age: 30 },
//   { id: 3, name: "Berry", age: 22 },
// ];

// const under25 = users.filter((user) => user.age < 25);

// console.log(under25);

//Filtering Strings:
// const fruits = [ "apple", "orange", " banana", "cherry", "blueberry", "a", "b"];

// const fruitsContainsA = fruits.filter((fruit) => fruit.includes("a"));

// console.log(fruitsContainsA);

//Using thisArg:
// const range = { min: 1, max: 20 };
// const numbers = [5, 7, 25, 18, 50];

// const numbersWithinMinMax = numbers.filter(function (eachNum) {
//   return eachNum > this.min && eachNum < this.max;
// }, range);

// console.log(numbersWithinMinMax);

//Removing Falsy values : (e.g., null, undefined, false, 0, NaN, and "")
// const values = [0, 1, undefined, 2, null, 3, 4, 7.4, "hello", "", 10, NaN];

// const filteredTruthyValues = values.filter(Boolean);

// console.log(filteredTruthyValues);

//Filter(): Creates a new array with elements that pass a condition.
//Map(): Creates a new array by transforming each element.
// const numbers = [1, 2, 3, 4];
// //filter:
// const evenNumbers = numbers.filter((num) => num % 2 == 0);
// //map;
// const doubledNumbers = numbers.map((num) => num * 2);

// console.log(evenNumbers); //filter
// console.log(doubledNumbers); //map

//TODO: High-Order function (HOF):

//takes another function as an argument
// function higherOrder(fn){
//     return fn();
// }
// higherOrder(()=> console.log("Takes function argument and returning it!"));

// returns a function as it's result.
// function createMultiplier(multi) {
//   return function (number) {
//     return number * multi;
//   };
// }
// //outer function: of HOF
// const double = createMultiplier(2);
//     //now code will be like
//     //function createMultiplier(2){
//     //     return function(number){
//     //         return number * 2;
//     //     }
//     // }
// //inner function: of HOF
// const result = double(25);
// console.log(result);

//TODO: Debounce: Debouncing is a technique to limit the rate at which a function is executed. It ensures a function is called after a specific delay, preventing it from being triggered excessively in rapid succession.
// function debounce(func, delay){
//     let debounceTimer; // varibale to set timer
//     return function(...args){
//         clearTimeout(debounceTimer); //clear timer
//         debounceTimer = setTimeout(() => func(...args), delay); //setting the timer with function to execute
//     };
// }

// const throwWarning = ()=> console.log("Too fast");
// const debouncedThrowWarning = debounce(throwWarning, 5000);

// debouncedThrowWarning();
// debouncedThrowWarning();
// debouncedThrowWarning();

//TODO: Destructuring is a feature in JavaScript that lets you unpack values from arrays or properties from objects into separate variables in a clean and concise way.
//Destructuring Array:
// const people = ["Harry", "Garry", "Berry"];

// const [person1, person2, person3] = people;

//skipping "Garry"
//const [person1, , person3] = people;

// default values:
//const [person1, person2, person3, person4 = "Larry"] = people;

// console.log(person1); //Harry
// console.log(person2); //Garry
// console.log(person3); //Berry

//Destructuring Object:
// const user = {
//     name: "John Doe",
//     age: 30,
//     place: "New York"
// }

// const {name, age, place} = user;

// console.log(name); //John Doe
// console.log(age); //30
// console.log(place); //"New York"

//Nested destructuring: nested array
// const numbers = [1 , [2, 3], 4];

// const [first, [second, third], fourth] = numbers;

// console.log(first); //1
// console.log(second); //2
// console.log(third); //3
// console.log(fourth); //4

//Nested destructuring: nested object
// const user = {
//     name: "John",
//     address: {
//         city: "New York",
//         country: "USA"
//     }
// };

// // Destructure nested object
// const { address: { city, country } } = user;

// console.log(city); //New York
// console.log(country); //USA

//TODO: Spread:The spread operator (...) is used to spread out elements of an array, object, or other iterable into individual elements
// const original = [1,2,1,1,5];
// const copy = [...original];// modifying this won't affect the original array

// console.log(original); // [1, 2, 1, 1, 5]
// console.log(copy); // [1, 2, 1, 1, 5]

//Spread string:
// const name = "Harry";
// const chars = [...name];
// console.log(chars); [ 'H', 'a', 'r', 'r', 'y' ]

//TODO: Rest parameter: The rest parameter (...) in JavaScript is a feature that lets you collect multiple arguments of a function into a single array.
//Syntax: function func(...args) { } ...args collects all extra arguments into an array named args.
//Rest parameters must always be the last parameter in a function.
// function printNumber(...args) {
//   console.log(args); // returns in array -  [1,2,3,4,5,6,7,8,9,10,11]
// }
// printNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);


