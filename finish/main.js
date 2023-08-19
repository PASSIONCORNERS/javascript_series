// Tips

// Anonymous Function

// document.addEventListener("click", myTest);

// function myTest() {
//   console.log("testing");
// }

// document.addEventListener("click", function () {
//   console.log("testing");
// });

// Arrow Function

document.addEventListener("click", () => console.log("testing"));

// let userOne = {
// 	name: "Phong",
// 	email: "test@gmail.com",

// 	login() {
// 		function myTest () {
// 			console.log(this)
// 		}

// 		myTest()

// 		console.log(this)
// 	}
// }

// userOne.login()
//
// let userOne = {
//   name: "Phong",
//   email: "test@gmail.com",

//   login() {
//     // function myTest () {
//     //    console.log(this)
//     // }
//     let myTest = () => {
//       console.log(this);
//     };

//     myTest();

//     console.log(this);
//   },
// };

// userOne.login();

// Template Literals
let myName = "Phong";

let myJob = "developer";

let myLocation = "Vietnam";

// console.log("Hello " + myName);

// console.log(
//   "Hello " +
//     myName +
//     " are you a " +
//     myJob +
//     " that live in " +
//     myLocation +
//     " ?"
// );

console.log(`Hello ${myName} are you a ${myJob} that live in ${myLocation} ?`);
