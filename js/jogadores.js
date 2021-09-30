var jogadores = [];
var dados = [
    vitorias = 0,
    empates = 0,
    derrotas = 0,
    pontos = 0,
]

/*
function exibirJogadores(jogadores) {
    var elemento = "";
    for (i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i] + "</td>";
        elemento += "<td>" + dados[i][0] + "</td>";
        elemento += "<td>" + dados[1] + "</td>";
        elemento += "<td>" + dados[2] + "</td>";
        elemento += "<td>" + dados[3] + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }
    let tabelaDeJogadores = document.getElementById("tabelaDeJogadores");
    tabelaDeJogadores.innerHTML = elemento;
}
*/

function adicionarJogador() {
    var vitorias = 0;
    var empates = 0;
    var derrotas = 0;
    var pontos = 0;
    let jogador = document.getElementById("nome").value;
    jogadores.push(jogador, vitorias, empates, derrotas, pontos);
    console.log(jogadores)
    document.getElementById("nome").value = "";
    /* exibirJogadores(jogadores) */
}

/*
function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.dados[0]++;
    jogador.dados[3] = calculaPontos(dados);
    exibeJogadores(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.dados[1]++;
    jogador.dados[3] = calculaPontos(dados);
    exibeJogadores(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.dados[2]++;
    exibeJogadores(jogadores);
}

function calculaPontos(dados) {
    var pontos = (dados[0] * 3) + dados[1];
    return pontos
}
*/