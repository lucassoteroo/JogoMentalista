var numeroSecreto = parseInt(Math.random() * 101);
var elementoResultado = document.getElementById("resultado");
var elementoTentativas = document.getElementById("tentativas");
var botao = document.getElementById("button");
var tentativas = 5;
console.log(numeroSecreto);

function chutar() {
    let chute = parseInt(document.getElementById("valor").value);
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!";
        elementoTentativas.innerHTML = "Tentativas: " + tentativas;
        botao.disabled = true;
    } else if (chute > numeroSecreto) {
        elementoResultado.innerHTML = "O número é menor que o chute";
        tentativas = tentativas - 1;
        elementoTentativas.innerHTML = "Tentativas: " + tentativas;
        document.getElementById("valor").value = "";
    } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "O número é maior que o chute";
        tentativas = tentativas - 1;
        elementoTentativas.innerHTML = "Tentativas: " + tentativas;
        document.getElementById("valor").value = "";
    }
    if (tentativas == 0) {
        elementoResultado.innerHTML = "Acabaram suas tentativas";
        botao.disabled = "true";
    } else if (chute > 100 || chute < 0) {
        alert("Valor Inválido");
    }
}

function reiniciar() {
    tentativas = 5;
    numeroSecreto = parseInt(Math.random() * 101);
    document.getElementById("valor").value = "";
    botao.disabled = false;
    elementoResultado.innerHTML = "Jogo Reiniciado";
    elementoTentativas.innerHTML = "Tentativas: " + tentativas;
    document.getElementById("reiniciar"), disabled = true;
}