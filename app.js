let amigos = [];

function adicionarAmigo() {
    let amigoEscolhido = document.querySelector ("input").value;
    if (amigoEscolhido === ""){
        alert ("Por favor, insira um valor válido");
    } else {
        amigos.push(amigoEscolhido);
        limparCampo();
        mostrarAmigosNaLista();
    }
}

function limparCampo() {
    amigoEscolhido = document.querySelector ("input");
    amigoEscolhido.value = "";
}

function mostrarAmigosNaLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 
    for (i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); 
        item.textContent = amigos[i]; 
        listaAmigos.appendChild(item);
    } 
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo adicionado");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    amigos = [];
}
