const missoes = [

{
titulo: "💧 Missão 1 - Água",
pergunta: "Qual atitude ajuda a economizar água?",
opcao1: "Instalar irrigação inteligente",
opcao2: "Desperdiçar água",
correta: 1
},

{
titulo: "🌱 Missão 2 - Solo",
pergunta: "Qual prática protege o solo?",
opcao1: "Rotação de culturas",
opcao2: "Plantar sempre a mesma cultura",
correta: 1
},

{
titulo: "🌳 Missão 3 - Floresta",
pergunta: "O que ajuda a preservar os rios?",
opcao1: "Preservar a mata ciliar",
opcao2: "Desmatar as margens",
correta: 1
},

{
titulo: "🚁 Missão 4 - Tecnologia",
pergunta: "Qual tecnologia auxilia na agricultura sustentável?",
opcao1: "Drones e sensores",
opcao2: "Falta de monitoramento",
correta: 1
}

];

let fase = 0;
let pontos = 0;

const titulo = document.getElementById("titulo");
const pergunta = document.getElementById("pergunta");
const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");
const mensagem = document.getElementById("mensagem");
const pontuacao = document.getElementById("pontuacao");
const progresso = document.getElementById("progresso");
const barra = document.getElementById("barraProgresso");
function carregarMissao(){

    titulo.innerHTML = missoes[fase].titulo;
    pergunta.innerHTML = missoes[fase].pergunta;

    opcao1.innerHTML = missoes[fase].opcao1;
    opcao2.innerHTML = missoes[fase].opcao2;

    progresso.innerHTML =
    "Missão " + (fase + 1) + " de " + missoes.length;
    barra.style.width =
((fase + 1) / missoes.length) * 100 + "%";
}

function responder(opcao){

    if(opcao === missoes[fase].correta){

        pontos += 25;
        mensagem.innerHTML =
        "✅ Excelente escolha!";

    }else{

        mensagem.innerHTML =
        "❌ Escolha pouco sustentável.";
    }

    pontuacao.innerHTML =
    "Pontos: " + pontos;

    fase++;

    if(fase < missoes.length){

        setTimeout(() => {

            mensagem.innerHTML = "";
            carregarMissao();

        }, 1000);

    }else{

        finalizarJogo();
    }
}

function finalizarJogo(){

    let classificacao = "";

    if(pontos === 100){
        classificacao = "🌟 Guardião da Sustentabilidade";
    }
    else if(pontos >= 75){
        classificacao = "🌱 Produtor Consciente";
    }
    else if(pontos >= 50){
        classificacao = "🚜 Agricultor em Aprendizado";
    }
    else{
        classificacao = "📚 Precisa aprender mais";
    }

    document.querySelector(".container").innerHTML = `
        <h2>Fim do Jogo</h2>
        <h3>${classificacao}</h3>
        <p>Pontuação Final: ${pontos}</p>
        <button onclick="location.reload()">
            Jogar Novamente
        </button>
    `;
}

opcao1.onclick = () => responder(1);
opcao2.onclick = () => responder(2);

carregarMissao();
