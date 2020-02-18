/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
  
  numeroSecreto = Math.random(0,2);

		//alert(numeroSecreto );
  
    


}

function verificar()
{
  var numeroSecreto;
  var numero;
  var contadorIntentos;

  numeroSecreto = Math.random(0,5);

  numero = document.getElementById("numero").value;

  contadorIntentos = document.getElementById("intentos").value;
  

  if(numero == numeroSecreto ) {
		
		alert("Ganaste! Y en solo " + contadorIntentos + " intentos");
		
		} else {
		
			if(numero < numeroSecreto ) {
				
			alert("falta para llegar al número secreto") ;
		
			} else {
		
				alert("se pasó del número secreto");
			}
		
		}	
}