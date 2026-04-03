//     Insta Story...

let arr = [
    {dp:"https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"},

    {dp:"https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"},
    
    {dp:"https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"},

    {dp:"https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D", 
        story:"https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"},

    {dp:"https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"},
]
let storiyan = document.querySelector("#storiyan");
let clutter = "";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none";
    },2000);
});