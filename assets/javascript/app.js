$(document).ready(function() { 

    var rightAns = 0;
    var wrongAns = 0;
    var countdownNum = 20;
    var interval;

    function gameStart() {
        $('#trivia').hide(); 
        $("#countdown").html("Time Remaining: " + countdownNum);  
        $('#start').on("click", function() {
            $("#start").hide();
            runTimer();
            $("#trivia").show();    
        });    
    };

    function runTimer() {
        interval = setInterval(countdown, 1000);  
    };

    function countdown() {

        countdownNum--;

        $("#countdown").html("Time Remaining: " + countdownNum);

        if (countdownNum === 0) {

            clearInterval(interval);
            alert("Times Up!");
            checkAnswers();
            gameEnd()
        }
    }

    function gameEnd() {
        $("#trivia").hide();
        $('#instructions').hide();    
    }

    function checkAnswers() {
        var one = {
            q1: "Which one is NOT a game console?",
            response1: ['Atari', 'Megavox', 'N64', 'SEGA Genesis'],
            a1: function(){ return this.response1[1]}
        }
        var two = {
            q2: "What color is Yasiel Puig's mohawk in the 2017 World Series game?",
            response2: ['Red', 'White', 'Blue', 'Green'],
            a2: function(){ return this.response2[2] }
        }    	
        var three = {
            q3: "The Dewey Decimal system is used to categorize what?",
            response3: ['Toys', 'Rain', 'Clouds', 'Books'],
            a3: function(){ return this.response3[3]}
        }
        var four = {
            q4: "By what name is Norma Jean Baker more commonly known?",
            response4: ['Marilyn Monroe', 'Jennifer Lawrence', 'Audrey Hepburn', 'Taylor Swift'],
            a4: function(){ return this.response4[0] }
        }               
        var five = {
            q5: "Black-eyed peas are not peas. What are they?",
            response5: ['Seeds', 'Chickpeas', 'Beans', 'Trick question: They ARE peas!'],
            a5: function(){ return this.response5[2]}
        }

        var userChoice1 = $("input[name='a1']:checked").val();
        var userChoice2 = $("input[name='a2']:checked").val();
        var userChoice3 = $("input[name='a3']:checked").val();
        var userChoice4 = $("input[name='a4']:checked").val();
        var userChoice5 = $("input[name='a5']:checked").val();

        console.log('Q1 user: ' + userChoice1, 'A1: ' + one.a1(), ', Q2 user: ' + userChoice2, 'A2: ' + two.a2(), ', Q3 user: ' + userChoice3, 'A3: ' + three.a3(), ', Q4 user: ' + userChoice4, 'A4: ' + four.a4(), ', Q5 user: ' + userChoice5, 'A5: ' + five.a5());

        if (userChoice1 === one.a1()) {
            rightAns++;
            $("#rightAns").html("Correct Answers: " + rightAns);
            console.log('Right!')
        } else {
            wrongAns++;
            $("#wrongAns").html("Incorrect Answers: " + wrongAns);        
            console.log('Wrong!')
        }   
        if (userChoice2 === two.a2()) {
            rightAns++;
            $("#rightAns").html("Correct Answers: " + rightAns);
            console.log('Right!')
        } else {
            wrongAns++;
            $("#wrongAns").html("Incorrect Answers: " + wrongAns);        
            console.log('Wrong!')
        }   
        if (userChoice3 === three.a3()) {
            rightAns++;
            $("#rightAns").html("Correct Answers: " + rightAns);
            console.log('Right!')
        } else {
            wrongAns++;
            $("#wrongAns").html("Incorrect Answers: " + wrongAns);        
            console.log('Wrong!')
        }   
        if (userChoice4 === four.a4()) {
            rightAns++;
            $("#rightAns").html("Correct Answers: " + rightAns);
            console.log('Right!')
        } else {
            wrongAns++;
            $("#wrongAns").html("Incorrect Answers: " + wrongAns);        
            console.log('Wrong!')
        }   
        if (userChoice5 === five.a5()) {
            rightAns++;
            $("#rightAns").html("Correct Answers: " + rightAns);
            console.log('Right!')
        } else {
            wrongAns++;
            $("#wrongAns").html("Incorrect Answers: " + wrongAns);        
            console.log('Wrong!')
        }        
    }

    gameStart();

    $("#submit").on("click", function() {
        clearInterval(interval);
        checkAnswers();
        gameEnd()
    });

})