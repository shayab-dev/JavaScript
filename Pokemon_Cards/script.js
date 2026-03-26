let main = document.getElementById("main");
let arr = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yqqY53QR5ayAkNK1uSsMGjtsMxNOmYJz-A&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57X-0vTqmt08gCE39E5n4kWD80K5PPBJGhg&s",
"https://i.pinimg.com/236x/7a/66/15/7a6615072a6613d1f8dff64532ad44d1.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVkKWkpamXCWnQhbebtGbH_Z0HO8zzJXthA&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1CgaUc2QKB6uX8IrgytE_K0sOqF9EMRKQw&s"
];
let s = "";
for(let i=1; i<=27; i++){
  let r = Math.floor(Math.random()*arr.length);
s +=  `<div class="card"> <img src = ${arr[r]} </img> </div>`;
}
main.innerHTML = s;
 


