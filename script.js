/**********************************************************************
 * DECLARATIONS
 **********************************************************************/
const box = document.querySelector(".box");
const BOX_WIDTH = 960;
const ELEMENT_BORDER_WIDTH = 0.96;

/**********************************************************************
 * 
**********************************************************************/





/**********************************************************************
 * function captures the number of squares from the input on html
 * and updates the side length of the element
 * followed by calls to clear the existing gread and draw the new grid
 **********************************************************************/
function gridElementUpdate(){
    let numberOfSquares = document.querySelector('#square-number').value;
    sideLength = BOX_WIDTH/numberOfSquares - (ELEMENT_BORDER_WIDTH*2);
    // console.log(sideLength);          //#debug
    // console.log(numberOfSquares);     //#debug
    clearGrid();
    drawGrid(numberOfSquares);
}
/**********************************************************************
 * function to remove all the chidren div from '.box' thereby clearing it
 **********************************************************************/
function clearGrid(){
    while(box.firstChild) {
        box.removeChild(box.lastChild);
    }
}
/**********************************************************************
* loop to create a line elment and add squares to the line
* followed by adding line to the '.box' element
**********************************************************************/
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
/**********************************************************************
* dispaly cursor postion 
**********************************************************************/
box.addEventListener('mousemove', (e) => {
    let log = document.querySelector('#log');
    log.innerText = `
    Screen X/Y: (${e.screenX}, ${e.screenY})
    Client X/Y: (${e.clientX}, ${e.clientY})`
    const elementMouseIsOver = document.elementFromPoint(e.clientX, e.clientY);
    const isColorful = document.querySelector('#colorful').checked;
    // console.log(isColorful);          //#debug
    // console.log(elementMouseIsOver);  //#debug
    isColorful?
    elementMouseIsOver.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16):
    elementMouseIsOver.style.backgroundColor = 'red';
});
/**********************************************************************
 * function calls
 **********************************************************************/
gridElementUpdate(); //first call to load the grid on the page

