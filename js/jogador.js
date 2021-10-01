function adicionarJogador() {
    var jogadores = [];
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
    export default jogadores;
}