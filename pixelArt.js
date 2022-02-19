let gridSize = document.querySelector(".inputGridSize");
let gridSizeBlock = document.querySelector(".gridSize");

// getGridSize is a main function that rebuilds the grid
const getGridSize = function () {
    let textGridSize = document.querySelector(".gridValue");

    // variable size describe a size of the grid area
    let size = gridSize.value;
    let textGrid = `${size} X ${size}`;
    textGridSize.innerHTML = textGrid;
    resetField(size);
};
// function for removing all blocks from the grid container
const resetField = function (size) {
    let gridCollection = document.querySelectorAll("div.gridField > div");
    gridCollection.forEach(element => {
        element.remove();
    });
    createField(size);
}; 
// function to create the desired number of blocks in the grid container and expand it proportionally
const createField = function (size) {
    let gridField = document.querySelector(".gridField");
    gridField.setAttribute("style", `grid-template-rows: repeat(${size}, 1fr);grid-template-columns: repeat(${size}, 1fr);`);
    for (let i = 0; i < size*size; i++) {
        let elem = document.createElement("div");
        elem.className = `grid${i}`;
        gridField.append(elem);
    } 
};
// using a system of multiple eventlisteners to draw only when the user holds the mouse button
let isDown = false;
gridSize.addEventListener("mousedown", () => isDown = true);
gridSize.addEventListener("mousemove", () => {if (isDown === true) {getGridSize();}});
gridSizeBlock.addEventListener("mouseup", () => {if (isDown === true) {isDown = !isDown;}});


// reset button 
let resetButton = document.querySelector(".resetField");
const resetFunction = function () {
    let size = gridSize.value;
    resetField(size);
};
resetButton.addEventListener("mouseup", resetFunction);


// function for changing the color of grid blocks
let gridField = document.querySelector(".gridField");
const coloringFunction = function (event) {
    let colorButton = document.querySelector(".colorButton");
    let colorValue = colorButton.value;
    let target = event.target;

    // get the element that the user interacts with and then paint them in the user's color
    target.setAttribute("style", `background-color: ${colorValue}`);
};

// using a system of multiple eventlisteners to draw only when the user holds the mouse button
let isDrawing = false;
gridField.addEventListener("mousedown", () => isDrawing = true);
gridField.addEventListener("mousemove", (event) => {if (isDrawing === true) {coloringFunction(event);}});
window.addEventListener("mouseup", () => {if (isDrawing === true) {isDrawing = !isDrawing;}});