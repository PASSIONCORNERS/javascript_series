// Arrays

let myNumbers = [6, 7, 8, 9, 10];

let myWords = ["dog", "cat", "bird", "tiger"];

let myUsers = [
  { name: "phong", email: "test@gmail.com" },
  { name: "john", email: "test2@gmail.com" },
  { name: "ethan", email: "test3@gmail.com" },
];

let myMix = [1, "phong", { name: "phong", email: "test@gmail.com" }];

let userOne = {
  username: "Phong",
  email: "test@gmail.com",
  password: "123456",

  post() {
    alert("Javascript");
  },
};

// myWords.push("rabbit");

myWords.splice(1, 1);

console.log(myWords);
