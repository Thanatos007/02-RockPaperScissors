var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var random = Math.floor(Math.random()*3)
    if (random == 0){
        return 'rock';
    }
    if (random == 1){
        return 'paper';
    }
    if (random == 2){
        return 'scissors';
    }
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    if (userValue === aiValue){
        return 'draw';
    }
    if(userValue == 'rock' && aiValue == 'paper'){
        aiPoint++;
        return 'Ai Wins!';
    }
    if(userValue == 'paper' && aiValue == 'scissors'){
        aiPoint++;
        return 'Ai Wins!';
    }
    if(userValue == 'scissors' && aiValue == 'rock'){
        aiPoint++;
        return 'Ai Wins!';
    }
    if(userValue == 'rock' && aiValue == 'scissors'){
        userPoint++;
        return 'user';
    }
    if(userValue == 'paper' && aiValue == 'rock'){
        userPoint++;
        return 'user';
    }
    if(userValue == 'scissors' && aiValue == 'paper'){
        userPoint++;
        return 'user';
    }
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
}

// This function sets the scoreboard with the correct points
function setScore() {
 $('#userPoint').text(userPoint);
 $('#aiPoint').text(aiPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    debugger;
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    setScore();
    
    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
 $('.token').on('click', evaluate);
});
