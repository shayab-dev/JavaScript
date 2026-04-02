let elem = document.querySelectorAll(".elem");

elem.forEach(function(val){

    val.addEventListner("mouseenter", function(){
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListner("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x + "px";
        val.childNodes[3].style.top = dets.y + "px";
    });
});