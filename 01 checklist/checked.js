var complete = document.querySelector("#complete");
var mid = document.querySelector(".mid");

complete.addEventListener("click", function(){
    if(mid.style.background=="rgb(22, 222, 22)"){
        mid.style.background = "rgb(190, 115, 29)";
    }else{
        mid.style.background="rgb(22, 222, 22)";
    }
    
});

