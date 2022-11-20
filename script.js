// GLobal Variables
let startQuizBtn = document.querySelector("#startQuiz");
let questionDiv = document.querySelector("#questions");
let questions = [
  { title: "Who do you call or beep if you want to reach them?", choices: ["Your mom", "Kim Possible", "Scooby-Doo", "David Blaine"] },
  { titleTwo: "What do we wear on Wednesdays?", choices: ["Fur", "Jordans", "Pink", "Braces"] },
  { titleThree: "If it is not delivery, then what is it?", choices: ["Door Dash", "Jimmy Johns", "Uber Eats", "Digiorno"] },
  { titleFour: "What does BTW mean?", choices: ["By the Way", "Better Tag Wise", "Beautiful Trustful Woman", "Bite the Wing"] },
  { titleFive: "What is the correct motto?", choices: ["Oh Well", "Better Safe Than Sorry", "YOLO", "It is what it is"] },
  { titleSix: "Who wants candy?", choices: ["Willy Wonka", "Aaron Carter", "Candyman", "Spongebob"] },
  { titleSeven: "Teach me how to ____", choices: ["Cat Daddy", "Jerk", "Dougie", "Long Board"] },
  { titleEight: "Tennis Shoes + Skating = ____", choices: ["Heelys", "RipStick", "Hover Board", "Roller Blades"] },
  { titleNine: "What causes the most pain to your shin?", choices: ["spider bites", "running too far", "scooters", "falling"] },
  { titleTen: "How many licks does it take to get to the center of a Tootsie Pop?", choices: ["808", "the world may never know", "at least 300", "1738"] },
];

// functions
function startQuiz() {
  alert("May the Odds Be Forever in Your Favor");

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

  //   add second queston
  let titleTwo = document.createElement("h2");
  titleTwo.textContent = questions[1].titleTwo;
  questionDiv.appendChild(titleTwo);

  // four answer options for second question
  let btnFive = document.createElement("button");
  btnFive.textContent = questions[1].choices[0];
  btnFive.dataset.answer = questions[1].answer;
  questionDiv.appendChild(btnFive);

  let btnSix = document.createElement("button");
  btnSix.textContent = questions[1].choices[1];
  btnSix.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnSix);

  let btnSeven = document.createElement("button");
  btnSeven.textContent = questions[1].choices[2];
  btnSeven.dataset.answer = questions[1].answer;
  questionDiv.appendChild(btnSeven);

  let btnEight = document.createElement("button");
  btnEight.textContent = questions[1].choices[3];
  btnEight.dataset.answer = questions[1].answer;
  questionDiv.appendChild(btnEight);

  // make clickable

  // add third queston
  let titleThree = document.createElement("h2");
  titleThree.textContent = questions[2].titleThree;
  questionDiv.appendChild(titleThree);

  // four answer options for third question
  let btnNine = document.createElement("button");
  btnNine.textContent = questions[2].choices[0];
  btnNine.dataset.answer = questions[2].answer;
  questionDiv.appendChild(btnNine);

  let btnTen = document.createElement("button");
  btnTen.textContent = questions[2].choices[1];
  btnTen.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnTen);

  let btnEleven = document.createElement("button");
  btnEleven.textContent = questions[2].choices[2];
  btnEleven.dataset.answer = questions[2].answer;
  questionDiv.appendChild(btnEleven);

  let btnTwelve = document.createElement("button");
  btnTwelve.textContent = questions[2].choices[3];
  btnTwelve.dataset.answer = questions[2].answer;
  questionDiv.appendChild(btnTwelve);

  // make clickable

  //   add fourth queston
  let titleFour = document.createElement("h2");
  titleFour.textContent = questions[3].titleFour;
  questionDiv.appendChild(titleFour);

  // four answer options for fourth question
  let btnThirteen = document.createElement("button");
  btnThirteen.textContent = questions[3].choices[0];
  btnThirteen.dataset.answer = questions[3].answer;
  questionDiv.appendChild(btnThirteen);

  let btnFourteen = document.createElement("button");
  btnFourteen.textContent = questions[3].choices[1];
  btnFourteen.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnFourteen);

  let btnFifteen = document.createElement("button");
  btnFifteen.textContent = questions[3].choices[2];
  btnFifteen.dataset.answer = questions[3].answer;
  questionDiv.appendChild(btnFifteen);

  let btnSixteen = document.createElement("button");
  btnSixteen.textContent = questions[3].choices[3];
  btnSixteen.dataset.answer = questions[3].answer;
  questionDiv.appendChild(btnSixteen);

  // make clickable

  //   add fifth queston
  let titleFive = document.createElement("h2");
  titleFive.textContent = questions[4].titleFive;
  questionDiv.appendChild(titleFive);

  // four answer options for fifth question
  let BtnSeventeen = document.createElement("button");
  BtnSeventeen.textContent = questions[4].choices[0];
  BtnSeventeen.dataset.answer = questions[0].answer;
  questionDiv.appendChild(BtnSeventeen);

  let BtnEighteen = document.createElement("button");
  BtnEighteen.textContent = questions[4].choices[1];
  BtnEighteen.dataset.answer = questions[4].answer;
  questionDiv.appendChild(BtnEighteen);

  let btnNineteen = document.createElement("button");
  btnNineteen.textContent = questions[4].choices[2];
  btnNineteen.dataset.answer = questions[4].answer;
  questionDiv.appendChild(btnNineteen);

  let btnTwenty = document.createElement("button");
  btnTwenty.textContent = questions[4].choices[3];
  btnTwenty.dataset.answer = questions[4].answer;
  questionDiv.appendChild(btnTwenty);

  // make clickable

  //   add sixth queston
  let titleSix = document.createElement("h2");
  titleSix.textContent = questions[5].titleSix;
  questionDiv.appendChild(titleSix);

  // four answer options for sixth question
  let btnTwentyOne = document.createElement("button");
  btnTwentyOne.textContent = questions[5].choices[0];
  btnTwentyOne.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnTwentyOne);

  let btnTwntyTwo = document.createElement("button");
  btnTwntyTwo.textContent = questions[5].choices[1];
  btnTwntyTwo.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnTwntyTwo);

  let btnTwentyThree = document.createElement("button");
  btnTwentyThree.textContent = questions[5].choices[2];
  btnTwentyThree.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnTwentyThree);

  let btnTwentyFour = document.createElement("button");
  btnTwentyFour.textContent = questions[5].choices[3];
  btnTwentyFour.dataset.answer = questions[5].answer;
  questionDiv.appendChild(btnTwentyFour);

  // make clickable

  //   add seventh queston
  let titleSeven = document.createElement("h2");
  titleSeven.textContent = questions[6].titleSeven;
  questionDiv.appendChild(titleSeven);

  // four answer options for seventh question
  let btnTwentyFive = document.createElement("button");
  btnTwentyFive.textContent = questions[6].choices[0];
  btnTwentyFive.dataset.answer = questions[6].answer;
  questionDiv.appendChild(btnTwentyFive);

  let btnTwentySix = document.createElement("button");
  btnTwentySix.textContent = questions[6].choices[1];
  btnTwentySix.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnTwentySix);

  let btnTwentySeven = document.createElement("button");
  btnTwentySeven.textContent = questions[6].choices[2];
  btnTwentySeven.dataset.answer = questions[6].answer;
  questionDiv.appendChild(btnTwentySeven);

  let btnTwentyEight = document.createElement("button");
  btnTwentyEight.textContent = questions[6].choices[3];
  btnTwentyEight.dataset.answer = questions[6].answer;
  questionDiv.appendChild(btnTwentyEight);

  // make clickable

  //   add eighth queston
  let titleEight = document.createElement("h2");
  titleEight.textContent = questions[7].titleEight;
  questionDiv.appendChild(titleEight);

  // four answer options for eighth question
  let btnTwentyNine = document.createElement("button");
  btnTwentyNine.textContent = questions[7].choices[0];
  btnTwentyNine.dataset.answer = questions[7].answer;
  questionDiv.appendChild(btnTwentyNine);

  let btnThirty = document.createElement("button");
  btnThirty.textContent = questions[7].choices[1];
  btnThirty.dataset.answer = questions[7].answer;
  questionDiv.appendChild(btnThirty);

  let btnThirtyOne = document.createElement("button");
  btnThirtyOne.textContent = questions[7].choices[2];
  btnThirtyOne.dataset.answer = questions[0].answer;
  questionDiv.appendChild(btnThirtyOne);

  let btnThirtyTwo = document.createElement("button");
  btnThirtyTwo.textContent = questions[7].choices[3];
  btnThirtyTwo.dataset.answer = questions[7].answer;
  questionDiv.appendChild(btnThirtyTwo);

  // make clickable

  //   add ninth queston
  let titleNine = document.createElement("h2");
  titleNine.textContent = questions[8].titleNine;
  questionDiv.appendChild(titleNine);

  // four answer options for ninth question
  let btnThirtyThree = document.createElement("button");
  btnThirtyThree.textContent = questions[8].choices[0];
  btnThirtyThree.dataset.answer = questions[8].answer;
  questionDiv.appendChild(btnThirtyThree);

  let btnThirtyFour = document.createElement("button");
  btnThirtyFour.textContent = questions[8].choices[1];
  btnThirtyFour.dataset.answer = questions[8].answer;
  questionDiv.appendChild(btnThirtyFour);

  let btnThirtyFive = document.createElement("button");
  btnThirtyFive.textContent = questions[8].choices[2];
  btnThirtyFive.dataset.answer = questions[8].answer;
  questionDiv.appendChild(btnThirtyFive);

  let btnThirtySix = document.createElement("button");
  btnThirtySix.textContent = questions[8].choices[3];
  btnThirtySix.dataset.answer = questions[8].answer;
  questionDiv.appendChild(btnThirtySix);

  // make clickable

  //   add tenth queston
  let titleTen = document.createElement("h2");
  titleTen.textContent = questions[9].titleTen;
  questionDiv.appendChild(titleTen);

  // four answer options for tenth question
  let btnThirtySeven = document.createElement("button");
  btnThirtySeven.textContent = questions[9].choices[0];
  btnThirtySeven.dataset.answer = questions[9].answer;
  questionDiv.appendChild(btnThirtySeven);

  let btnThirtyEight = document.createElement("button");
  btnThirtyEight.textContent = questions[9].choices[1];
  btnThirtyEight.dataset.answer = questions[9].answer;
  questionDiv.appendChild(btnThirtyEight);

  let btnThirtyNine = document.createElement("button");
  btnThirtyNine.textContent = questions[9].choices[2];
  btnThirtyNine.dataset.answer = questions[9].answer;
  questionDiv.appendChild(btnThirtyNine);

  let btnForty = document.createElement("button");
  btnForty.textContent = questions[9].choices[3];
  btnForty.dataset.answer = questions[9].answer;
  questionDiv.appendChild(btnForty);

  // make clickable
}

// function calls
startQuizBtn.addEventListener("click", startQuiz);
