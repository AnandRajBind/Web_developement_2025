// console.log(Math.random() * 100 + 1);
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number more than 1`);
  } else if (guess > 100) {
    alert(`Please enter a number less than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`🎉 You guessed it right! 🎉`);

    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`⬆️ Too Low! Try again.`);
  } else if (guess > randomNumber) {
    displayMessage(`⬇️ Too High! Try again.`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  const guessSpan = document.createElement('span');
  guessSpan.textContent = guess;
  guessSpan.style.display = 'inline-block';
  guessSpan.style.padding = '5px 10px';
  guessSpan.style.margin = '5px';
  guessSpan.style.background = 'rgba(255, 255, 255, 0.2)';
  guessSpan.style.borderRadius = '5px';
  guessSpan.style.animation = 'fadeIn 0.3s ease';
  guessSlot.appendChild(guessSpan);
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
  if (message.includes('right')) {
    lowOrHi.querySelector('h2').style.background = 'rgba(46, 213, 115, 0.3)';
  } else if (message.includes('Game Over')) {
    lowOrHi.querySelector('h2').style.background = 'rgba(255, 71, 87, 0.3)';
  }
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start new  game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.removeAttribute("disabled", "");
    lowOrHi.innerHTML = '';
    guessSlot.innerHTML = "";
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    startOver.removeChild(p);
    playGame = true;
  });
}
