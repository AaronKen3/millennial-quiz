// GLobal Variables
let startQuizBtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");

// functions
function startQuiz() {
  alert("I started the game");
  // add first queston
  let title = document.createElement("h2");
  title.textContent = "Who do you have to call/beep if you want to reach them?";
  questionDiv.appendChild(title);
  // four answer options
  let btnOne = document.createElement("button");
  // make clickable
}

// function calls
startQuizBtn.addEventListener("click", startQuiz);
