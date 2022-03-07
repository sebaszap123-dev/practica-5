module.exports = function Greetr() {
  this.greeting = "Hello from the function constructt greet4";
  this.greet = function () {
    console.log(this.greeting);
  };
};
