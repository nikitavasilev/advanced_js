// Immediately Invoked Function Expressions (IIFE)

/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();
*/

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score); // not longer avalaible because of the ()

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);