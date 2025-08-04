const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem 14 anos, é estudante do ensino fundamental, estuda no horário da tarde…São 18:00 de uma terça-feira, o sinal bate e você sai do colégio para ir para sua casa, quase chegando em casa você passa por um beco e de repente é atingida por algo na cabeça e desmaia… Você acorda, nua e entende o que aconteceu, depois de viver um trauma. Você descobre que está grávida, e o pai é o seu agressor.",
        
        alternativas: [
            {
                texto: "Contar para sua mãe                        ",
                afirmacao: "Sua mãe diz que a culpa é sua, que ninguém mandou usar roupas curtas e que agora você irá assumir a criança e te levarei ao médico."
            },
            {
                texto: "Contar para sua irmã",
                afirmacao: "Sua irmã te acolhe diz que vocẽ  precisa de encaminhamento psicológico, e pergunta se você deeja tirar o bebê."
            }
        ]
    },
    {
        enunciado: "Você está muito abalada psicologicamente tanto quanto fisicamente",
        alternativas: [
            {
                texto: "Ir ao médico",
                afirmacao: "Sua mãe te leva ao médico e o médico diz que você está grávidade 2 semanas e que está tudo bem com o feto."
            },
            {
                texto: " A psicóloga",
                afirmacao: "No caminho você pensa se você deseja ter o bebê… No hospital você encontra uma psicóloga e a conta o ocorrido, ela diz que está tudo bem e que não é sua culpa e diz que você não precisa ter o bebê se não quiser."
            }
        ]
    },
    {
        enunciado: "Você está em dúvida sobre se terá o bebê ou não.",
        alternativas: [
            {
                texto: "Falar para seu pai que você está pensando em tirar o bebê",
                afirmacao: "De jeito maneira você irá tirar você quer ir para o inferno? não sabe que isso é pecado!?? e digo mais isso aconteceu com você por que você fica por aí andando de roupas curtas, se você matar meu neto, eu te expulso de casa."
            },
            {
                texto: "Falar para sua tia que você está pensando em tirar o bebê",
                afirmacao: "O corpo é seu, se você não se sente bem em ter o bebe, não tenha e além do mais você é muito nova para ter um bebê, ainda mais um bebê fruto de um estrupo, seu mental importa mais e além do mais, você irá criar um filho com que dinheiro?... se você quiser tirar eu te levo em uma clínica." 
            }
        ]
    },
    {
        enunciado: "Chegou o momento decissivo e você está analisando o que seria mais correto",
        alternativas: [
            {
                texto: "Ter o bebê",
                afirmacao: "Parabéns é uma menina! você teve o bebê, demorou 3 anos para que você conseguisse aceitar a sua filha, você parou de estudar para cuidar de sua filha e trabalha de domingo a domingo, e seus pais ajudam financeiramente com a bebê, você se pega pensando quando irá sair da casa de seus pais, já que ainda depende financeiramente deles… As vezes quando você olha para sua filha lembra do ocorrido mas está aprendendo a lidar com isso."
            },
            {
                texto: "Tirar o bebê",
                afirmacao: "Sua tia te levou em uma clinica de aborto, você se sente um pouco mal por tirar o bebê mas é o melhor a se fazer… 3 anos se passa e você termina o ensino médio e irá ingressar no mercado de trabalho, e se inscrever para sua faculdade dos sonhos e finalmente poder sair da casa de seus pais, e atualmente você faz terapia e está lidando muito bem com os acontecimentos do passado."
            }
        ]
    }
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent= ""
    mostraAlternativas();
}

function mostraAlternativas(){
    for( const alternativa of perguntaAtual.alternativas ){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " "
    atual++
    mostraPergunta();
}

function mostreResultado(){
    caixaPerguntas.textContent = " Como termina a sua historia... ";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

console.log(perguntas)
