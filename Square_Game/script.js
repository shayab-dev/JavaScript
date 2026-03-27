let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter", function(){
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`;
});
s1.addEventListener("mouseleave", function(){
    s1.innerHTML = `<h1>1</h1>`;
});

s1.addEventListener("dblclick", function(){    // for double click on card 1
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    
});


let s2 = document.getElementById("sq2");
let clr = "red";       // Initially the color state is red.
s2.addEventListener("mouseenter", function(){
    if(clr == "red"){   // Check if the variable clr is equal to "red".
        s2.style.backgroundColor = "red";   // Change the background color of the box to red.
        clr = "green";  // Now change the variable value to green.
    }
    else if(clr == "green"){     // If the color state is green.
        s2.style.backgroundColor = "green";      // Change the box color to green.
        clr = "blue";     // Now prepare the next color blue.
    }
    else {      // If the color is neither red nor green, then run this.
        s2.style.backgroundColor = "blue";      // Make the box blue.
        clr = "red";        // Reset the next color back to red.
    }
});
s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor = "white";     // Change the box color to white.
});


let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter", function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
});
s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor = "white";
});

let s4 = document.getElementById("sq4");
s4.addEventListener("click", function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    s2.style.backgroundColor = `rgb(${r2},${r3},${r1})`;
    s3.style.backgroundColor = `rgb(${r3},${r1},${r2})`;
});
s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
    
});

let main = document.getElementById("main");
let crs = document.getElementById("cursor");
main.addEventListener("mousemove", function(details){
    // console.log(details.x , details.y);    // x & y are the coordinates.
    crs.style.left = details.x + "px";
    crs.style.top = details.y + "px";
});