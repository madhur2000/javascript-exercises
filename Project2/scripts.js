const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (element) => {
    return window.getComputedStyle(element).backgroundColor;
}

const defaultBG = getBGColor(center);

// console.log(`red: + ${getBGColor(red)} + \ncyan: ${getBGColor(cyan)} + \nviolet: + ${getBGColor(violet)} + \norange: ${getBGColor(orange)} + \npink: ${getBGColor(pink)}`);

// var color = getBGColor(pink);



const setCenterBackground = (element) => {

    element.addEventListener("mouseenter", () => {

        center.style.backgroundColor = getBGColor(element);
    
    });

}



const resetCenterBackground = (element) => {
    
    element.addEventListener("mouseleave", () => {

        center.style.background = defaultBG;
    
    });
}

setCenterBackground(red);
setCenterBackground(cyan);
setCenterBackground(violet);
setCenterBackground(orange);
setCenterBackground(pink);

resetCenterBackground(red);
resetCenterBackground(cyan);
resetCenterBackground(violet);
resetCenterBackground(orange);
resetCenterBackground(pink);
