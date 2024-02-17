//$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##
// DECLARATIONS
const box = document.querySelector(".box");
const BOX_WIDTH = 960;
const ELEMENT_BORDER_WIDTH = 0.96;
let numberOfSquares = document.getElementById('square-number').value;
// let numberOfSquares = 45;
let sideLength = BOX_WIDTH/numberOfSquares - (ELEMENT_BORDER_WIDTH*2);

//$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##
// CONSOLE LOGS
console.log(sideLength);
console.log(numberOfSquares);


//$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##
function gridElementUpdate(){
    let new_n = document.querySelector('#square-number').value;
    numberOfSquares = new_n;
    sideLength = BOX_WIDTH/numberOfSquares - (ELEMENT_BORDER_WIDTH*2);
    clearGrid();
    drawGrid(numberOfSquares);
}

//$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##
function clearGrid(){
    while(box.firstChild) {
        box.removeChild(box.lastChild);
    }
}
//$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##
// loop to create a line elment and add squares to the line
// followed by adding line to the '.box' element
function drawGrid(n_square) {
    for(let i=0; i < n_square; i++){
        const lineElement = document.createElement('div');
        lineElement.classList.add('line');
        lineElement.id = 'l' + i;
        for(let j=0; j < n_square; j++) {
            const divEle = document.createElement("div");
            divEle.classList.add('square');
            divEle.id = 'sq' + j;
            divEle.style.height = sideLength + 'px';
            divEle.style.width = sideLength + 'px';
            lineElement.appendChild(divEle);
        }
        box.appendChild(lineElement)
    }
}
//$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##
// dispaly cursor postion 

box.addEventListener('mousemove', (e) => {
    let log = document.querySelector('#log');
    log.innerText = `
    Screen X/Y: (${e.screenX}, ${e.screenY})
    Client X/Y: (${e.clientX}, ${e.clientY})`
    const elementMouseIsOver = document.elementFromPoint(e.clientX, e.clientY);
    // #debug
    // console.log(elementMouseIsOver);
    elementMouseIsOver.style.backgroundColor = 'red';
});

drawGrid(42);