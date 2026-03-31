//  Insta Love button...
let img = document.querySelector("img");
let i = document.querySelector("i");

img.addEventListener("dblclick", function(){
    i.style.transform = "translate(-50%, -50%) scale(1.8)";
    i.style.opacity = 0.9;

    setTimeout(function(){
        i.style.opacity = 0;
    },1000);

    setTimeout(function(){
        i.style.transform = "translate(-50%, -50%) scale(0)";
    },2000);

    
});

