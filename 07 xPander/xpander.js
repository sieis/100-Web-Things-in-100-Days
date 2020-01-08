var pics = document.querySelectorAll(".pic");
var card = document.querySelectorAll(".card");
var close = document.querySelectorAll(".close");

picList=[];
cardList=[];
closeList=[];

//I don't yet know how to implement all this with multiple blocks for more than one show

makePicList();
makeCardList();
makeCloseList();

//array of podcast pictures
function makePicList(){
    pics.forEach(element =>{
        picList.push(element);
    });
}

function makeCloseList(){
    close.forEach(element =>{
        closeList.push(element);
    });
}

closeList.forEach(element=>{
    element.addEventListener("click", function(){
        displayOn(picList[0]);
        displayOff(cardList[0]);    
    });    
})


//array of podcast pictures
function makeCardList(){
    card.forEach(element =>{
        cardList.push(element);
    });
}

//add the click event listeners
picList.forEach(element =>{
    element.addEventListener("click", function(){
        //turn off display
        displayOff(element);
        displayOn(cardList[0]);
    })
})

//toggle display elements
function displayOff(element){
    element.style.display="none";
}

function displayOn(element){
    element.style.display="block";
}