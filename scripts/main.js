var tag = document.getElementById('main');
tag.innerText = "new element";
tag.style.color = "red";
tag.style.fontSize = "50px";
tag.style.fontWeight = "100";
tag.parentElement.style.backgroundColor = "green";
document.write(`
    <ol> 
            <li> one</li>
            <li> one</li>
            <li> one</li>
            <li> one</li>
            `)
console.log(tag.innerText);
var elements = document.getElementsByTagName("p");
elements[1].style.color = "blue";
elements[1].style.fontSize = "30px";

// var buttons = document.querySelectorAll('button');
// console.log(buttons);
// buttons.forEach(button => {
//     button.style.backgroundColor = "red";
// });
// function msclick()
//  {
// var p = document.createElement("p");
// p.innerText = "Hlo Prince" ;
// document.body.appendChild(p);
//  }

//  function mshover()
//  {
// var p = document.createElement("p");
// p.innerText = "Good  Prince" ;
// document.body.appendChild(p);
//  }

var table = document.createElement("table");
var tr = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
td1.innerText = "Name";
td2.innerText = "Email";
tr.appendChild(td1);
tr.appendChild(td2);
table.appendChild(tr);
document.body.appendChild(table); 

function msclick(e)
{   if(e.target.innerText == "hlo")
    {
    e.target.innerText = "Hloooooo";
    }
    else {
        e.target.innerText = "hlo"
    }
} 
var target = document.getElementById("pic");
function show(e)
{   if(e.target.innerText == "Hide")
    {
    e.target.innerText = "Show";
    target.style.display = "None"
    }
    else {
        e.target.innerText = "Hide"
        target.style.display = "Block"
    }
} var d = document.querySelectorAll("button");
console.log(d);
document.querySelectorAll("button").forEach(e=>{
    e.addEventListener("click",()=>{
        console.log("Button Clicked")
    })
})
var buts = document.querySelectorAll("button");
buts.forEach(e=>{
    e.addEventListener("click",()=>{
    buts.forEach(e=>{
    e.classList.add("bg-red")
    e.classList.remove("bg-blue")
    })
    }
    )
})
function validate(eve) {
    eve.preventDefault();
    var data = document.forms["login"]["name"].value;
    if(data.length <= 2){
        document.getElementById("name").style.borderColor = "red";
        document.getElementById("error").innerText = "Invalid";
    }
    else{
        document.getElementById("name").style.borderColor = "white";
        document.getElementById("error").innerText = "";
    }
}
