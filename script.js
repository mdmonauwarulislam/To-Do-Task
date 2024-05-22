const inputBox = document.getElementById('input-box');
const listConatiner = document.getElementById("task-container");

function addTask(){
    if(inputBox.value === ""){
        alert("You must have to write somethings");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listConatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    savaData();
}

listConatiner.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savaData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savaData();
    }
}, false);

function savaData(){
    localStorage.setItem("data", listConatiner.innerHTML);
}
function showData(){
    listConatiner.innerHTML=localStorage.getItem('data');
}
showData();