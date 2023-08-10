// Objects

let userName = "Phong";
let email = "test.gmail.com";
let password = "123456";

function post() {
  alert("Javascript");
}

let userOne = {
  username: "phong",
  email: "test@gmail.com",
  password: "1234556",

  food: {
    favFood: "Pho",
    nonFav: "Carrot",
  },

  post() {
    alert("Javascript");
  },
};

// document = {
//    a: "balsdg",
//    b: "sdlfjdskf",
//    addEventListener() {
//       ...
//    }
// }

document.addEventListener("click", userOne.post);

// document.addEventListener("click", myFunc);

function myFunc() {
  alert("Hello World");
}

console.log(userOne.food.favFood);

console.log(userOne.username);
