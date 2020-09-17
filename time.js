var time = new Date().getHours();

if (time < 6) {
    document.write("Good night!");
} else if(time < 12){
    document.write("Good meowning!");
} else if( time < 20) {
    document.write("Purrfect day!");
} else{
    document.write("Good night!")
}