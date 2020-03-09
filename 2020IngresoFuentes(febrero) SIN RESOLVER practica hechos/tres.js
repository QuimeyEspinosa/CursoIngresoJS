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

	do {

		do {
			nombrePasajero = prompt("Ingrese nombre del pasajero");
		}while(!isNaN(nombrePasajero));
	
		do {
			edadPasajero = prompt("Ingrese edad del pasajero");
		}while(isNaN(edadPasajero) || edadPasajero < 18);

		do {
			sexoPasajero = prompt("Ingrese sexo del pasajero");
		}while(!isNaN(sexoPasajero) || sexoPasajero != "f" && sexoPasajero != "m");
	
		do {
			estadoCivilPasajero = prompt("Ingrese estado civil del pasajero 'soltero' 'casado' o 'viudo'");
		}while(!isNaN(estadoCivilPasajero) || estadoCivilPasajero != "soltero" && estadoCivilPasajero != "casado" && estadoCivilPasajero != "viudo");

		if(sexoPasajero == "m" && estadoCivilPasajero == "casado" && banderaHombreCasadoMasJoven == 0 || hombreCasadoMasJovenEdadMin > edadPasajero) {
			hombreCasadoMasJovenEdadMin = edadPasajero;
			hombreCasadoMasJovenNombreMin = nombrePasajero;

			banderaHombreCasadoMasJoven++;
		}
	
	  respuesta = confirm("desea continuar?")
	
	}while(respuesta);

	document.write("Nombre hombre casado más joven: " + hombreCasadoMasJovenNombreMin + "<br>");

}
