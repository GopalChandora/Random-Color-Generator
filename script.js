let leftDisplay = document.getElementById("left-h3");
let btnHex = document.getElementById("hex");
let hexCopy = document.getElementById("hex_clip");

let rightDisplay = document.getElementById("right-h3");
let btnrgb = document.getElementById("rgb");
let rgbCopy = document.getElementById("rgb_clip");

let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");


function hexRandomGenerate() {
    // let hexString = "123456789ABCDEF";
    let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let numberstr = '';
    for (i = 0; i < 6; i++) {
        let res = Math.floor(Math.random() * hexArray.length);
        numberstr = numberstr + hexArray[res];
        // let res = Math.floor(Math.random() * hexString.length);
        // numberstr = numberstr + hexString.charAt(res); // USing String
    }
    return `#${numberstr}`;
}

btnHex.addEventListener('click', () => {
    let hexColor = hexRandomGenerate()
    console.log(hexColor)
    leftDisplay.innerText = hexColor;
    document.getElementById("sec_left").style.backgroundColor = hexColor;
    if (hexColor == "#FFFFFF") {
        leftDisplay.classList.toggle("col_black")
    }
});

hexCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(leftDisplay.textContent);
    alert("Copied To Clipboard");
});


// RGB color Generator
/*
function clickGenerate(red, green, blue) {
    let randomRed = Math.floor(Math.random() * 255);
    console.log(red.value = randomRed)

    let randomGreen = Math.floor(Math.random() * 255);
    console.log(green.value = randomGreen)

    let randomBlue = Math.floor(Math.random() * 255);
    console.log(blue.value = randomBlue)

    rightDisplay.innerText = `rgb(${randomRed},${randomGreen},${randomBlue})`
}
*/

btnrgb.addEventListener('click', () => {
    // clickGenerate(red, green, blue)

    let rgbnum = `rgb(${red.value},${green.value},${blue.value})`
    rightDisplay.innerText = rgbnum
    document.getElementById("sec_right").style.backgroundColor = rgbnum;
    if (rgbnum = 255) {
        rightDisplay.classList.toggle("col_black");
    }
})

rgbCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(rightDisplay.textContent);
    alert("Copied To Clipboard");
});