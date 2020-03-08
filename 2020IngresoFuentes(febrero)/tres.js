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
  alert("tres");

  var nombre;
  var hombreCasadoMasJovenNombreMin;
  var pasajeroMasViejoNombreMax;

  var edad;
  var hombreCasadoMasJovenEdadMin;
  var pasajeroMasViejoEdadMax;

  var sexo;
  var pasajeroMasViejoSexoMax;

  var estadoCivil;

  var respuesta;

  do {
	  do 
	  {
		nombre = prompt("Ingrese un nombre");
	  } while(!isNaN(nombre));

	  do 
	  {
		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
	  } while(isNaN(edad) || edad < 18);

	  do {
		sexo = prompt("Ingrese sexo");
	  }while(!isNaN(sexo) || sexo != "m" && sexo != "f");

	  do {
		estadoCivil = prompt("Ingrese estado civil");
	  } while(!isNaN(estadoCivil) || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");


	  //punto a)
	  if(sexo == "m" && estadoCivil == "casado" && bandera == 0 || hombreCasadoMasJovenEdadMin > edad) 
		{
			hombreCasadoMasJovenEdadMin = edad;
			hombreCasadoMasJovenNombreMin = nombre;			

			bandera++;
		}

		//punto b)
		if(sexo == "m" && bandera == 0 || pasajeroMasViejoEdadMax < edad) 
		{
			pasajeroMasViejoEdadMax = edad;
			pasajeroMasViejoNombreMax = nombre;
			pasajeroMasViejoSexoMax = sexo;

			bandera++;
		}

	  respuesta = confirm("Desea continuar?");
	  
  }while(respuesta);



}
