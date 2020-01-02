var complete = document.querySelector("#complete");
var mid = document.querySelector(".mid");
var pic = document.querySelector(".img")
var sample = document.querySelectorAll('.box');

complete.addEventListener("click", function(){
    if(mid.style.background=="rgb(22, 222, 22)"){
        mid.style.background = "rgb(190, 115, 29)";
        pic.style.display="none";
            for(var i = 0; i < sample.length; i++){
                sample[i].checked = false;
            }
        complete.textContent = "Click to Complete Day :)";
        complete.style.background = "rgb(22, 222, 22)";
    }else{
        mid.style.background="rgb(22, 222, 22)";
        pic.style.display="block";
        complete.textContent = "Click to Reset";
        complete.style.background = "rgb(190, 115, 29)";
    }
    
});
