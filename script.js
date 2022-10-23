const container = document.querySelector("#container");


for (let i= 0; i < 16 * 16; i++) {
    const pixel = document.createElement('div');
    pixel.id = "pixel";
    container.appendChild(pixel);
}

const pixel = document.querySelectorAll('#pixel');
pixel.forEach( (pix) => {
    pix.addEventListener('mouseover', () => draw(pix)) 
});

function draw(e) {
    console.log(e);
    e.classList.add("pixelActive");
}