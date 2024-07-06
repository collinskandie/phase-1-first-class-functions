function receivesAFunction(callback) {
  callback();
}
function callback() {
  console.log("Hello");
}
function returnsANamedFunction() {
  return function named() {
    console.log("Hello");
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    console.log("Hello");
  };
}
