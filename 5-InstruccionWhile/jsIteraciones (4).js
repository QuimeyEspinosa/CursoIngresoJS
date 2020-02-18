function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while(numero < 0 || numero > 9 || isNaN(numero)) {
		numero = prompt ("ingrese un número válido");

		numero = parseInt(numero);

		console.log(numero);
		console.log(isNaN(numero));
	}


}//FIN DE LA FUNCIÓN