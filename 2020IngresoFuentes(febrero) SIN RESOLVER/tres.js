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

	do {

		do {
			nombrePasajero = prompt("Ingrese nomrbe del pasajero");
		}while(!isNaN(nombrePasajero));
	
		do {
			edadPasajero = prompt("Ingrese edad del pasajero");
		}while(isNaN(edadPasajero) || pesoIngrediente < 18);
	
		do {
			estadoCivilPasajero = prompt("Ingrese estado civil del pasajero 'soltero' 'casado' o 'viudo'");
		}while(!isNaN(estadoCivilPasajero) || estadoCivilPasajero != "soltero" && estadoCivilPasajero != "casado" && estadoCivilPasajero != "viudo");
	
		
	
		respuesta = confirm("desea continuar?")
	
	  }while(respuesta);
}
