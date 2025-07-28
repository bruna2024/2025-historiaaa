const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector(".caixa-alternativas");
const caixaresultado = document.querySelector(".caixa-reultado");
const textoreultado = document.querySelector(".texo-reultado");
const perguntas = [
 
    {
        enunciado:'pergunta 1',
        alternativas: [
            {
            "alernativas 1",
            "alternativas 2",
    },
    {
    ]

    {}
        enunciado:'pergunta 2',
        alternativas: [
            "alernativas 3",
            "alternativas 4"
        ]
    },
    {
        enunciado:'pergunta 3',
        alternativas: [
            "alernativas 5",
            "alternativas 6"
        ]
    },
    {
        enunciado:'pergunta 4',
        alternativas: [
            "alernativas 7",
            "alternativas 8"
        ]
    }
]

let atual = 0;
let perguntaatual;
let hitoriaFinal = " ";

function mostraperguntas(){
    perguntaatual = perguntas[atual]
    caixaperguntas.textContent = perguntaatual.enunciado
    mostrarAlternativas ();
}

function mostrarAlternativas(){
    if(atual >= perguntas.length)

    for( const alternativas of perguntaatual.alternativas ){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativas))
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcao
    atual++
    mostraperguntas();
}

function mostreResultado (){
    caixaperguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaalternativas.textContent = ";"
}

mostraperguntas();

console.log(perguntas)