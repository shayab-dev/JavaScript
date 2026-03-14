// let p = document.querySelector("p");
// p.addEventListener("dblclick", function(){
//     p.style.color = "red";
// });

// let input = document.querySelector("input");
// input.addEventListener("input", function(val){
//     if(val.data !== null){
//         console.log(val.data);
//     }
// });

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change", function(details){
//     device.textContent =  ` ${details.target.value} Device Selected`;
// });

// window.addEventListener("mousemove", function(dets){
//     console.log(dets.clientX, dets.clientY);
// });


let inp = document.querySelector("input");

inp.addEventListener("input", function(){
   console.log(inp.value.length);
});