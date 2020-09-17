'use strict'

function getUserName(){
    var userName = prompt('Please enter your name:');
    document.write(userName + ", ");
}

function isCatCute(){
    var cuteCat= prompt('Do you think cats are cute?');
    if (cuteCat == "yes") {
        document.write("Glad you're here!");
    } else if(cuteCat == "no"){
        document.write("You are a disgrace.");
    } else {
        document.write("Hmm........");
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