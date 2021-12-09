var readlineSync = require('readline-sync');

var chalk = require("chalk");
function log(data) {
  console.log(data);
}
var userName = readlineSync.question("May I know your name?  ===>  ");
log("Welcome "+ userName);
log(chalk.yellowBright("Welcome To The World of GK"));
log("---------------------------------------------------------");
log(" ");
log(" ");
log(chalk.blue("Application For Quiz"));
log(" ");
log(" ");

log(chalk.yellow("Let me know your gender (Male) or (Female)"));
log(" ");

var question =chalk.blue ("Gender? ");
var answer = ("Male");
var userGender = readlineSync.question(question);
if (userGender === answer) {
  log(chalk.yellow(" Welcome To The World Of Quiz"));
   log("---------------------------------------------------------");
} else {
  log(chalk.blue("Welcome To The World Of Quiz"));
   log("---------------------------------------------------------");
}
log(" ");
log(" ");
log(chalk.yellow("Last Procedure Before Starting The Quiz"));
log(" ");
log(" ");
log(chalk.blue("NOW YOU CAN BEGIN WITH QUIZ (ALL THE BEST FOR QUIZ) HOPE YOU WILL GIVE RIGHT ANSWERS)"));
log(" ");
log(chalk.yellow("Each question has (5 score)"));
 log("---------------------------------------------------------");
log(" ");
log(" ");

log(chalk.blue("LEVEL 1 Question Are Based On GK"));
log(" ");
log(chalk.green("LETS GOOOOO"));
log(" ");

score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    log(chalk.greenBright("WOW! conngratulations you are a true GK quiz expert "));
    log(" ");
    log(chalk.green("ooh! current score is added by 5"));
    score = score + 5;
    log("---------------------------------------------------------");
    log(" ");
    log(" ");
  } else {
    log(chalk.redBright("Wrong answer you are not a true GK quiz expert"));
    log(" ");
    log(chalk.red("Your current score is deducted by 5"));
    score = score - 5;
    log("---------------------------------------------------------");
    log(" ");
    log(" ");
    }
  }
  
var questionSetOne = [{
  question:"Current richest man in the world a)Elon Musk  b)Bernard Arnold c)Larry Ellison d)Jeff Bezos -->   ",
  answer: "d"
}, {
  question:"Which of these song is perfomed by The Beatles? a)Hey Jude b)It's My Life c)Smells Like Teen Spirit d)Juicy -->   ",
  answer: "a"
}, {
  question: "From this which is the rap of The Notorious B.I.G? a)Life Goes On  b)Big Poppa c)Future d)So Many Tears -->   ",
  answer: "b"
}, {
  question: "From which of this artist is known as King Of NYC? a)2Pac b)Eminem c)Jay-Z d)Drake -->   ",
  answer: "c"
}, {
  question:"Founder of SpaceX? a)Jeff Bezos b)Elon Musk c)Warren Buffett -->   ",
  answer: "b"
}]
for (var i=0; i < questionSetOne.length; i++) {
    var currentQuestion = questionSetOne[i];
    play(currentQuestion.question, currentQuestion.answer);
}

log(" ");
log("  ");
log("  ");

log(chalk.cyanBright("WELL DONE YOU HAVE PROCEED FOR LEVEL 2"));
log(chalk.cyanBright("UPCOMING QUIZ ARE MORE TOUGH THAN THIS"));
log(" ");
log(chalk.gray("{LET'S BEGIN WITH QUIZ}"));
 log("---------------------------------------------------------");
log(" ");
log(" ");
var questionSetTwo = [{
  question: "Founder of Louis Vuitton a)Bernard Arnold b)Guccio Gucci c)Louis Tomlinson  -->   ",
  answer: "a"
}, {
  question: "Is Leaning Tower Of Pisa still considered in 7 Wonder of The World? a)True  b)False -->   ",
  answer: "d"
}, {
  question: "Which is the only country and a continent as well?  a)USA  b)Egypt c)China d)Australia -->   ",
  answer: "d"
}, {
  question:"Founder of Gucci? a)Jeffree Star b)Christian Bale c)Guccio Gucci -->   ",
  answer: "c"
}, {
  question:"Is Jupiter a gas gaint? a)True b)False -->   ",
  answer: "a"
}]
for (var i=0; i < questionSetOne.length; i++) {
    var currentQuestion = questionSetTwo[i];
    play(currentQuestion.question, currentQuestion.answer);
}
log(" ");
log(" ");
log(" ");
// for (var i=0; i < questionSetThree.length; i++) {
//     var currentQuestion = questionSetThree[i];
//     play(currentQuestion.question, currentQuestion.answer);
// }
log(chalk.yellowBright("Your final Score is Tada na na na = " + score));
log(" ");
log(" ");
log(chalk.yellow("Check out the high score in this list = "));
log(" ");
log(" ");
var highScore = [
  {
    name: "Shantam",
    score: 50,
  },
  {
    name: "Shivam",
    score: 60,
  }
]
for (var i=0; i < highScore.length; i++) {
  log(highScore[i].name + " ---> " + highScore[i].score);
  log("---------------------------------------------------------");
  log(" ");
}

log(chalk.bgBlue("THIS QUIZ IS TO GAIN SOME KNOWLEDGE. I HOPE YOU ALL ENJOYED A LOT"));
log(" ")

log(chalk.green("THANK YOU FOR JOINING OUR GK CLASS"));