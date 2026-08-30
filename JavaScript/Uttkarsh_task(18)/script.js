
let greeting=document.getElementById("Greeting");
let nameinput=document.getElementById("nameinput");
let greetbutton=document.getElementById("greetbutton");
let boxes=document.querySelectorAll(".box");



greetbutton.addEventListener("click", function () {
    let name = nameinput.value;
    if (name !== "") {
        greeting.innerText = "NAMASTE, " + name;
    }
});


// colour change
boxes.forEach(function(box) {
    box.addEventListener("click", function() {
        if (box.style.backgroundColor === "") {
            box.style.backgroundColor = box.classList[1];} 
            else {
            box.style.backgroundColor = "";
    }
});
});