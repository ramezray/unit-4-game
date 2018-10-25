$(document).ready(function () {
    var computerPickNumber = 0;
    var wins = 0;
    var losses = 0;
    var hiddenFirst = 0;
    var hiddenSecond = 0;
    var hiddenThird = 0;
    var hiddenFourth = 0;
    var tempScore = 0;
    var tries = 5;

    
    function addHiddenFirst() {
        $("#tempScore").text(tempScore = hiddenFirst + tempScore);
        tries--;
        update();
        checkWine();
    };

    function addHiddenSecond() {
        $("#tempScore").text(tempScore = hiddenSecond + tempScore, checkWine);
        tries--;
        update();
        checkWine();
    };

    function addHiddenThird() {
        $("#tempScore").text(tempScore = hiddenThird + tempScore, checkWine);
        tries--;
        update();
        checkWine();
    };

    function addHiddenFourth() {
        $("#tempScore").text(tempScore = hiddenFourth + tempScore, checkWine);
        tries--;
        update();
        checkWine();
    }

    computerPickNumber = Math.floor(Math.random() * (120) + 19); //pc will random pick num up to 100
    console.log(computerPickNumber);
    hiddenFirst = Math.floor((Math.random() * 50) + 1); //pc will random pick num up to 100
    console.log(hiddenFirst);
    hiddenSecond = Math.floor((Math.random() * 50) + 1); //pc will random pick num up to 100
    console.log(hiddenSecond);
    hiddenThird = Math.floor((Math.random() * 50) + 1); //pc will random pick num up to 100
    console.log(hiddenThird);
    hiddenFourth = Math.floor((Math.random() * 50) + 1); //pc will random pick num up to 100
    console.log(hiddenFourth);

    $("#randomNum").text(computerPickNumber); //display the random number 

    $("#crystal-1").on("click", addHiddenFirst);
    $("#crystal-2").on("click", addHiddenSecond);
    $("#crystal-3").on("click", addHiddenThird);
    $("#crystal-4").on("click", addHiddenFourth);

    function checkWine() {
        if (computerPickNumber < tempScore) {
            console.log("win")
            wins++;
            update();
    }};

    function update() {
        $("#win").text(wins);
        $("#losses").text(losses);
        $("#tries").text(tries)

        if (computerPickNumber > tempScore && tries === 0) {
            losses++;
        };
        if (wins + 1) {
            tries = 5;
        }
    }




});//do not delete this line