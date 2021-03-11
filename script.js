// 1° passo - capturar os campos
// 2° passo - fazer o sorteio baseado nos valores dos campos
// 3° passo - imprimir o resultado
// 4° passo - limpar os campos


// 1° passo - capturar os campos
const qtdResultadosInput = document.getElementById('qtdResultados');
const numeroInicialInput = document.getElementById('inBetweenNumber');
const numeroFinalInput = document.getElementById('andNumber');
const buttonSortear = document.getElementById('buttonSortear');

const buttonLimpar = document.getElementById('buttonLimpar');
const buttonVoltar = document.getElementById('voltar')

const painelResultado = document.getElementById('painelResultado');
const resultado = document.getElementById('resultado');

console.log(qtdResultadosInput);
console.log(numeroInicialInput);
console.log(numeroFinalInput);
console.log(buttonSortear);
console.log(buttonLimpar);

//2° passo - fazer o sorteio baseado nos valores dos campos
//a) gerar número aleatório
//b) limitar - adicionar um 'range' e gerar um numero
//   dentro de um intervalo de número
//c) fazer isso uma certa quantidade de vezes (utilizar o qtdResultadosInput)

function sortearNumeros() {
    const qtdResultados = Number.parseInt(qtdResultadosInput.value);
    const numeroInicial = Number.parseInt(numeroInicialInput.value);
    const numeroFinal = Number.parseInt(numeroFinalInput.value);


    //3° passo - imprimir o resultado
    resultado.innerText = ''
    for(let i = 0; i < qtdResultados; i++) {
        const randomNumber = gerarNumeroAleatorio(numeroInicial, numeroFinal);
        
        if(i < qtdResultados - 1) {
            resultado.innerText += randomNumber + '-';
        } else{
            resultado.innerText += randomNumber;
        }
        
    }

    console.log(qtdResultados)
    console.log(numeroInicial)
    console.log(numeroFinal)

    painelResultado.classList.add('mostrarResultado');
}



function gerarNumeroAleatorio(numeroInicial, numeroFinal){
    return (Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial);
}

buttonSortear.addEventListener('click', sortearNumeros);

function limparCampos() {
    qtdResultadosInput.value = '';
    numeroInicialInput.value = '';
    numeroFinalInput.value = '';
}

buttonLimpar.addEventListener('click', limparCampos);

function Voltar() {
    painelResultado.classList.remove('mostrarResultado');
}

buttonVoltar.addEventListener('click', Voltar);
