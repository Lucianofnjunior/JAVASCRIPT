const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    //pegando os valores dos inputs
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);//o false equivale ao isValid da função.
        return;
    }
    
    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getIMC(peso, altura)
    const nivel = getNivelIMC(imc)
    console.log(imc, nivel)
    
    const msg = `Seu IMC é ${imc} (${nivel})`
    setResultado(msg, true)
});

//Funções

function getNivelIMC (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    //Como temos o return, não precisamos de Elso if, pois se o if for verdadeiro a fução para de ser lida a partir do return.
    if (imc >= 39.9) {
        return nivel[5];
    }
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//Função que cria Parágrafos
function criaP () {
    const p = document.createElement('p');//Criando um parágrafo com JS
    return p;
    //p.classList.add('paragrafo-resultado');//Criando uma classe para o p através do JS
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ``;
    p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p); //Adicionando o parágrafo à div.
}
