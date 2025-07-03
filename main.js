const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector(".caixa-alternativas");
const caixaresultado = document.querySelector(".caixa-reultado");
const textoreultado = document.querySelector(".texo-reultado");
const perguntas = [
 
    {
        enunciado:'pergunta 1',
        alternativas: [
            "alernativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado:'pergunta 2',
        alternativas: [
            "alernativa 3",
            "alternativa 4"
        ]
    },
    {
        enunciado:'pergunta 3',
        alternativas: [
            "alernativa 5",
            "alternativa 6"
        ]
    },
    {
        enunciado:'pergunta 4',
        alternativas: [
            "alernativa 7",
            "alternativa 8"
        ]
    }
]

let atual = 0;
let perguntaatual;
let hitoriaFinal = " ";

function mostraperguntas(){
    perguntaatual = perguntas[atual]
    caixaperguntas.textContent = perguntaatual.enunciado
    mostrarAlternativa ();
}

function mostrarAlternativa(){
    for( const alternativa of perguntaatual.alternativas ){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
function respostaSelecionada(opcaoSelecionada){
    atual++
    mostraperguntas();
}

mostraperguntas();

console.log(perguntas)