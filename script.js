var question = document.getElementById("question");
var firstAnswer = document.getElementById("a1");
var secondAnswer = document.getElementById("a2");
var thirdAnswer = document.getElementById("a3");
var fourthAnswer = document.getElementById("a4");
var start = document.getElementById("start");
var timeRemaining = document.getElementById("timeRemaining");
var qanda = document.getElementById("q-a");
var countDown= document.getElementById("count-down");
var time = 300;
var i;
var scores = [];
var timer;
var trackerEl = document.getElementById("trackerTool");
var body = document.querySelector("body");
var leaderboard = document.getElementById("list-scores");
var playAgain = document.getElementById("repeat");

var qList = [
    {q:"1. What are the three most important building blocks of a webpage?", a1: "CSS, C++, and Javascript", a2: "HTML, Python, and R",a3: "Excel, Microsoft Word, and Google",a4: "CSS, HTML, and Javascript", c: "CSS, HTML, and Javascript"},
    {q:"2. What should be the goal of every coding bootcamp student?", a1: "Become employer ready", a2: "To learn how to use for loops",a3: "To become employer competitive",a4: "To make a personal site", c: "To become employer competitive"},
    {q:"3. What does the abbreviation, API, stand for?", a1: "Application Programming Interface", a2: "Automated Processing Internet",a3: "Advanced Program Information",a4: "Automatic Program Interface", c: "Application Programming Interface"},
    {q:"4. What provides the structure of a webpage?", a1: "CSS", a2: "HTML",a3: "C++",a4: "Javascript", c: "HTML"},
    {q:"5. What provides functionality to a webpage?", a1: "HTML", a2: "CSS",a3: "Javascript",a4: "Java", c: "Javascript"}
]

start.addEventListener("click",startQuiz);
firstAnswer.addEventListener("click", (event)=>{
    checkAnswer(event);
});
secondAnswer.addEventListener("click", checkAnswer);
thirdAnswer.addEventListener("click", checkAnswer);
fourthAnswer.addEventListener("click", checkAnswer);
playAgain.addEventListener("click", clearTracker)


function startQuiz() {
    i = 0;
    qanda.classList.remove("hide");
    countDown.classList.remove("hide");
    timeTracker();
    start.style.display = "none";
    nextQuestion();
}

function nextQuestion(){
    if(i < qList.length){
        var qt = qList[i].q;
        var a1text = qList[i].a1;
        var a2text = qList[i].a2;
        var a3text = qList[i].a3;
        var a4text = qList[i].a4;
        question.textContent = qt;
        firstAnswer.textContent = a1text;
        secondAnswer.textContent = a2text;
        thirdAnswer.textContent = a3text;
        fourthAnswer.textContent = a4text;
    } else{
        endQuiz();
    }
}

function checkAnswer(event){
    if(event.target.textContent === qList[i].c){
        var entry = document.createElement("li");
        var check = document.createTextNode("✅");
        entry.appendChild(check);
        trackerEl.appendChild(entry);
        body.style.backgroundColor = "lawngreen";
        time += 10;
        alert("Correct!");
    }else{
        var wrongEntry = document.createElement("li");
        var X = document.createTextNode("❌");
        wrongEntry.appendChild(X);
        trackerEl.appendChild(wrongEntry);
        body.style.backgroundColor = "orangered";
        time -= 10;
        alert("Not correct");
    }
     i++
     nextQuestion();
 }

function endQuiz(){
    //clear interval
    clearInterval(timer);
    alert("Your score is " + time + ".");
    var name = prompt("Enter your name:");
    scores.push(time);
    var user = document.createElement("li");
    var recentTime = document.createTextNode(name + ": " + time);
    user.appendChild(recentTime);
    leaderboard.appendChild(user);
}

function timeTracker(){
    timer = setInterval(function(){
        if(time > 0){
            time--;
            timeRemaining.textContent = "You have " + time + " seconds remaining.";
        }else{
            endQuiz();
        }      
    }, 1000)
}

function clearTracker(){
    start.style.display = "inline-block"
    qanda.setAttribute("class", "hide");
    countDown.setAttribute("class", "hide");
    while(trackerEl.firstChild){
        trackerEl.removeChild(trackerEl.firstChild);
    }
    time = 300;


}

