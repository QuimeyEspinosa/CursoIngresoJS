/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en crucero nos solicitan:
-nombre
-edad(mayores de 18), 
-sexo("f" o "m") 
-estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.^*/

function mostrar()
{
	var nombrePasajero;

	var edadPasajero;

	var sexoPasajero;

	var estadoCivilPasajero;

	var respuesta;

	var banderaHombreCasadoMasJoven = 0;
	var hombreCasadoMasJovenEdadMin;
	var hombreCasadoMasJovenNombreMin;
	
	var banderaEdadPasajeroMasViejo = 0;
	var edadPasajeroMasViejoMax;
	var sexoPasajeroMasViejoMax;	
	var nombrePasajeroMasViejoMax;

	var contadorTotalMujeres = 0;
	var acumuladorEdadMujeres = 0;
	var contadorMujeresCasadasOViudas = 0;

	var acumuladorEdadHombreSolteros = 0;
	var contadorTotalHombreSolteros = 0;

	var promedioEdadMujeres;
	var promedioEdadHombreSolteros;

	do {

		do {
			nombrePasajero = prompt("Ingrese nombre del pasajero");
		}while(!isNaN(nombrePasajero));
	
		do {
			edadPasajero = prompt("Ingrese edad del pasajero (mayores de 18)");
			edadPasajero = parseInt(edadPasajero);
		}while(isNaN(edadPasajero) || edadPasajero < 18);

		do {
			sexoPasajero = prompt("Ingrese sexo del pasajero 'f' o 'm'");
		}while(!isNaN(sexoPasajero) || sexoPasajero != "f" && sexoPasajero != "m");
	
		do {
			estadoCivilPasajero = prompt("Ingrese estado civil del pasajero 'soltero','casado' o 'viudo'");
		}while(!isNaN(estadoCivilPasajero) || estadoCivilPasajero != "soltero" && estadoCivilPasajero != "casado" && estadoCivilPasajero != "viudo");

		//punto a)
		if(sexoPasajero == "m" && estadoCivilPasajero == "casado" && banderaHombreCasadoMasJoven == 0 || hombreCasadoMasJovenEdadMin > edadPasajero) {
			hombreCasadoMasJovenEdadMin = edadPasajero;
			hombreCasadoMasJovenNombreMin = nombrePasajero;

			banderaHombreCasadoMasJoven++;
		}

		//punto b)
		if(edadPasajero && banderaEdadPasajeroMasViejo == 0 || edadPasajeroMasViejoMax < edadPasajero) {

			edadPasajeroMasViejoMax = edadPasajero;
			sexoPasajeroMasViejoMax = sexoPasajero;
			nombrePasajeroMasViejoMax = nombrePasajero;

			banderaEdadPasajeroMasViejo++;
		}

		//punto c)
		if(sexoPasajero == "f" && (estadoCivilPasajero == "casado" || estadoCivilPasajero == "viudo")) {
			contadorMujeresCasadasOViudas++;
		}
		
		//punto d)
		if(sexoPasajero == "f") {
			acumuladorEdadMujeres += edadPasajero;
			contadorTotalMujeres++;
			/*alert("mujeres: " + contadorTotalMujeres);
			alert("edad mujeres: " + acumuladorEdadMujeres);*/
		}

		//punto e)
		if(sexoPasajero == "m" || estadoCivilPasajero == "soltero") {
			acumuladorEdadHombreSolteros += edadPasajero;
			contadorTotalHombreSolteros++;
			alert("hombres solteros: " + contadorTotalHombreSolteros);
			alert("edad hombres solteros: " + acumuladorEdadHombreSolteros);
		}
			
	  respuesta = confirm("desea continuar?")
	
	}while(respuesta);

	//a)
	document.write("Nombre hombre casado más joven: " + hombreCasadoMasJovenNombreMin + "<br>");

	//b)
	document.write("Nombre del pasajero más viejo: " + nombrePasajeroMasViejoMax + "<br>");
	document.write("Sexo del pasajero más viejo: " + sexoPasajeroMasViejoMax + "<br>");

	//c)
	document.write("Cantidad de mujeres casadas o viudas: " + contadorMujeresCasadasOViudas + "<br>");

	//d)
	promedioEdadMujeres = acumuladorEdadMujeres / contadorTotalMujeres;
	document.write("El promedio de edad de las mujeres es: " + promedioEdadMujeres + "<br>");

	//e)
	promedioEdadHombreSolteros = acumuladorEdadHombreSolteros / contadorTotalHombreSolteros;
	document.write("El promedio de edad de los hombres solteros es: " + promedioEdadHombreSolteros + "<br>");

}
