var container= document.querySelector(".item-container");

container.style.backgroundColor = "gray";

// var li= document.querySelector(".list-item");

// document.querySelector(".list-item").style.color = "green"

var list = document.getElementsByClassName(".list-item");

for(var i=0; i < list.length; i++){
    list[i].style.color = "red";
}
var input = document.get