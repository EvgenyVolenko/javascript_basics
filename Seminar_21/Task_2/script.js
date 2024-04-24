const container = document.getElementById('container');

const addButton = document.getElementById('addButton');
addButton.addEventListener('click', function (e) {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.textContent = container.children.length + 1;
    container.append(newBox);
});

const removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', function (e) {
    if (container.children.length > 0) {
        const lastBox = container.lastChild;
        container.removeChild(lastBox);
    }
});

const cloneButton = document.getElementById('cloneButton');
cloneButton.addEventListener('click', function (e) {
    if (container.children.length > 0) {
        const lastBox = container.lastChild;
        const clone = lastBox.cloneNode(true);
        container.append(clone);
    }
});