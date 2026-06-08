let pontos = 0;

function responder(correta){

    const mensagem = document.getElementById("mensagem");
    const pontuacao = document.getElementById("pontuacao");

    if(correta){

        pontos += 25;

        mensagem.innerHTML =
        "✅ Excelente escolha! Você ajudou a preservar os recursos naturais.";

    }else{

        mensagem.innerHTML =
        "❌ Essa decisão pode prejudicar o meio ambiente.";

    }

    pontuacao.innerHTML = "Pontos: " + pontos;

}
