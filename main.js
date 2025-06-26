const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa.alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultos = document.querySelector(".texto-resultado");

const Perguntas = [
{
    enuciado:"perguntas 1",
    alternativas:[
        "alternativa 1",
        "alternativa 2"
    ]
},
{
    enuciado:"perguntas 2",
    alternativas:[
        "alternativa 3",
        "alternativa 4"
    ]
},
{
    enuciado:"perguntas 3",
    alternativas:[
        "alternativa 5",
        "alternativa 6"
    ]
}
]

let atual =0;
let PerguntaAtual;

function mostraPergunta(){
    PerguntaAtual = Perguntas[atual]
    caixaPerguntas.textContent = PerguntaAtual.enuciado
    mostraAlternativas()
}
function mostraAlternativas(){
    for( const alternativa of PerguntaAtual.alternativas){
        const botaoAlternativa= document.creatElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativa)
    }
}

mostraPergunta();

console.log(caixaPrincipal)