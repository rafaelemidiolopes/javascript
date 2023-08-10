"use strict"
const result = document.querySelector('#resultado')



function inserir(valor) {
    document.querySelector('#resultado').innerText += valor;
}

function clean () {
    resultado.innerHTML = ''
}

function backspace () {
    if (resultado.textContent) {
        const result = document.getElementById('resultado').innerHTML

        resultado.innerHTML = result.substring(0, result.length -1)

    }
}

const igual = () => {
    if(resultado.textContent != 'Erro') {
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)

        const histórico = document.getElementById('resultado').innerHTML
        document.getElementById('calculator').innerHTML 
    }


}

while (resultado.textContent) {
    document.getElementById('calculator').innerHTML = (resultado.innerHTML)

}