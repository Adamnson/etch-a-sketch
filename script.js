//$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##
// DECLARATIONS
const main = document.querySelector(".main");
let boxWidth = 960;
let numberOfSquares = 121;
let sideLength = boxWidth/numberOfSquares - (.96*2);

//$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##
// CONSOLE LOGS
console.log(sideLength);


//$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##
// loop to create a line elment and add squares to the line
// followed by adding line to the '.main' element

for(let i=0; i < numberOfSquares; i++){
    const lineElement = document.createElement('div');
    lineElement.classList.add('line');
    lineElement.id = 'l' + i;
    for(let j=0; j < numberOfSquares; j++) {
        const divEle = document.createElement("div");
        divEle.classList.add('square');
        divEle.id = 'sq' + j;
        divEle.style.height = sideLength + 'px';
        divEle.style.width = sideLength + 'px';
        lineElement.appendChild(divEle);
    }
    main.appendChild(lineElement)
}
//$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##$$##
// dispaly cursor postion 

main.addEventListener('mousemove', (e) => {
    let log = document.querySelector('#log');
    log.innerText = `
    Screen X/Y: (${e.screenX}, ${e.screenY})
    Client X/Y: (${e.clientX}, ${e.clientY})`
    const elementMouseIsOver = document.elementFromPoint(e.clientX, e.clientY);
    console.log(elementMouseIsOver);
    elementMouseIsOver.style.backgroundColor = 'red';
});

