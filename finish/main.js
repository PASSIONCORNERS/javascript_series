// Mutating

let myUsers = [
  { name: "phong", email: "test@gmail.com", status: "online" },
  { name: "thy", email: "test2@gmail.com", status: "online" },
  { name: "minh", email: "test3@gmail.com", status: "offline" },
];

// myUsers.push({ name: "nhi", email: "test4@gmail.com", status: "offline" });

// let myUserEmail = myUsers.map(emailOnly);

// function emailOnly(item) {
//   return item.name;
// }

let userOnline = myUsers.filter(userStatus).map(nameOnly);

function nameOnly(item) {
  return item.name;
}

function userStatus(item) {
  return item.status == "online";
}
console.log(userOnline);
