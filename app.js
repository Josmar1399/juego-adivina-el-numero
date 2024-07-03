 //inicio de codigo, alta de variables
 numeroSecreto = 6;
let numeroDeUsuario = prompt("dame un número:");
/*
monitoreo de ingreso de dato
*/
 console.log (numeroDeUsuario);
/*
condicionante del juego 
*/
 if (numeroDeUsuario == numeroSecreto){
    alert(`acertaste, el número es: ${numeroDeUsuario}`);
    mensajeDeBienvenida = ('Bienvenido a la app');
    alert(mensajeDeBienvenida);
 } else {
    alert ('Lo siento, No acertaste');
 }
 