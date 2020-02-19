function mostrar()
{

	var contador=0;
	var acumulador=0;
	var iteraciones = 5;

	while (contador < iteraciones) {
        var numero = NaN;

		while (isNaN(numero)) {
			numero = prompt("Ingrese un número");
			
		    numero = parseInt(numero);
		}
	    
		contador++;

		acumulador += numero;

	}


	//var contador = 0;
	//var acumulador = 0;

	//while (contador < 5) {
		//var numero = prompt ("ingrese un numero");

		//numero = parseInt(numero);

		//while(isNaN(numero)) {
			//numero = prompt("Error: Ingrese un numero valido");

			//numero = parseInt(numero);

		//}

		//contador++;

		//acumulador += numero;
	//}


document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN