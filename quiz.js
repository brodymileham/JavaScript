//starts with 0 questions answered correctly
var correct = 0;

//ask the questions and check for correct or incorrect
var answer1 = prompt("What is 5 + 5 ");
  if (answer1 == 10) {
    correct++;
    alert("Well done. Questions answered correctly: " + correct); 
} else {
  alert("Sorry, that's incorrect");
}

var answer2 = prompt("What programming language is used to style HTML");
  if (answer2.toUpperCase() === "CSS") {
    correct++;
    alert("Good Job. Questions answered correctly: " + correct);
  } else {
    alert("Sorry, that's incorrect");
  }

var answer3 = prompt("What programming language has the same name as a gem?");
  if (answer3.toUpperCase() === "RUBY") {
    correct++;
    alert("Well done. Questions answered correctly: " + correct);
  } else {
    alert("Sorry, that's incorrect");
  }

var answer4 = prompt("What is Apple's programming language?");
  if (answer4.toUpperCase() === "SWIFT") {
    correct++;
    alert("Well done. Questions answered correctly: " + correct);
  } else {
    alert("Sorry, that's incorrect");
  }

var answer5 = prompt("What programming language has the same name as a snake?");
  if (answer5.toUpperCase() === "PYTHON") {
    correct++;
    alert("Well done. Questions answered correctly: " + correct);
  } else {
    alert("Sorry, that's incorrect");
  }

//Final Message
alert("The amount of questions you answered correctly: " + correct);
  if (correct == 5) {
  alert("Well done, You got the gold crown!");
} else if (correct >= 3 &&  correct <= 4) {
  alert("You got the silver crown!");
} else if (correct >= 1 && correct <= 2) {
  alert("You got the bronze crown!");
} else {
  alert("You didn't get any questions correct. No crown is awarded");
}
