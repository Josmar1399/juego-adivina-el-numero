 //inicio de codigo, alta de variables
 let numeroSecreto = 6;
let numeroDeUsuario = 0;
let intentos = 1;
let palabraIntentos = 'intento'
//condicionante del juego 

while (numeroDeUsuario != numeroSecreto){
 numeroDeUsuario = prompt("dame un número:");
 console.log (numeroDeUsuario);
 
      if (numeroDeUsuario == numeroSecreto){
         alert(`acertaste, el número es: ${numeroDeUsuario}. acertaste en ${intentos} ${palabraIntentos}`);
         mensajeDeBienvenida = ('Bienvenido a la app');
         alert(mensajeDeBienvenida);
      } else {
         if (numeroDeUsuario > numeroSecreto) {
            alert ('el número es menor');
         }
            else {
            alert ('el número es mayor');
            }
      }
      intentos = intentos + 1; 
      palabraIntentos = 'intentos'
      if (intentos > 3){
         alert ('No te quedan mas oportunidades');
         break
      }
}