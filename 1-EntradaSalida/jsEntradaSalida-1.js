//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
/*Pedir los siguientes datos:
 nombre del pasajero;
 edad (mayores de 18);
 sexo ("f" o "m"); 
 pasaje ("urbano", "nacional" o "internacional");

a) El nombre del hombre con pasaje nacional más joven.

b) El sexo y pasaje del pasajero/a más viejo.

c) La cantidad de mujeres con pasaje urbano o nacional.

d) El promedio de edad entre las mujeres.

e) El promedio de edad entre los hombres con pasaje internacional.*/

function mostrar ()
{
  
  var nombre;

  var edad;
  var edadMax;
  var edadMin;

  var primeraVez = true;

  var hombres;
  var edadMinimaHombreNacional;
  var primeraVezHombreNacional = true;
  var nombreMinimaHombreNacional;
  var acumuladorHombresInternacional;
  var contadorHombresInternacional;
  var promedioHombresInternacional;
  var contadorHombres;
  var promedioHombres;

  var sexo;
  var sexoMinimo;

  var mujeres;
  var contadorMujeresUrbanoNacional = 0;
  var acumuladorMujeres = 0;
  var contadorMujeres = 0;
  var promedioMujeres;

  var pasaje;
  var pasajeMinimo;

  var respuesta;

  do {

    do {
        edad = prompt("Ingrese edad");
        edad = parseInt(edad);
    } while (isNaN(edad) || edad < 18);

    do {
        sexo= prompt("Ingrese sexo");
    } while (sexo != "m" && sexo != "f");

    do {
        pasaje = prompt("Ingrese pasaje");
    } while ((pasaje != "urbano" && pasaje != "nacional" != "internacional"));

    //calculos:

    //punto A)
    if(sexo =="m" && pasaje == "nacional") {
      
       if(primeraVezHombreNacional) {
         primeraVezHombreNacional = false;
         edadMinimaHombreNacional = edad;
         nombreMinimaHombreNacional = nombre;
       } else if (edad < edadMinimaHombreNacional) {
          edadMinimaHombreNacional = edad;
          nombreMinimaHombreNacional = nombre;
       }
    }

    //punto B)
    if (primeraVez) {
      primeraVez = false;

      edadMin = edad;
      sexoMinimo = sexo;
      pasajeMinimo = pasaje;
    } else if (edad < edadMin) {
      edadMin = edad;
      sexoMinimo = sexo;
      pasajeMinimo = pasaje;
    }

    //punto C)

    if (sexo == "f" && (pasaje == "nacional" || pasaje == "urbano")) {
       contadorMujeresUrbanoNacional++;
    }

    //punto D)
    if (sexo == "f") {
      acumuladorMujeres += edad;
      contadorMujeres++;
    }

    //punto E)
    if (sexo == "m" && pasaje == "internacional") {
      acumuladorHombresInternacional += edad;
      contadorHombresInternacional++;
    }

    respuesta = confirm("Desea continuar?");


  } while (respuesta);

  //promedio mujeres

  if(contadorMujeres > 0) {
    promedioMujeres = mujeres /contadorMujeres;
  } else {
    promedioMujeres = 0;
  }

  if(contadorHombres > 0) {
    promedioHombres = hombres / contadorHombres;
  } else {
    promedioHombres = 0;
  }

  


  /*nombre = prompt("Ingrese un nombre");
  edad = prompt("Ingrese una edad");
  sexo = prompt("Ingrese un sexo");
  pasaje = prompt("Ingrese un pasaje");

  while(isNaN(nombre)) {
      nombre = prompt("Ingrese un nombre válido")
  }

  while(isNaN(edad) || edad < 18) {
      edad = prompt("Ingrese una edad válida");
      edad = parseInt(edad);
  }

  while(isNaN(sexo) || sexo != "m" && sexo != "f") {
      sexo = prompt("Ingrese un sexo válido");
  }

  while(isNaN(pasaje) || pasaje != "urbano" || pasaje != "nacional" || pasaje != "internacional") {
      pasaje = prompt("Ingrese un pasaje válido");
  }

  //punto A)
  if(sexo == "m" && pasaje == "nacional") {

      if (isNaN(edadMin)) {
          edadMin = edad;
      } else if (edadMin = edad) {
          edadMin = edad;
      }

  }

  //punto B)
  if(isNaN(edadMax) || edadMax > edad) {
      edad = edadMax;
      
  }

  //punto C)
  if(sexo == "f" && pasaje == "urbano" || pasaje == "nacional") {
      cantidadMujeres++;
  } */
    


}