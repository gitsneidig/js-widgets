const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0
let int = setInterval(blurring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    // change the value of loadText inner text as it loads from 0-100
    loadText.innerText = `${load}%`
    // cause the loading text to slowly fade out
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    // cause background image to go from blurry to crisp
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}