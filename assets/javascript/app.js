var number = 60;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var questions = [{
    question: "What is Mr. Krabs' full name?",
    answerList: ["Edward Krabs","Eugene Krabs","Ernest Krabs","Keith Krabs"],
    answer: 1
},{
    question: "What does SpongeBob SquarePants live in?",
    answerList: ["A flat","A boat", "A pineapple","A Shoe"],
    answer: 2 
},{
    question: "How many fingers and thumbs does SpongeBob SquarePants have?",
    answerList: ["4", "6", "8", "10"],
    answer: 2
},{
    question: "What are SpongeBob SquarePants' parents called?",
    answerList: ["Kevin and Mary","Henry and Joanne","Thomas and Linda","Harold and Margaret"],
    answer: 3
},{
    question: "What is Patrick's last name?",
    answerList: ["Star", "Fartington", "Shelley", "Coddington"],
    answer: 0
},{
    question: "Who is SpongeBob's friend from Texas?",
    answerList: ["Squirrel Nutkin","Sandy Cheeks","Hazel Nutt", "Jane Bushytail"],
    answer: 1
},{
    question: "What symbol is on SpongeBob SquarePants' white Krusty Krab hat?",
    answerList: ["A small blue anchor", "A smiley face", "A packet of chips", "A krabby patty"],
    answer: 0
},{
    question: "Where does Squidward Tentacles live?",
    answerList: ["Behind a shipwreck","In a cave","A submarine","Between SpongeBob and Patrick's House"],
    answer: 3
},{
    question: "What is Gary the Snail's full name?",
    answerList: ["Garth Wilson Jr.", "Garfield Wilson Jr.", "Garold Wilson Jr.", "Garrington Wilson Jr."],
    answer: 2
},{
    question: "What is Mrs. Puff's first name?",
    answerList: ["Penny", "Poppy", "Sugar", "Pamela"],
    answer: 1
}];

$("#start").on("click", function() {
    $(this).hide();

    $("#time").html("<h2>Time Remaining: 60 Seconds</h2>" + "<br>");

    run();

    $("#submit").html("<button id='done' class='btn'>Done</button>");

    $("#done").on("click", function() {
        keepingScore();
        displayResults();
    });

    for(var i = 0; i <= questions.length; i++) {
        $("#question"+i+"").html("<h4>" + questions[i].question + "</h4>");
        $("#answer"+i+"").html("<h5>" + "<input type='radio' name='answer"+i+"' value='0'>" + " " +questions[i].answerList[0] + "</h5>"
            + "<br>" + "<h5>" + "<input type='radio' name='answer"+i+"' value='1'>" + " " +questions[i].answerList[1] + "</h5>"
            + "<br>" + "<h5>" + "<input type='radio' name='answer"+i+"' value='2'>" + " " +questions[i].answerList[2] + "</h5>"
            + "<br>" + "<h5>" + "<input type='radio' name='answer"+i+"' value='3'>" + " " +questions[i].answerList[3] + "</h5><br><br>"
        ); 
    }
});

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number === 0) {
        stop();
        keepingScore();
        displayResults();
    }
}

function stop() {
    clearInterval(intervalId);
}

function displayResults() {

    $("#time").hide();
    $("#questionBox").hide();
    $("#submit").hide();

    $("#resultsMessage").html("<h3>Checkout Your Score!</h3>");
    $("#correct").html("<h6>" + "Correct Answers: " + correctAnswers + "</h6>");
    $("#incorrect").html("<h6>" + "Incorrect Answers: " + incorrectAnswers + "</h6>");
    $("#unanswered").html("<h6>" + "Unanswered: " + unanswered + "</h6>");
}

function keepingScore() {

    userAnswer = [$("input[name='answer0']:checked").val(), $("input[name='answer1']:checked").val(), 
        $("input[name='answer2']:checked").val(), $("input[name='answer3']:checked").val(),
        $("input[name='answer4']:checked").val(), $("input[name='answer5']:checked").val(),
        $("input[name='answer6']:checked").val(),$("input[name='answer7']:checked").val(),
        $("input[name='answer8']:checked").val(),$("input[name='answer9']:checked").val()];

    for(i = 0; i < questions.length; i++) {
        if(userAnswer[i] == questions[i].answer) {
                correctAnswers++;
            } else if(userAnswer[i] == undefined) {
                unanswered++;
            } else {
                incorrectAnswers++;
            }
    }
}
