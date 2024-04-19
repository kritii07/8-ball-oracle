function ball() {
  var question = prompt("Ask your question here");
  var answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
  ];

  response = answers[Math.floor(Math.random() * answers.length)];
  document.getElementById("over-img").style.display = "block";
  document.getElementById("result").style.display = "block";
  document.getElementById("cover").style.display = "block";
  document.getElementById("result").innerHTML = response;
}
//   var question = prompt("what is your question?");
//   var response = document.getElementById("result");
//   if (question.value.length < 1) {
//     alert("Enter a question!");
//   } else {
//     eight.innerText = "";
//     var num = Math.floor(Math.random() * Math.floor(answers.length));
//     answer.innerText = answers[num];
//   }
