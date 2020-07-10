const bgcolor = "#fff"; // default bg color
const selectedbgcolor = "#c5cad2"; // bg color when a element is selected
var dom;

function drag(event) {
    event.target.classList.add("ghost");
    event.dataTransfer.setData("text", event.target.id);
    dom = event.target.id;

    event.currentTarget.style.backgroundColor = selectedbgcolor;
}

function drop(event) {
    const id = event.dataTransfer.getData("text");
    const draggableElement = document.getElementById(id);
    const dropzone = event.target.closest(".items");

    dropzone.insertBefore(draggableElement, event.target.closest(".item"));

    draggableElement.style.backgroundColor = bgcolor;
    draggableElement.classList.remove("ghost");
    event.dataTransfer.clearData();
    check();
}

function over(event) {
    event.preventDefault();

    let draggableElement = document.getElementById(dom);
    let dropzone = event.target.closest(".items");
    dropzone.insertBefore(draggableElement, event.target.closest(".item"));
}

function exit(event) {
    document.getElementById(dom).style.backgroundColor = bgcolor;
    document.getElementById(dom).classList.remove("ghost");
}

function check() {
    elems = [...document.getElementsByClassName("items")];
    //console.log(elems[0].children);
    elems.forEach(() => {
        console.log("oi");
    });
}
