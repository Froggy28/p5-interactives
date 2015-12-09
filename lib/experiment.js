var input1= document.getElementById("input1");
var button1=document.getElementById("button1");
var thePar=document.getElementById("thePar"); 

button1.addEventListener("click", function(){
    var newColor=input1.value;
    thePar.style.color=newColor;
})