"use strict";

var pattern = [];
var usedPattern = [];
var level = 0;
var gameCheck = false;
function addPattern() {
    var pValue = randNum(0, 3);

    //adds a pattern to array  create a global variable
    pattern.push(pValue);
}

function playPattern() {
//    takes the pattern from the array and loops it
for (var i = 0; i < pattern.length; i++){
    var delayTime = i * 600;

    setTimeout(flashSquare,delayTime);
}

}

function flashSquare() {
    var item = pattern.pop();
    gameCheck = true;

//    pops and removes first item of the array
    $('#' + item).animate({
        opacity: 0.2
    }, 200).animate({
        opacity: 1
    }, 100);

    usedPattern.push(item);

    if(pattern.length <= 0){
        createClicks();
    }
}
//end of flash square function


function createClicks() {
    $('.square').click(function() {
    //    check if clicked element is the correct square
    var item = usedPattern.shift();

    var squareId = $(this).attr('id');

    $(this).animate({opacity:.2}, 200).animate({opacity: 1}, 100);

        if (item == squareId){
        pattern.push(item);
        if (usedPattern.length <= 0){
            level++;
            $('#level').html('Level: ' + level);

            removeClicks();
        //    user is finished clicking through the pattern successfully

        //    add a new pattern
            addPattern();
            //playPattern();
            setTimeout(playPattern, 800);
        }

        } else {
        // else game over
        gameCheck = false;
        $('#title').html('GAME OVER').css({
            fontSize: 58,
            marginBottom: 15,
            paddingTop: 15
        });
        $('p').html("Click to Restart");
        //clear out the pattern arrays
        pattern = [];
        usedPattern = [];

        }

    }); //end .square click
} //end create click
function removeClicks(){
//    removes all events from element
    $('.square').unbind();
}


function startGame(){
    removeClicks();
    resetGame();
    addPattern();
    addPattern();
    playPattern();
}

function resetGame(){
    level = 0;
    $('#level').html('Level: ' + level);
    $('#title').html('Simon').css({
        fontSize: 82,
        marginBottom: 0,
        paddingTop: 0
    });
    $('p').html('Click anywhere on the circle to Start Game');
    // $('#stats-circle').click(fun)
}

$('#stats-circle').click(function () {
    if(gameCheck === false){
        startGame();
    }
});

function randNum(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
