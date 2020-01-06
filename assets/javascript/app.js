var number = 60;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var questions = [{
    question: "What is Mr. Krabs' full name?",
    answerList: ["Edward Krabs","Eugene Krabs","Ernest Krabs","Keith Krabs"],
    correct: 1
},{
    question: "What does SpongeBob SquarePants live in?",
    answerList: ["A flat","A boat", "A pineapple","A Shoe"],
    correct: 2 
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
}];

$("#playAgain").hide();

$("#start").on("click", function() {

    // Hide Start button
    $(this).hide();

    // Display initial time countdown
    $("#time").html("<h2>Time Remaining: 60 Seconds</h2>" + "<br>");

    // Start timer countdown
    run();
   
    // Display questions --- I still want to turn this into a reusable piece so that i don't have to repeat this section for each question
    // Question 1
    $("#question1").html("<h4>" + questions[0].question + "</h4>");
    $("#answer1").html("<h5>" + "<input type='radio' name='answer1' value='0'>" + questions[0].answerList[0] + "</h5>"
        + "<br>" + "<h5>" + "<input type='radio' name='answer1' value='1'>" + questions[0].answerList[1] + "</h5>"
        + "<br>" + "<h5>" + "<input type='radio' name='answer1' value='2'>" + questions[0].answerList[2] + "</h5>"
        + "<br>" + "<h5>" + "<input type='radio' name='answer1' value='3'>" + questions[0].answerList[3] + "</h5><br><br>"
    );

    // Question 2
    $("#question2").html("<h4>" + questions[1].question + "</h4>");
    $("#answer2").html("<h5>" + "<input type='radio' name='answer2' value='0'>" + questions[1].answerList[0] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer2' value='1'>" + questions[1].answerList[1] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer2' value='2'>" + questions[1].answerList[2] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer2' value='3'>" + questions[1].answerList[3] + "</h5><br><br>"
    );

    // Question 3
    $("#question3").html("<h4>" + questions[2].question + "</h4>");
    $("#answer3").html("<h5>" + "<input type='radio' name='answer3' value='0'>" + questions[2].answerList[0] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer3' value='1'>" + questions[2].answerList[1] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer3' value='2'>" + questions[2].answerList[2] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer3' value='3'>" + questions[2].answerList[3] + "</h5><br><br>"
    );

    // Question 4
    $("#question4").html("<h4>" + questions[3].question + "</h4>");
    $("#answer4").html("<h5>" + "<input type='radio' name='answer4' value='0'>" + questions[3].answerList[0] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer4' value='1'>" + questions[3].answerList[1] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer4' value='2'>" + questions[3].answerList[2] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer4' value='3'>" + questions[3].answerList[3] + "</h5><br><br>"
    );

    // Question 5
    $("#question5").html("<h4>" + questions[4].question + "</h4>");
    $("#answer5").html("<h5>" + "<input type='radio' name='answer5' value='0'>" + questions[4].answerList[0] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer5' value='1'>" + questions[4].answerList[1] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer5' value='2'>" + questions[4].answerList[2] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer5' value='3'>" + questions[4].answerList[3] + "</h5><br><br>"
    );
    // Question 6
    $("#question6").html("<h4>" + questions[5].question + "</h4>");
    $("#answer6").html("<h5>" + "<input type='radio' name='answer6' value='0'>" + questions[5].answerList[0] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer6' value='1'>" + questions[5].answerList[1] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer6' value='2'>" + questions[5].answerList[2] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer6' value='3'>" + questions[5].answerList[3] + "</h5><br><br>"
    );
    // Question 7
    $("#question7").html("<h4>" + questions[6].question + "</h4>");
    $("#answer7").html("<h5>" + "<input type='radio' name='answer7' value='0'>" + questions[6].answerList[0] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer7' value='1'>" + questions[6].answerList[1] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer7' value='2'>" + questions[6].answerList[2] + "</h5>"
        + "<br>"+ "<h5>" + "<input type='radio' name='answer7' value='3'>" + questions[6].answerList[3] + "</h5><br><br>"
    );

    // Submit button
    $("#submit").html("<button id='done' class='btn'>Done</button>");

    // Click event runs keepingScore() and displayResults() when user clicks Done button
    $("#done").on("click", function() {

        // Keeping track of score based on correct, incorrect, and unanswered
        keepingScore();

        // Display 
        displayResults();
        
    });
});

// Timer countdown function
function run() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}


function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #time tag
    $("#time").html("<h2>Time Remaining: " + number + " Seconds</h2>" + "<br>");

    if (number === 0) {

        // Run stop function to stop timer countdown
        stop();

        keepingScore();
        displayResults();

    }
}

function stop() {

    //  Clears intervalId
    clearInterval(intervalId);
}

// Function used for displaying results in terms of correct, incorrect, and unanswered --- I want to put all of these tags inside a div so that i can just hide the parent div
function displayResults() {

    $("#time").hide();
    $("#questionBox").hide();
    $("#submit").hide();

    $("#resultsMessage").html("<h3>All Done!</h3>");
    $("#correct").html("Correct Answers: " + correctAnswers);
    $("#incorrect").html("Incorrect Answers: " + incorrectAnswers);
    $("#unanswered").html("Unanswered: " + unanswered);
    $("#playAgain").show();
}

// Function keeps score in terms of correct, incorrect, and unanswered --- I still want to make this a reusable piece so that I don't have to repeat it for each question
function keepingScore() {

    var userAnswer1 = $("input[name='answer1']:checked").val();
    var userAnswer2 = $("input[name='answer2']:checked").val();
    var userAnswer3 = $("input[name='answer3']:checked").val();
    var userAnswer4 = $("input[name='answer4']:checked").val();
    var userAnswer5 = $("input[name='answer5']:checked").val();
    var userAnswer6 = $("input[name='answer6']:checked").val();
    var userAnswer7 = $("input[name='answer7']:checked").val();

    // Question 1
    if (userAnswer1 === undefined) {

        unanswered++;
    }
    else if (userAnswer1 == questions[0].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 2
    if (userAnswer2 === undefined) {

        unanswered++;
    }
    else if (userAnswer2 == questions[1].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 3
    if (userAnswer3 === undefined) {

        unanswered++;
    }
    else if (userAnswer3 == questions[2].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 4
    if (userAnswer4 === undefined) {

        unanswered++;
    }
    else if (userAnswer4 == questions[3].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 5
    if (userAnswer5 === undefined) {

        unanswered++;
    }
    else if (userAnswer5 == questions[4].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 6
    if (userAnswer6 === undefined) {

        unanswered++;
    }
    else if (userAnswer6 == questions[5].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }

    // Question 7
    if (userAnswer7 === undefined) {

        unanswered++;
    }
    else if (userAnswer7 == questions[6].answer) {

        correctAnswers++;
    }
    else {

        incorrectAnswers++;
    }  
}