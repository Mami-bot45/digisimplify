var comingDate = new Date("Aug 1, 2022 00:00:00");
var coming = setInterval(function(){
  var now = new Date();
  var des = comingDate.getTime() - now.getTime();
  var days = Math.floor(des/(1000 * 60 * 60 * 24));
  var hours = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var mins = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
  var sec = Math.floor(des%(1000 * 60) / 1000);

  document.getElementById("d").innerHTML = days;
  document.getElementById("h").innerHTML = hours;
  document.getElementById("m").innerHTML = mins;
  document.getElementById("s").innerHTML = sec;

  if (des <= 0) {
    clearInterval(coming);
    document.getElementById("timer").innerHTML = "<h1>Already Launched</h1>";
  }

}, 1000);