document.getElementById("startbutton").onclick= prompt;


function prompt(){
    
var answer = prompt ("Please guess the secret number (1-10)");
var guess = parseInt (answer);
var secret = 7;
    if(guess<= 6){
    alert("Incorrect!!,your guess is too low")
    }else if(guess<=8){
    alert("Incorrect!!,you guess is too high")
}else if(guess== secret){
    alert("Correct!!, you have found the Magic Number.")
}
}
 
