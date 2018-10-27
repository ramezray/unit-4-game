$(document).ready(function () {
    var computerPickNumber = 0;
    var wins = 0;
    var losses = 0;
    var hiddenFirst = 0;
    var hiddenSecond = 0;
    var hiddenThird = 0;
    var hiddenFourth = 0;
    var tempScore = 0;
    pickNumbers();

    // i need to create a for loop to cotain all random numbers that i need to have

    //function to reset the game
    function reset() {
        pickNumbers();
        $("#tempScore").text(0);
        $("#randomNum").text(computerPickNumber);

        if ($("#youWin").text = "You Won A Point") {
            setTimeout(function () {
                clearYouWin()
            }, 2000);
        }

        if ($("#youLost").text = "Youu Lost A Point") {
            setTimeout(function () {
                clearYouLost()
            }, 2000);
        }
    }

    //list of function below will take each click and added it the score
    function addHiddenFirst() {
        $("#tempScore").text(tempScore = hiddenFirst + tempScore);
        update();
        checkWine();
    };

    function addHiddenSecond() {
        $("#tempScore").text(tempScore = hiddenSecond + tempScore, checkWine);
        update();
        checkWine();
    };

    function addHiddenThird() {
        $("#tempScore").text(tempScore = hiddenThird + tempScore, checkWine);
        update();
        checkWine();
    };

    function addHiddenFourth() {
        $("#tempScore").text(tempScore = hiddenFourth + tempScore, checkWine);
        update();
        checkWine();
    }

    function pickNumbers() {
        computerPickNumber = Math.floor(Math.random() * (120) + 19); //pc will random pick num up to 100
        console.log(computerPickNumber);
        hiddenFirst = Math.floor((Math.random() * 12) + 1); //pc will random pick num up to 100
        console.log(hiddenFirst);
        hiddenSecond = Math.floor((Math.random() * 12) + 1); //pc will random pick num up to 100
        console.log(hiddenSecond);
        hiddenThird = Math.floor((Math.random() * 12) + 1); //pc will random pick num up to 100
        console.log(hiddenThird);
        hiddenFourth = Math.floor((Math.random() * 12) + 1); //pc will random pick num up to 100
        console.log(hiddenFourth);
    }


    $("#randomNum").text(computerPickNumber); //display the random number 

    $("#crystal-1").on("click", addHiddenFirst);
    $("#crystal-2").on("click", addHiddenSecond);
    $("#crystal-3").on("click", addHiddenThird);
    $("#crystal-4").on("click", addHiddenFourth);


    function checkWine() {
        if (computerPickNumber === tempScore) {
            youWin();
            wins++;
            update();
            reset();
            tempScore = 0;
        } else if (computerPickNumber < tempScore) {
            youLost();
            losses++;
            update();
            reset();
            tempScore = 0;
        }
    };

    function update() {
        $("#win").text(wins);
        $("#losses").text(losses);
    }

    function youWin() {
        $("#youWin").html("You Won A Point");
    }

    function youLost() {
        $("#youLost").html("You Lost A Point");
    }

    function clearYouWin() {
        $("#youWin").html("")
    };

    function clearYouLost() {
        $("#youLost").html("")
    };;


}); //DO NOT DELETE THIS LINE