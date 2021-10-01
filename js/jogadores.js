/*
var jogadores = [];
*/

import { jogadores } from './jogador';
console.log(jogadores);


function exibirJogadores(jogadores) {
    var elemento = "";
    for (i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitorias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }
    let tabelaDeJogadores = document.getElementById("tabelaDeJogadores");
    tabelaDeJogadores.innerHTML = elemento;
}

/*
function adicionarJogador() {
    let jogador = {
        nome: document.getElementById("nome").value,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    }
    jogadores.push(jogador);
    console.log(jogadores)
    document.getElementById("nome").value = "";
    exibirJogadores(jogadores)
}
*/

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadores(jogadores);
}

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos
}