'use strict'

function getUserName(){
    var userName = prompt('Please enter your name:');
    document.write("Welcome " + userName);
}

function isCatCute(){
    var cuteCat= prompt('Do you think cats are cute?');
        cuteCat.toLowerCase;
        while( cuteCat != "yes"){
            cuteCat = prompt("You are a disgrace, try again.");
        } 
}


function displayTime(){
    var time = new Date().getHours();
    if (time < 6) {
        document.write("Good night!");
    } else if(time < 12){
        document.write("Good meowning!");
    } else if( time < 20) {
        document.write("Purrfect day!");
    } else{
        document.write("Good night!");
    }    
}

function guessGame(){
    var treatGuess = prompt("Meow! I want a number of salmon treats between one and ten, how many will you give me?");
    var treatNum = Math.floor(Math.random( )* 10) + 1;
   for(var i = 0; i < 5; i++){
    if (treatGuess != treatNum && i === 4){
        alert("Sorry, times up! Now I knock your coffee off the table.")
    } else if(treatGuess > treatNum){
        var treatGuess= prompt("I can't eat that many! Try again.");
    } else if( treatGuess < treatNum){
        var treatGuess = prompt("Not enough! Try again.");
    } else if(treatGuess == treatNum){
        alert("Purrrfect. Now  I'm satisfied."); 
        break; 
    }
   }
}

