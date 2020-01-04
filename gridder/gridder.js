var divs = document.querySelectorAll(".boxes");
var restart = document.querySelector("#reset");
var add = document.querySelector("#add");
var multiple = document.querySelector("#multiple");
var wrapper = document.querySelector(".wrapper");

//made an array so that the new blocks added could be added and then reset properly
var trueList = [];


makeTrueList();

function makeTrueList(){divs.forEach(element => {
    trueList.push(element); 
});
}
// apparently you can't addEventListener to all the divs in one fell swoop like you would with a single thing
// but I bet we can make a loop
// however, this doesn't work b/c it says cannot set property 'background' of undefined
// for(var i=0; i < divs.length; i++){
//     this.addEventListener("click", function(){
//         this.style.background="red";
//     })
// }


// Hark!! This works! Thank you website: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/


//to add random color to clicked box
function colorer(){
    trueList.forEach(element => {
        element.addEventListener("click", function(){
            element.style.background=color();
        })
        
    });
}

colorer();

//to reset to one color
restart.addEventListener("click", function(){
    reset();
})

//to add blocks
add.addEventListener("click", function(){
    more();
})

//to add multiple blocks at once
multiple.addEventListener("click", function(){
    //prompt for number
    var many = prompt("How many divs?");
    makeAllBoxes(many);
})

function color(){
    var r = Math.floor((Math.random()*255));
    var g = Math.floor((Math.random()*255));
    var b = Math.floor((Math.random()*255));
    return "rgb("+r+", "+g+", "+b+")";
}

//resets all divs to boring starting color
function reset(){
    trueList.forEach(element => {
        element.style.background = "rgb(201, 178, 149)";
    })
}

//adds a new div to the wrapper div, makes starting color random, ads to trueList and adds colorer event listener
function more(){
    newDiv = document.createElement("div");
    newDiv.classList.add("boxes");
    wrapper.appendChild(newDiv);
    newDiv.style.background=color();
    trueList.push(newDiv);
    colorer();
}


function makeAllBoxes(num){
    for(i = 0; i < num; i++){
        more();
    }
}