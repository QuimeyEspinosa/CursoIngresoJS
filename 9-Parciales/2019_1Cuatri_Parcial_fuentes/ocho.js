/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
-una letra 
-y un número entre -100 y 100 (validar) hasta que el usuario quiera 
informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/

function mostrar()
{
    var letra;
    var numero;
    var respuesta;

    var contadorNumerosPares = 0;
    var contadorNumerosImpares = 0;
    var contadorCeros = 0;

    var acumuladorNumerosPositivos = 0;
    var contadorNumerosPositivos = 0;

    var acumuladorNumerosNegativos = 0;

    var promedioNumerosPositivos;

    var banderaNumeroMinimo = 0;
    var banderaNumeroMaximo = 0;

    var numeroMin;
    var numeroMax;
    
    var letraNumeroMin;
    var letraNumeroMax;

    do {
        do {
            letra = prompt("Ingrese una letra");
        }while(!isNaN(letra));

        do {
            numero = prompt("Ingrese un numero entre -100 y 100");
            numero = parseInt(numero);
        }while(isNaN(numero) || numero < -100 || numero > 100);

        //A)
        if(numero % 2 == 0) {
            contadorNumerosPares++;
        //B)    
        } else if(numero != 0) {
            contadorNumerosImpares++; 
        //C)   
        } else {
            contadorCeros++;
        }

        //D)
        if(numero > 0) {
            acumuladorNumerosPositivos += numero;
            contadorNumerosPositivos++;
            //E)
        } else if (numero < 0) {
            acumuladorNumerosNegativos += numero;
        }

        //F)
        if(numero && banderaNumeroMinimo == 0 || numeroMin > numero ) {
            numeroMin = numero;
            letraNumeroMin = letra;

            banderaNumeroMinimo++;
        }

        if(numero && banderaNumeroMaximo == 0 || numeroMax < numero ) {
            numeroMax = numero;
            letraNumeroMax = letra;

            banderaNumeroMaximo++;
        }

        respuesta = confirm("desea continuar?");

    }while(respuesta);

    //A)
    document.write("la cantidad de numeros pares es: " + contadorNumerosPares + "<br>");
    //b)
    document.write("la cantidad de numeros impares es: " + contadorNumerosImpares + "<br>");
    //C)
    document.write("la cantidad de ceros es: " + contadorCeros + "<br>");

    //D)
    promedioNumerosPositivos = acumuladorNumerosPositivos / contadorNumerosPositivos;
    document.write("El promedio de numeros positivos es: " + promedioNumerosPositivos + "<br>");

    //E)
    document.write("La suma de todos los numeros negativos es: " + acumuladorNumerosNegativos + "<br>");

    //F)
    document.write("el numero maximo es: " + numeroMax + "<br>");
    document.write("Y su letra es: " + letraNumeroMax + "<br>");

    document.write("el numero minimo es: " + numeroMin + "<br>");    
    document.write("Y su letra es: " + letraNumeroMin + "<br>");
    

}
