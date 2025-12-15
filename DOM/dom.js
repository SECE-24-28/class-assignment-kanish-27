//getElementById
//getElementByClassname
//getElementByTagName
//querySelector
//querySelectorAll

let head = document.getElementById("head");
head.innerText="Welcome Back";
//head.innerHTML="<h1>Hello</h1>"
//console.log(head);

head.style.color="red";
head.style.fontSize="50px";

let fruits = document.getElementsByClassName("fruits");

//console.log(fruits);
fruits[0].style.color="green";
fruits[3].style.color="yellow";

let ele = document.querySelector("div");
console.log(ele);

let ele1=document.querySelectorAll("div");
console.log(ele1);

let h2Ele=document.createElement("h2")
console.log(h2Ele);
h2Ele.innerText="This is h2 tag";

//document.body.append(h2Ele);
document.getElementById("new").appendChild(h2Ele);

function hideText(){
    head.style.display="none";
}
function showText(){
    head.style.display="block";
}

function toogleText(){
    if(head.style.display=="none"){
        head.style.display="block";
    }else{
        head.style.display="none";
    }
}

document.getElementById("hideBtn").addEventListener("click",hideText);
document.getElementById("showBtn").addEventListener("mouseOver", showText);