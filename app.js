//*Variables
let numeroSecreto;
let intentos;
// console.log(numeroSecreto);
let listaNumerosGenerados = [];
let numeroMaximo = 10;

//* Función para agregar y modificar texto 
function asignarTextoElemento(elemento, mensaje){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = mensaje;
    return;
}

//* Función para verificar los intentos
function verificarIntento(){
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value); //? El .value es para obtener solo el valor
    if (numeroDelUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        //* Activar el botón de Nuevo Juego
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //* El usuario no acertó
        if (numeroDelUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos ++;
        limpiarInput();
    }

    return;
}

//* Función para generar el número secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo ) + 1;

    // console.log(numeroGenerado);
    // console.log(listaNumerosGenerados);

    //? Si ya generamos todos los números de la lista
    if(listaNumerosGenerados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        // ? Si el número generado está en la lista
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//* Función para limpiar el input
function limpiarInput(){
    let valorInput = document.querySelector('#valorUsuario').value = '';
}

//* Función 
function condicionesIniciales(){
    //* LLamando a la función para agregar texto
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //* Generando un número secreto
    numeroSecreto = generarNumeroSecreto();
    //* Darle el valor de intentos a 1
    intentos = 1;
}

//* Función para reiniciar el juego
function reiniciarJuego(){
    //? Limpiar el input
    limpiarInput();

    //? Indicar mensaje de 'Indica un número del 1 al 10'
    //? Generar un número aleatorio
    //? Reiniciar los intentos
    condicionesIniciales();

    //? Deshabilitar el botón de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

//* Llamando a la función con las condiciones iniciales
condicionesIniciales()