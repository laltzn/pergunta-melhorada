const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você começa um projeto social para ajudar a comunidade local com um novo programa de mentoria para jovens. Qual é seu primeiro passo?",
        alternativas: [
            {
                texto: "Organizar uma reunião com os líderes da comunidade para discutir o projeto.",
                afirmacao: "Estabeleceu uma base sólida para o projeto, garantindo apoio e colaboração."
            },
            {
                texto: "Criar um plano detalhado e começar a divulgação nas redes sociais.",
                afirmacao: "Começou a atrair atenção e recrutar mentores e jovens para participar do programa."
            }
        ]
    },
    {
        enunciado: "Durante o desenvolvimento do projeto, você percebe que muitos jovens estão interessados, mas poucos têm acesso a recursos necessários. O que você faz?",
        alternativas: [
            {
                texto: "Cria uma campanha de arrecadação de fundos para fornecer os recursos necessários.",
                afirmacao: "Garantiu que todos os jovens tivessem acesso aos recursos e materiais necessários para seu desenvolvimento."
            },
            {
                texto: "Colabora com empresas locais para obter patrocínios e doações.",
                afirmacao: "Conseguiu parcerias que ajudaram a financiar o projeto e a oferecer oportunidades adicionais para os jovens."
            }
        ]
    },
    {
        enunciado: "Você realiza um evento para celebrar o sucesso do programa. Qual é a principal atividade desse evento?",
        alternativas: [
            {
                texto: "Organizar uma feira onde os jovens podem mostrar suas conquistas e projetos.",
                afirmacao: "Proporcionou uma plataforma para os jovens exibirem suas habilidades e receberem reconhecimento."
            },
            {
                texto: "Realizar um painel de discussão com especialistas sobre o impacto do programa na comunidade.",
                afirmacao: "Fomentou uma reflexão sobre o sucesso do projeto e as futuras direções para melhorar a comunidade."
            }
        ]
    },
    {
        enunciado: "Após o evento, você recebe feedback de participantes e mentores. Qual é sua abordagem para melhorar o projeto?",
        alternativas: [
            {
                texto: "Analisa o feedback e ajusta o programa com base nas sugestões recebidas.",
                afirmacao: "Aprimorou o projeto de acordo com as necessidades e expectativas da comunidade."
            },
            {
                texto: "Mantém o projeto como está, focando em expandir para novas áreas e mais jovens.",
                afirmacao: "Decidiu manter o formato atual e aumentar o alcance do projeto para impactar ainda mais vidas."
            }
        ]
    },
    {
        enunciado: "Você está pensando em criar um novo projeto para complementar o programa atual. Qual é a sua ideia inicial?",
        alternativas: [
            {
                texto: "Desenvolver um programa de capacitação profissional para jovens adultos.",
                afirmacao: "Expandiu o impacto do projeto para oferecer suporte contínuo à comunidade em diferentes estágios da vida."
            },
            {
                texto: "Iniciar um programa de voluntariado para engajar mais membros da comunidade.",
                afirmacao: "Fomentou uma maior participação comunitária e criou novas oportunidades de colaboração e apoio."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
