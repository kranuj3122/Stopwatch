var ms = 0;
var sec = 0;
var min = 0;
var hrs = 0;
//screen
var minutes = document.getElementById("minute");
var seconds = document.getElementById("second");
var hours = document.getElementById("hour");
//button
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var reset = document.getElementById("reset");

pause.setAttribute("style", "display:none;");
reset.setAttribute("style", "display:none;");
var timer;

//start timer
function getTime(time) {
  return time < 10 ? "0" + time : time;
}
function run() {
  seconds.innerHTML = getTime(sec);
  minutes.innerHTML = getTime(min);
  hours.innerHTML = getTime(hrs);
  ms += 100;
  if (ms == 1000) {
    ms = 0;
    sec++;
  }
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hrs++;
  }
}
function startTimer() {
  pause.setAttribute("style", "display:visible;");
  reset.setAttribute("style", "display:visible;");
  start.setAttribute("style", "display:none");
  if (!timer) {
    timer = setInterval(run, 100);
  }
}
start.addEventListener("click", startTimer);

// pause the time
var p = 0;
function pauseTimer() {
  p++;
  if (p % 2 == 1) {
    pause.innerHTML = "CONTINUE";
    clearInterval(timer);
    timer = false;
  } else {
    startTimer();
    pause.innerHTML = "PAUSE";
  }
}
pause.addEventListener("click", pauseTimer);

// reset the stopwatch
function resetTimer() {
  pause.innerHTML = "PAUSE";
  reset.setAttribute("style", "display:none;");
  pause.setAttribute("style", "display:none;");
  start.setAttribute("style", "display:visible;");
  ms = 0;
  sec = 0;
  min = 0;
  hrs = 0;
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  hours.innerHTML = "00";

  clearInterval(timer);
  timer = false;
}
reset.addEventListener("click", resetTimer);
