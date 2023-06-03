var title=document.getElementById("title");
var nameField=document.getElementById("nameField");

var upbtn=document.getElementById("upbtn");
var inbtn=document.getElementById("inbtn");

upbtn.onclick=function(){
    nameField.style.maxHeight="60px";
    title.innerHTML="Sign Up";
    upbtn.classList.remove("disable");
    inbtn.classList.add("disable");
}

inbtn.onclick=function(){
    nameField.style.maxHeight="0";
    title.innerHTML="Log In";
    upbtn.classList.add("disable");
    inbtn.classList.remove("disable");
}