const palavra = "OI";
const container = document.getElementsByClassName("palavra-container")[0];

for (let i = 0; i < palavra.length; i++) {
    const span = document.createElement("span");
    span.setAttribute("class", "letra");
    span.textContent = "____";
    container.appendChild(span);
    console.log(palavra[i]);
}

