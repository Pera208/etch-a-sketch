const container = document.querySelector(".container");
const changeSizeBtn = document.querySelector(".changesize");

changeSizeBtn.addEventListener("click", () => {
    let size = getSize();
    if (size) {
        // clear the exisint grid
        container.innerHTML = "";
        createGrid(size);
    }
});

function getSize() {
    let size = prompt("Enter the grid size (Max is 100) : ");
    if (size !== null && size > 0 && size <= 100 && !isNaN(size)) {
        size = parseInt(size);
        return size;
    } else {
        alert("Invalid size! Please enter a number between 1 and 100.");
        return;
    }
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${640 / size}px`;
        pixel.style.height = `${640 / size}px`;
        container.appendChild(pixel);
    }
}

createGrid(16);
