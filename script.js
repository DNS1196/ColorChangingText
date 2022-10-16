function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b},${Math.random()})`;
}


const letters = document.getElementsByClassName('letter');

for (let letter of letters) {
    setInterval(function () {
        letter.style.color = randomRGB();
    }, 1000)
}