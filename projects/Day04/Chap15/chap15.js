var todayDate=document.getElementById("todaysdate");
var todoButton= document.getElementById("whattodo");


todoButton.addEventListener("click",displayActivity);

var d=new Date();

setInterval(newtime,1000)

function newtime(){
    document.getElementById("livetime").innerHTML= (new Date().toLocaleTimeString());
}
displayDate();


function displayDate(){
    todayDate.innerHTML= d.toDateString();
}
setInterval(displayDate)

function displayActivity() {
    var dayOfTheWeek = d.getDay();
}

document.getElementById("thingtodo").innerHTML = youShould;




