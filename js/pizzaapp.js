//=======================================================================================================================
//                                                   Getting Acces to html Elements
//=======================================================================================================================

const imageslider=document.querySelector('#imageslider');
const slideshow=document.querySelectorAll("#slide");
const images=document.querySelectorAll('#slide img');
const slideno=document.querySelectorAll('.slideno #line');
const one=document.querySelector(".line1");
const two=document.querySelector(".line2");
const three=document.querySelector(".line3");
const prevbtn=document.querySelector('#prevbutton');
const nextbtn=document.querySelector('#nextbutton');

let counter=1;//To get Current Slide Number
const slidewidth=images[0].clientWidth;

//=======================================================================================================================
//                                                   Event Listeners
//=======================================================================================================================

//Line 1
one.addEventListener('click',()=>{
    counter=1;
    slide();
    imageslider.style.transform="translateX(-20%)";
})

//Line 2
two.addEventListener('click',()=>{
    counter=2;
    slide();
    imageslider.style.transform="translateX(-40%)";
})

//Line 3
three.addEventListener('click',()=>{
    counter=3;
    slide();
    imageslider.style.transform="translateX(-60%)";
})

nextbtn.addEventListener('click',()=>{
    console.log(counter);
    if(counter>=images.length-1)return;
    imageslider.style.transition='transform 0.6s ease-in-out';
    imageslider.style.transform="translateX("+(-slidewidth *counter)+"px";
    counter++;
    slide();
});

prevbtn.addEventListener('click',()=>{
    if(counter<=0)return;
    imageslider.style.transition='transform 0.4s ease-in-out';
    counter--;
    imageslider.style.transform="translateX("+(-slidewidth *counter)+"px"; 
    slide();
});


imageslider.addEventListener('transitionend',()=>{
    console.log("sdasd");
    if(images[counter].id==='lastclone')
    {
        imageslider.style.transition='none';
        counter=images.length-2;
        slide();
        imageslider.style.transform="translateX("+(-slidewidth *counter)+"px";
    }
    if(images[counter].id==='firstclone')
    {
        imageslider.style.transition='none';
        counter=images.length-counter;
        slide();
        imageslider.style.transform="translateX("+(-imagewidth *counter)+"px";
    }
})


//Function to Change Line Colors
function slide()
{
    for(i=0;i<3;i++)
    {
        if(i==counter-1)
        {
            slideno[counter-1].style.opacity='1';
        }
        else
        {
            slideno[i].style.opacity='0.4';
        }
    }
}
