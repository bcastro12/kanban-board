const bgcolor = "#fff"; // default bg color
const selectedbgcolor = "#c5cad2"; // bg color when an element is selected
var dom;
var obj = {};

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
    elems.forEach((el) => {
        obj[el.getAttribute("id")] = {};
        arrEl = [];
        [...el.children].forEach((child) => {
            arrEl.push(child.getAttribute("id"));
        });
        obj[el.getAttribute("id")] = arrEl;
    });
    console.log(obj);
    document.getElementById("json").innerHTML = "<code><pre>" + JSON.stringify(obj, null, 1) + "</pre></code>";
    document.getElementById("json").style.display = "block";
}

function sendform() {
    let backlog = document.getElementById("backlog");
    let newitem = document.getElementById("new-item");
    if (newitem.value.replace(/&nbsp;?/g, " ").trim() == "") return false;

    backlog.innerHTML +=
        "<div id='" +
        (document.getElementsByClassName("item").length + 1) +
        "' class='item d-flex' draggable='true' ondragstart='drag(event)' ondragend='exit(event)'>" +
        newitem.value +
        "</div>";
    newitem.value = "";
    check();
    return false;
}
