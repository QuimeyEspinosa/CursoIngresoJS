/*Debemos lograr tomar un nombre con 'prompt'
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
  var dato

  //prompt devuelve un valor
  dato = prompt ("Ingrese un dato");

  alert (dato);
}

/*Ejercicio 7 
Enunciado:
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10), 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. */

function mostrar()
{
    var contador = 0
    var notaMin;

    var acumuladorNotas = 0;
    var contadorNotas = 0;
    var promedioNotas;

    var primeraVez = true

    var sexoMinimo;

    var acumuladorVarones
    var contadorVarones = 0;
    

    while(contador < 5) {
        contador++;

        do {
            var nota = prompt("Ingrese una nota");
            nota = parseInt(nota);

        } while(isNaN(nota) || nota < 0 || nota > 10);

        do{
            var sexo = prompt("Ingrese sexo");
            sexo = sexo.toLowerCase();

        } while(sexo != "m" && sexo != "f");

        //punto a)1) acumular notas para luego promediar
        if(nota > 0) {
            acumuladorNotas += nota;
            contadorNotas++;
        }

        //punto b) nota minima y sexo de esa persona
        if (primeraVez) {
            primeraVez = false;
      
            notaMin = nota;
            sexoMinimo = sexo;

        } else if (nota < notaMin) {
            notaMin = nota;
            sexoMaximo = sexo;
        }

        //punto c) cantidad de varones con nota mayor a 6
        if(nota >= 6 && sexo == "m") {
            contadorVarones++;
        }
    
    }
    
    //punto a)2) promedio notas
    promedioNotas = acumuladorNotas / contadorNotas;

    alert("El promedio de notas es: " + promedioNotas);
    alert("La nota mínima es " + notaMin + " y le pertenece al sexo " + sexoMinimo);
    alert("La cantidad de varones que se sacaron más de 6 es: " + contadorVarones);

}

//--------------------------------------------------------------------------------------------------------

/*Ejercicio 8
Enunciado:
Realizar el algoritmo que permita iterar el ingreso de dos datos,
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo. */

function mostrar()
{
    var respuesta;
    var primeraVez = true;

    var letra;
    var letraMax;
    var letraMin;

    var numero;
    var numeroMax;
    var numeroMin;

    var cantidadNumerosPares = 0;
    var cantidadNumerosImpares = 0;
    var cantidadCeros = 0;

    var acumuladorPositivos = 0;
    var contadorNumerosPositivos = 0;
    var promedioPositivos;

    var acumuladorNegativos = 0;

    do {

        letra = prompt("Ingrese una letra");

        numero = prompt("Ingrese un número");
        numero= parseInt(numero);

        while(isNaN(numero) || numero < -100 || numero > 100) {
            numero = prompt("Error! Ingrese un número válido");
            numero = parseInt(numero);
        }

        //para validar letras recordar poner "!" previo a isNaN
        while(!isNaN(letra)) {
            letra = prompt("Error! Ingrese una letra válida");
        }

        //punto a) numeros pares
        if(numero % 2 == 0) {
            cantidadNumerosPares++;

        //punto b) numeros impares
        } else if(numero !=0 ) {
            cantidadNumerosImpares++;

        //punto c) cantidad de ceros
        } else {
            cantidadCeros++;
        }

        //punto d) acumular positivos para promediar
        if(numero > 0) {
            acumuladorPositivos += numero;
            contadorNumerosPositivos++;

        //punto e) suma de todos los negativos
        } else if(numero < 0) {
            acumuladorNegativos += numero;
        }

        //punto f) numero maximo y minimo, letra maxima y minima
        if(primeraVez) {
            primeraVez = false;

            numeroMax = numero;
            numeroMin = numero;

            letraMin = letra;
            letraMax = letra;
        } else {

            if(numero < numeroMax) {
                numeroMax = numero;
                letraMax = letra;
            } else if(numero > numeroMin) {
                numeroMin = numero;
                letraMax = letra;
            }
        }
    
        respuesta = confirm("Desea continuar?");

    } while(respuesta);

    document.write("Cantidad de números pares: " + cantidadNumerosPares + "<br>");
    document.write("Cantidad de números impares: " + cantidadNumerosImpares + "<br>");
    document.write("Cantidad de ceros: " + cantidadCeros + "<br>");
    
    //promedio positivos ingresados
    promedioPositivos = acumuladorPositivos / contadorNumerosPositivos;

    document.write("El promedio de todos los numeros positivos es: " + promedioPositivos + "<br>");
    document.write("La suma de todos los números negativos es: " + acumuladorNegativos + "<br>");
    document.write("Número máximo: " + numeroMax + "   Letra máxima: " + letraMax + "<br>");
    document.write("Número mínimo: " + numeroMin + "   Letra mínima: " + letraMin + "<br>");

}

//--------------------------------------------------------------------------------------------------------

/* Ejercicio 9
Enunciado:
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo. */

function mostrar()

{
    var marca;
    var marcaMaxima;
    var marcaMinima;

    var peso;
    var pesoMin;
    var pesoMax;
    var contadorPesos = 0;
    var acumuladorPesos = 0;
    var promedioPesos;

    var primeraVez = true;

    var temperaturaAlmacenamiento;
    var temperaturasPares = 0;
    var temperaturasMenorACero = 0;

    var respuesta;

    

    do {
        marca = prompt("Ingrese la marca del producto.");

        peso = prompt("Ingrese el peso del producto");
        peso = parseInt(peso);

        temperaturaAlmacenamiento = prompt("Ingrese la temperatura de almacenamiento del producto");
        temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);

        
        while(isNaN(peso) || peso < 1 || peso > 100) {
            peso = prompt("Error! Ingrese un peso válido");
            peso = parseInt(peso);
        }

        while(isNaN(temperaturaAlmacenamiento) || temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30) {
            temperaturaAlmacenamiento = prompt("Error! Ingrese una temperatura de almacenamiento válida");
            temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);
        }
        
        //punto A)
        if(temperaturaAlmacenamiento % 2 == 0) {
            temperaturasPares++;
        }

        //punto B)
        if (primeraVez) {
            primeraVez = false;
      
            pesoMin = peso;
            pesoMax = peso;
            marcaMinima = marca;
            marcaMaxima = marca;

        } else if (peso > pesoMax) {
            pesoMax = peso;
            marcaMaxima = marca;
        }
          
          //punto C)
        if(temperaturaAlmacenamiento < 0) {
            temperaturasMenorACero++;
        }

          //punto D) acumular cantidad de pesos
        if(peso > 0) {
              acumuladorPesos += peso;
              contadorPesos++;

        }        

        respuesta = confirm("Desea continuar?");

    } while(respuesta);
    
    document.write("Cantidad de temperaturas pares: " + temperaturasPares + "<br>");
    document.write("Marca del producto más pesado: " + marcaMaxima + "<br>");
    document.write("Cantidad de temperaturas menores a cero grados: " + temperaturasMenorACero + "<br>");

    //punto D) calculo promedio de pesos
    if(contadorPesos == 0) {
        promedioPesos = 0;
    } else {
        promedioPesos = acumuladorPesos / contadorPesos;
    }

    document.write("Promedio de todos los pesos: " + promedioPesos + "<br>");

    //punto E)
    document.write("Peso mínimo: " + pesoMin + "<br>");
    document.write("Peso máximo: " + pesoMax + "<br>");

}

/*EJERCICIO QUE NOS DIO EL PROFE INCOMPLETO
/Enunciado:
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
