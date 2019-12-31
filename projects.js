var count = 0;
var oneUp = document.querySelector("#oneUp");
var oneCounter = document.querySelector("#oneCount");

// counter(oneUp, oneCounter);

oneUp.addEventListener("click",function(){
    oneCounter.textContent = count++;
})

// not sure why this isn't working:
// function counter(b, d){
//     b.addEventListner("click", function(){
//         d.textContent = count++;
//     })
// }

