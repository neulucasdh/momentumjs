let images = [];

function randomBG (number) {
    for (let i = 0; i < number; i += 1) {
        images.push(`(${i+1}).jpg`);
    }
    const chosenImage = images[Math.floor(Math.random() * images.length)]
    const bgImage = `background/ ${chosenImage}`
    document.body.style.backgroundImage = `url('${bgImage}')`
}

randomBG(38)
