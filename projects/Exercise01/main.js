var Name;
var lastName;
var email;

// document.getElementById("submitButton").onclick = userInput;
document.getElementById("submitButton").addEventListener("click", userInput);
function userInput(){
    Name= document.getElementById("name").value;
    lastName= document.getElementById("surname").value;
    emailAddress= document.getElementById ("email").value;
    displayInfo();
}

function displayInfo(){
    document.getElementById("outputName").innerHTML=Name;
    document.getElementById("outputSurname").innerHTML=lastName;
    document.getElementById("outputEmail").innerHTML=email
    resetInput()
}

function resetInput(){
    document.getElementById("name").value= "";
    document.getElementById("surname").value= "";
    document.getElementById("email").value= "";
}