
// function welcome() 
// {
//   alert("hello");
// }
// document.onload = welcome();


var i = 0;
var txt = `Hi! let's start by knowing you!`; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

setInterval(typeWriter,100);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("change").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// typeWriter();

