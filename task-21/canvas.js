const canvas = document.getElementById("dvd-logo");
const context = canvas.getContext("2d");
canvas.style.background = "#808080";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dvdLogo = new Image();
dvdLogo.src = "dvdLogo.png";

let x = 100;
let y = 100;
let dx = 5;
let dy = 5;

function randomHex() {
    return Math.floor(Math.random() * 255).toString(16);
}

function randomColor() {
    return `#${randomHex()}${randomHex()}${randomHex()}`;
}

function animateDvdLogo() {
    requestAnimationFrame(animateDvdLogo);

    context.clearRect(0, 0, canvas.width, canvas.height);

    x += dx;
    y += dy;


    if (x + 150 >= canvas.width || x <= 0) {
        dx = -dx;
        const logoColor = randomColor();
        context.fillStyle = logoColor;
    }

    if (y + 75 >= canvas.height || y <= 0) {
        dy = -dy;
        const logoColor = randomColor();
        context.fillStyle = logoColor;
    }

    context.fillRect(x, y, 150, 75);
    context.drawImage(dvdLogo, x, y, 150, 75);
}

animateDvdLogo();
