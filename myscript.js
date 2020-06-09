const description = document.querySelector('h3');

const color1 = document.querySelector('input[name="color1"]');
const color2 = document.querySelector('input[name="color2"]');


function changeColor() {
    const gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    document.body.style.background = gradient;
    description.textContent = gradient;
}

color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);