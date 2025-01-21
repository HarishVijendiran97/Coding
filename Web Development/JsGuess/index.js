// let number = 10;

// function increase(number){
//     number++;
// }

// increase(number);

// console.log(number);

// let obj = { value: 10 };

// function increase1(obj){
//     obj.value++;
// }

// increase1(obj);

// console.log(obj.value);
function randomNumberGenerator() {
  ranNum = Math.random();
  randomNumber = Math.floor(ranNum * 10 + 1);
}

var ranNum = 0;
var score = 0;
var randomNumber = 0;
var scoreboard = document.getElementById("scoreboard");

function checknumber() {
  randomNumberGenerator();
  console.log(Number(randomNumber));

  let guessNum = document.getElementById("guess").value; // Raw input
  let guessNumber = Number(guessNum); // Convert to number
  let prompt = document.getElementById("right-wrong");

  if (guessNum === "") {
    // Check if input is empty
    prompt.textContent = "Enter any number";
    prompt.style.color = "red";
  } else if (guessNumber === randomNumber) {
    // Check if guess is correct
    score += 1;
    prompt.textContent = "You guessed the right number! :)";
    prompt.style.color = "#D5E7B5"; // Reset to default color
    scoreboard.textContent = score;
  } else {
    // Handle incorrect guess
    prompt.textContent = "You guessed the wrong number! :(";
    prompt.style.color = "#D5E7B5"; // Reset to default color
  }

  // Clear the input field
  document.getElementById("guess").value = "";
}
