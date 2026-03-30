// let x = document.querySelectorAll(".yes");
// console.log(x);

// let x = document.querySelector("h2");
// setTimeout(function(){
//     x.style.color = "red";
//     x.style.fontFamily = "Gill Sans Light";
// },4000);


// let y = document.querySelector("h1");
// setTimeout(function(){
//     y.innerHTML = "Changed";
// },2000);

let x = document.getElementById("ele1");    // Pikachu
let y = document.getElementById("ele2");   // charizard
let z = document.getElementById("ele3");    // mewtwo

x.addEventListener("click", function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
});


y.addEventListener("mousemove", function(){
    y.style.color = "white";
    y.style.backgroundColor = "orange";
});

y.addEventListener("mouseleave", function(){
    y.style.color = "black";
    y.style.backgroundColor = "white";
});


y.addEventListener("click", function(){
    z.style.color = "black";
    z.style.backgroundColor = "purple";
});

  
z.addEventListener("click", function(){
    x.style.color = "white";
    x.style.backgroundColor = "green";
    x.innerHTML = "Bulbasaur";
});