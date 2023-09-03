var i = 0;
var txt = `Let me know your Experience...`; /* The text */
var speed = 2000; /* The speed/duration of the effect in milliseconds */

setInterval(typeWriter,100);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("change").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}