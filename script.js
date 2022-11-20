// GLobal Variables
let startQuizBtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");
let questions = [
  { title: "Who do you call or beep if you want to reach them?", choices: ["Your mom", "Kim Possible", "Scooby-Doo", "David Blaine"] },
  { title: "What do we wear on Wednesdays?", choices: ["Fur", "Jordans", "Pink", "Braces"] },
  { title: "If it is not delivery, then what is it?", choices: ["Door Dash", "Jimmy Johns", "Uber Eats", "Digiorno"] },
  { title: "What does BTW mean?", choices: ["By the Way", "Better Tag Wise", "Beautiful Trustful Woman", "Bite the Wing"] },
  { title: "What is the correct motto?", choices: ["Oh Well", "Better Safe Than Sorry", "YOLO", "It is what it is"] },
  { title: "Who wants candy?", choices: ["Willy Wonka", "Aaron Carter", "Candyman", "Spongebob"] },
  { title: "Teach me how to ____", choices: ["Cat Daddy", "Jerk", "Dougie", "Long Board"] },
  { title: "Tennis Shoes + Skating = ____", choices: ["Heelys", "RipStick", "Hover Board", "Roller Blades"] },
  { title: "What causes the most pain to your shin?", choices: ["spider bites", "running too far", "scooters", "falling"] },
  { title: "How many licks does it take to get to the center of a Tootsie Pop?", choices: ["808", "the world may never know", "at least 300", "1738"] },
];

// functions
function startQuiz() {
  alert("Good Luck!");

  // add first queston
  let title = document.createElement("h2");
  title.textContent = questions[0].title;
  questionDiv.appendChild(title);

  // four answer options for first question
  let btnOne = document.createElement("button");
  btnOne.textContent = questions[0].choices[0];
  btnOne.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnOne);

  let btnTwo = document.createElement("button");
  btnTwo.textContent = questions[0].choices[1];
  btnTwo.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnTwo);

  let btnThree = document.createElement("button");
  btnThree.textContent = questions[0].choices[2];
  btnThree.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnThree);

  let btnFour = document.createElement("button");
  btnFour.textContent = questions[0].choices[3];
  btnFour.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnFour);

  // make clickable
}

// function calls
startQuizBtn.addEventListener("click", startQuiz);
