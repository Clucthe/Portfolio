// var duck = document.querySelector(".d");
// var positionofelement = 0;

// setInterval(()=>
// {
//     positionofelement++;
//     duck.style.left = positionofelement+"px";
// },100);


function move()
{
    var duck = document.querySelector(".d");
    var positionofelement = 0;
    setInterval(()=>
    {
        positionofelement++;
        duck.style.left = positionofelement + "px";
    },15);
}

// window.onload(move);
move();

