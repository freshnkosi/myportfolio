var timeleft = 1000;
var elem= document.getElementById("countdown");

var timerId= setInterval(countdown,80);

function countdown() {
    if (timeleft=== -1){
        clearInterval(timerId);
        

    }else {
        elem.innerHTML= timeleft ;
        timeleft--;
    }
}
