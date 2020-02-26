function mostrar()
{

	var contador=0;
	//declarar contadores y variables 

	var respuesta = true;
	
	var sumaPositivos = 0;
	var contadorPositivos = 0;
	var promedioPositivos;

	var sumaNegativos = 0;
	var contadorNegativos = 0;
	var promedioNegativos;

	var contadorPares = 0;
	var contadorCeros = 0;

	var diferenciaPositivosYNegativos;

	var numero;


	 /*while(respuesta) {
		var numero = prompt ("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)) {
			numero = prompt("Error: Ingrese un numero valido");
			numero = parseInt(numero);

		}*/

	do {
				
		do {
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);

			} while (isNaN(numero));

			if (numero > 0) {
				//punto 2
				sumaPositivos += numero;
				//punto 3
				contadorPositivos++;
					
			} else if (numero < 0) {
				//punto 1
				sumaNegativos += numero;
				//punto 4
				contadorNegativos++; 
			} else {
				//punto 5
				contadorCeros++;
			}
				//punto 6
			if (numero % 2 == 0) {
					contadorPares++;
			}
				
			respuesta = confirm ("Desea continuar?");
			
		} while (respuesta);



	 //} //fin while sin do

	//punto 7
	promedioPositivos = sumaPositivos / contadorPositivos;

	//punto 8
	promedioNegativos = sumaNegativos / contadorNegativos;

	//punto 9
	diferenciaPositivosYNegativos = sumaPositivos - sumaNegativos;


	//Mostrar en document.write
	document.write("Suma de positivos: " + sumaPositivos + "<br >");
	document.write("Cantidad de positivos: " + contadorPositivos + "<br >");
	document.write("Promedio de positivos: " + promedioPositivos + "<br >");

	document.write("Suma de Negativos: " + sumaNegativos + "<br >");
	document.write("Cantidad de Negativos: " + contadorNegativos + "<br >");
	document.write("Promedio de Negativos: " + promedioNegativos + "<br >");

	document.write("Cantidad de pares: " + contadorPares + "<br >");
	document.write("Cantidad de Ceros: " + contadorCeros + "<br >");

	document.write("Diferencia: " + diferenciaPositivosYNegativos + "<br >");


}//FIN DE LA FUNCIÓN