/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	
}

function NumerosPares () 
{

     var numerosPares = 2;
     var numero = document.getElementById("numero").value;

     numero = parseInt(numero);
     document.write("Numeros introducidos: " + numero + "<br >");


    while(isNaN(numero) || numero < 1 ) {
        numero = prompt("Ingrese un número");
        numero = parseInt(numero);
    }

    while (numerosPares < numero) {
        numerosPares++;

        if (numerosPares % 2 == 0); {

        }

    }
    
    /*
    while ( numerosPares <= numero ) {
        document.write( + numerosPares + "<br >");
        
        numerosPares += 2;

    } */

}

function NumerosImpares () 
{
    var contador = 0;
    var contadorImpares = 0;
    var numero = document.getElementById("numero").value;

    numero = parseInt(numero);
    document.write("Numeros introducidos: " + numero + "<br >");
    
    while(isNaN(numero) || numero < 1 ) {
        numero = prompt("Ingrese un número");
        numero = parseInt(numero);
    }

    while (numerosImpares < numero) {
        numerosPares++;

        if (numerosImpares % 2 != 0); {

        }

    }

    /*
    while ( numerosImpares <= numero ) {
       document.write( + numerosImpares + "<br >");
       
       numerosImpares += 2;

   }*/

}

function NumerosDivisibles ()
{
    var contador;
    var contadorDivisibles = 1;
    var numero = document.getElementById("numero").value;

    numero = parseInt(numero);
    document.write("Numeros introducidos: " + numero + "<br >");

    while(contador < 100 ) {
        contador++;

        if(numero % contador == 0) {
            contadorDivisibles++;
        }
    }


}
//continuar creando functions