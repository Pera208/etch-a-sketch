const container = document.querySelector(".container");
const changeSizeBtn = document.querySelector("#changesize");

// Default
let size = 16;
let randomclr = false;

changeSizeBtn.addEventListener("click", () => {
    const newsize = getSize();
    if (newsize) {
        // clear the existing grid
        clearGrid();
        size = newsize;
        createGrid(size);
    }
});

function clearGrid() {
    container.innerHTML = "";
}

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

function randomHSL() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 100);
    // const l = Math.floor(Math.random() * 100);
    const l = 50;
    return `hsl(${h}, ${s}%, ${l}%)`;
}

const randombtn = document.querySelector("#rcolor");
randombtn.addEventListener("click", () => {
    randomclr = !randomclr;
});

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width = `${640 / size}px`;
        pixel.style.height = `${640 / size}px`;
        container.appendChild(pixel);
    }

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", () => {
            if (!randomclr) {
                pixel.style.backgroundColor = "white";
            } else {
                pixel.style.backgroundColor = randomHSL();
            }
        });
    });
}

const clearbtn = document.querySelector("#clear");
clearbtn.addEventListener("click", () => {
    clearGrid();
    createGrid(size);
});


createGrid(size);
