/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra
y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/

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
