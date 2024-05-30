let random = Math.floor(Math.random() * 100) + 1;

let numeroEntrada = document.getElementById("numeroEntrada");

let mensaje = document.getElementById("mensaje");

let intento = document.getElementById("intentos")
let intentos = 0;

function resultado() {

    let numeroIngresado = parseInt(numeroEntrada.value);
    intentos++
    intento.textContent = intentos;
    intento.style.color = "blue";

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent= "El dato ingresado debe ser un número de 1 al 100";
        mensaje.style.color = "black";
        return
    };
    
    if(numeroIngresado === random) {
        mensaje.textContent= "Felicidades has adivinado el número";
        mensaje.style.color = "green";
        numeroEntrada.disable = true;
    } else if (numeroIngresado < random) {
        mensaje.textContent= "El número es mayor al que dijiste";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent= "El número es menor al que dijiste";
        mensaje.style.color = "red"; 
    };

};    
