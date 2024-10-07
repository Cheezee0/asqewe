let btnEntr = document.getElementById("entr");
let btnAgr = document.getElementById("agree");
let btnDis = document.getElementById("disagree");
let wrapAlt = document.querySelector(".wrapper-alt");
let wrapPov = document.querySelector(".wrapper-pov");
let inpList = document.querySelectorAll(".input-text");
let povText = document.querySelectorAll(".pov-text");

function random(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

btnEntr.onclick = () => {
    if (inpList[0].value != "" && inpList[1].value != ""){
        wrapAlt.style.display = "flex";
    } else{
        inpList[0].style.borderColor = "red";
        inpList[1].style.borderColor = "red";
        setTimeout(() => {
            inpList[0].style.borderColor = "var(--border-color)";
            inpList[1].style.borderColor = "var(--border-color)";
        }, 4000);
    }
};
btnAgr.onclick = () => {
    wrapAlt.style.display = "none";
    wrapPov.style.display = "flex";
    povText[0].innerText = inputList[0].value;
    povText[1].innerText = inputList[1].value;
}
btnDis.addEventListener("mouseenter", () => {
    btnDis.style.position = "absolute";
    btnDis.style.top = random(0, window.innerHeight) + "px";
    btnDis.style.right = random(0, window.innerWidth) + "px";
});
btnDis.addEventListener("click", () => {
    btnDis.style.position = "absolute";
    btnDis.style.top = random(0, window.innerHeight) + "px";
    btnDis.style.right = random(0, window.innerWidth) + "px";
});