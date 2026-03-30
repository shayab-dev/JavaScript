//  Add Friend Feature with same button...


let h5 = document.querySelector("h5");
let add = document.getElementById("add");
let flag = 0;

add.addEventListener("click", function(){
    if(flag==0){
        h5.innerHTML = "Friends now";
        h5.style.color = "blue";
        add.innerHTML = "Remove";
        flag = 1;
    }
    else{
        h5.innerHTML = "Stranger";
        h5.style.color = "red";
        add.innerHTML = "Add Friend";
        flag = 0;
    }
    
});

