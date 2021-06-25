document.querySelector(`.menu-context i`).addEventListener(`click`, e => {
    document.querySelector(`.shadow-menu`).classList.add(`hide`);
    document.querySelector(`.menu`).style.left = `100%`;
})

document.querySelector(`.ico-menu.fas.fa-bars`).addEventListener(`click`, e => {
    document.querySelector(`.shadow-menu`).classList.remove(`hide`);
    document.querySelector(`.menu`).style.left = `11%`;
})

document.getElementById(`blue`).addEventListener(`click`, e => {
    window.document.style.root = `--grey: rgb(10, 10, 126)`;
    window.document.style.root = `--pink: rgb(10, 10, 126)`;
})