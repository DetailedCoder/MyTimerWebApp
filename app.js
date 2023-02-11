var hours = 0;
var minutes = 0;
var seconds = 0;
var timer;
function hourUp() {
    var hour = document.getElementById("hour");
    hour.innerHTML = parseInt(hour.innerHTML) + 1;

    if (parseInt(hour.innerHTML) > 99) {
        hour.innerHTML = 0;
    }
}

function hourDown() {
    var hour = document.getElementById("hour");
    hour.innerHTML = parseInt(hour.innerHTML) - 1;

    if (parseInt(hour.innerHTML) < 0) {
        hour.innerHTML = 99;
    }
}

function minUp() {
    var hour = document.getElementById("min");
    hour.innerHTML = parseInt(hour.innerHTML) + 1;

    if (parseInt(hour.innerHTML) > 59) {
        hour.innerHTML = 0;
    }
}


function minDown() {
    var hour = document.getElementById("min");
    hour.innerHTML = parseInt(hour.innerHTML) - 1;

    if (parseInt(hour.innerHTML) < 0) {
        hour.innerHTML = 59;
    }
}
function secUp() {
    var hour = document.getElementById("sec");
    hour.innerHTML = parseInt(hour.innerHTML) + 1;

    if (parseInt(hour.innerHTML) > 59) {
        hour.innerHTML = 0;
    }
}
function secDown() {
    var hour = document.getElementById("sec");
    hour.innerHTML = parseInt(hour.innerHTML) - 1;

    if (parseInt(hour.innerHTML) < 0) {
        hour.innerHTML = 59;
    }
}

function startTimer() {
    var buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length - 1; i += 1) {
        buttons[i].style.display = "none";
    }

    hours = parseInt(document.getElementById("hour").innerHTML);
    minutes = parseInt(document.getElementById("min").innerHTML);
    seconds = parseInt(document.getElementById("sec").innerHTML);

    timer = setInterval(countdown, 1000);
}
function countdown() {
    seconds -= 1;

    if (seconds < 0) {
        minutes -= 1;
        seconds = 59;
        if (minutes < 0) {
            hours -= 1;
            minutes = 59;
            if (hours < 0) {
                hours = 0;
                minutes = 0;
                seconds = 0;
            }
        }
    }

    if (seconds == 0 && minutes == 0 && hours == 0) {
        document.getElementById("myModal").style.display = "block";
        clearInterval(timer);
    }
    document.getElementById("sec").innerHTML = seconds;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("hour").innerHTML = hours;
}
function closeModal() {
    document.querySelector(".modal").style.display = "none"
    location.reload();
}