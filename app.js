 //inicio de codigo, alta de variables
let numeroSecreto = Math.floor(Math.random()*10+1); // se agregó número aleatorio
let numeroDeUsuario = 0;
let intentos = 1;
// let palabraIntentos = 'intento'; (se eliminó la variable por operador ternario)
let maximoDeIntentos = 3;
//condicionante del juego 

while (numeroDeUsuario != numeroSecreto){
 numeroDeUsuario = parseInt (prompt("dame un número entre 1 y 10:"));
 console.log (numeroDeUsuario);
 
      if (numeroDeUsuario == numeroSecreto){
         alert(`acertaste, el número es: ${numeroDeUsuario}. acertaste en ${intentos} ${intentos ==1 ? 'vez' : 'veces' }`);
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
      // intentos = intentos + 1; 
      intentos ++
      // palabraIntentos = 'intentos' (se eliminó la variable por operador ternario)
      if (intentos > maximoDeIntentos){
         alert ('No te quedan mas oportunidades');
         break
      }
}