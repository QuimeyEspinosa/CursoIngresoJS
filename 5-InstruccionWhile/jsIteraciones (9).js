function mostrar()
{
    // declarar variables
	var contador = 0;
	var respuesta = true;
	var minimo;
	var maximo;
	var primeraVez = true;


	while(respuesta != 'no') 
	{
		do {
			numero = prompt ("Ingrese un numero");
			numero = parseInt (numero);
		} while (isNaN(numero));

		if(PrimeraVez) {
			PrimeraVez = false;
			minimo = numero;
			maximo = numero;
		}else{
			if (numero < min) {
				minimo = numero;
			}
		}
		
		respuesta = confirm("Desea continuar?");

	}






/*
	while(respuesta) {
		var numero = prompt ("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)) {
			numero = prompt("Error: Ingrese un numero valido");
			numero = parseInt(numero);

		}

		if (primeraVez) {
			primeraVez = false;

			maximo = numero;
			minimo = numero;
		} else {

		    if (numero > maximo) {
			    maximo = numero;

		    }

		    if (numero < minimo) {
			    minimo = numero

		    }

		}


		respuesta = confirm("Desea continuar?");
		
	
	} */




}//FIN DE LA FUNCIÓN