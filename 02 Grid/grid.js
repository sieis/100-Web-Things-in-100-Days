var num = document.querySelector("#gridNum");
num2 = 0;
var first = document.querySelector("#starter");

//prompt for a number for the grid
num.addEventListener("click", function(){
    //if there's a num already, reset to 0
    if(num2 !=0){
        num2 = 0;
    }
    num2 = prompt("Enter a number for your grid");
    console.log(num2);
    looper(num2);

})



//for loop producing a new div for each number
function looper(num3){
    for(i = 0; i < num3; i++){
        console.log(i);
        var newDiv = document.createElement("div");
        document.body.insertBefore(newDiv, first);
        newDiv.style.background="red";
        newDiv.textContent="new";
    }
}

