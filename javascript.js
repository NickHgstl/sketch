const container = document.getElementById("container");
const gridBtn =  document.querySelector("#btnGridSize");


gridBtn.addEventListener('click', function(e){
    const gLength = prompt("Grid length?:");
    const gHeight = prompt("Grid height?:");

    makeRows(gLength, gHeight);
    })



function makeRows(gLength, gHeight) {         
  container.style.setProperty('--grid-rows', gLength);
  container.style.setProperty('--grid-cols', gHeight);
  for (c = 0; c < (gLength * gHeight); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows();