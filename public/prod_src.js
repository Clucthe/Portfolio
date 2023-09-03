const content = document.querySelector(".content-inner");
const arrowBtns = document.querySelectorAll(".content i");
const btnWidth = document.querySelector(".card").offsetWidth;


arrowBtns.forEach(btn=>{
    btn.addEventListener("click",()=>
    {
        console.log(btnWidth);
        if(btn.id==="left")
        {
            content.scrollLeft -= btnWidth;
        }
        else
        {
            content.scrollLeft += btnWidth;
        }
    })
})

let isdragging = false;

const dragStart = () =>
{
    isdragging = true;
}

const dragging = (e) =>
{
    if(!isdragging)
    {
        return;
    }
    content.scrollLeft = e.pageX;
    console.log("d");
}

content.addEventListener("mousedown",dragStart);
content.addEventListener("mousemove",dragging);