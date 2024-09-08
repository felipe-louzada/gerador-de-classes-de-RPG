function gerarClasse() {
    let resultados = document.getElementById("resultado");
    resultados.innerHTML = "";
  
    let classeAleatoria = classesRPG[Math.floor(Math.random() * classesRPG.length)];
  
    let itemResultado = document.createElement("div");
    itemResultado.classList.add("item-resultado");
  
    itemResultado.innerHTML = `
        <h2>${classeAleatoria.nome}</h2>
        <p class="descricao-meta">${classeAleatoria.descricao}</p>
        <p><strong>Habilidades:</strong> ${classeAleatoria.habilidades}</p>
    `;
  
    resultados.appendChild(itemResultado);
}