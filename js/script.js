let spesa = ['pasta','carne','pesce','biscotti'];

let contatore = 0;

const listContainerEl = document.getElementById("list-container");

while (contatore !== spesa.length ) {
    let item = document.createElement("li");
    item.innerHTML = spesa[contatore];
    listContainerEl.appendChild(item);
    contatore ++;
}