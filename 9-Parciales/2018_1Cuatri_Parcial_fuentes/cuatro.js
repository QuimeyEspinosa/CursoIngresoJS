function mostrar()
{

    var numero1;
    var numero2;
    var suma;
    var resta;

    numero1 = prompt("Ingrese el primer número");
    numero1 = parseInt(numero1);

    numero2 = prompt("Ingrese un segundo número");
    numero2 = parseInt(numero2);

    suma = numero1 + numero2;
    suma = parseInt(suma);

    resta = numero1 - numero2;
    resta = parseInt(resta);


    if(numero1 == numero2) {
        alert( "El primer número es " + numero1 + " y el segundo número es: " + numero2 );

    } else if (numero1 > numero2) {
        resta;
        alert( "El resultado es: " + resta);

    } else {
        suma;
        alert( "El resultado es: " + suma);

    } if (suma > 10) {
        suma;
        alert( "La suma es: " + suma + " y superó el 10");
    }


}
