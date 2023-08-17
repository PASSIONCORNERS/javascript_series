// Context

let userOne = {
  name: "phong",
  email: "test@gmail",
  login() {
    function myTest() {
      console.log(this);
    }
    myTest();

    console.log(this);
  },
};

userOne.login();
