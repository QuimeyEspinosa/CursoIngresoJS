/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos:
-una letra 
-y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
    var respuesta;
    var letra;
    var numero;

    var cantidadPares = 0;
    var cantidadImpares = 0;
    var cantidadCeros = 0;

    var acumuladorPositivos = 0;
    var contadorPositivos = 0;

    var acumuladorNegativos = 0;
    var contadorPositivos = 0;

    var primeraVez = true;

    var numeroMinimo;
    var numeroMaximo;

    var letraMinima;
    var letraMaxima;

    var promedio;

    do {
        numero = prompt("Ingrese un numero");
        numero = parseInt(numero);

        letra = prompt("Ingrese una letra");

        while(isNaN(numero) || numero < -100 || numero > 100) {
            numero = prompt("Error! Ingrese un numero valido");
            numero = parseInt(numero);
        }

        while(!isNaN(letra)) {
            letra = prompt("Ingrese una letra válida");
        }

        if(numero % 2 == 0) {
            //Punto A. Si es par
            cantidadPares++;

        } else if (numero != 0) {
            //Punto B. Cantidad Impares
            cantidadImpares++;

        } else {
            //Punto C. Cantidad de Ceros
            cantidadCeros++;
        }

        
        if (numero > 0) {
            // Punto D. Acumulador y Promedio de positivos
            acumuladorPositivos += numero;
            contadorPositivos++;

        } else if (numero < 0) {
            //Punto E. Acumulador de negativos
            acumuladorNegativos += numero;
        }
        
        //Punto F. Maximo y minimo
        if(primeraVez) {
            primeraVez = false;
            numeroMaximo = numero;
            numeroMinimo = numero;

            letraMaxima = letra;
            letraMinima = letra;

        } else {
            if(numero > numeroMaximo) {
                numeroMaximo = numero;
                letraMaxima = letra;
            } else if (numero < numeroMinimo) {
                numeroMinimo = numero;
                letraMinima = letra;
            }
        }

        respuesta = confirm("Desea continuar?");
    } while (respuesta);

    document.write("Cantidad de pares " + cantidadPares + "<br>");
    document.write("Cantidad de impares " + cantidadImpares + "<br>");
    document.write("Cantidad de ceros " + cantidadCeros + "<br>");

    if (contadorPositivos == 0) {
        promedio = 0;
    } else {
        promedio = acumuladorPositivos / contadorPositivos;
    }

    document.write("Promedio de positivos: " + promedio + "<br>");
    document.write("Acumulador de negativos: " + acumuladorNegativos + "<br>");
    document.write("Numero máximo: " + numeroMaximo + " letra máxima: " + letraMaxima + "<br>");
    document.write("Numero mínimo: " + numeroMinimo + " letra mínima: " + letraMinima + "<br>");
        

}
