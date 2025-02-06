let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        limpiarCaja();
        intentos++;
    }
    
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
   }

}


function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    // generar el numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    // desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true)
}

condicionesIniciales();