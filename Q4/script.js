const rock = 0;
const paper = 1;
const scissor = 2;

let escolha_jogador

function escolha_jg(escolha) {
    const msg = document.getElementById("msg")

    const pedra = document.getElementById("pedra")
    const tesoura = document.getElementById("tesoura")
    const papel = document.getElementById("papel")

    escolha_jogador = escolha

    if(escolha == rock) {
        msg.innerText = "Você escolheu PEDRA"
    } else if (escolha == paper) {
        msg.innerText = "Você escolheu PAPEL"
    } else if (escolha == scissor) {
        msg.innerText = "Você escolheu TESOURA"
    }
}

// Jogo Começo

function jogo() {
    let escolha_bot = parseInt(Math.random()*3)
    alert(escolha_bot)
    
    let msg = ""

    if (escolha_bot === 0) {
        msg = "PEDRA"
    } else if (escolha_bot === 1) {
        msg = "PAPEL"
    } else {
        msg = "TESOURA"
    }

    if(escolha_jogador === null) {
        alert('Escolha uma opção pls <3')
    }

    if((escolha_bot === 0 && escolha_jogador === 1) || (escolha_bot === 2 && escolha_jogador === 0) || (escolha_bot === 1 && escolha_jogador === 2)) {
        alert('Você Venceu! - O Bot escolheu ' + msg)
    } else if (escolha_bot == escolha_jogador) {
        alert('Empate!')
    } else {
        alert('Você Perdeu! - O Bot escolheu ' + msg)
    }
}