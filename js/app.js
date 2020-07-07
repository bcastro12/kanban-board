var dom;

function drag(event){
    event.target.classList.add('ghost');
    event.dataTransfer.setData('text/plain', event.target.id);
    dom = event.target.id;

    event.currentTarget.style.backgroundColor = 'yellow';
}

function drop(event){
    const id = event.dataTransfer.getData('text');
    console.log(id);

    const draggableElement = document.getElementById(id);
    const dropzone = event.target.closest('.items');

    dropzone.insertBefore(draggableElement, event.target.closest('.item'));

    draggableElement.style.backgroundColor = '#fff';
    draggableElement.classList.remove('ghost');

    event.dataTransfer.clearData();
}


function over(event){
    event.preventDefault();

    let draggableElement = document.getElementById(dom);
    let dropzone = event.target.closest('.items');

    //console.log(draggableElement.getAttribute('id'));

    //event.dataTransfer.dropEffect = 'move';
    dropzone.insertBefore(draggableElement, event.target.closest('.item'));
}