/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las 
alturas en centimetros(validar entre 0 y 250) , 
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/

function mostrar()
{
    var alturaJugador;
    var sexoJugador;

    var contador;

    var acumuladorAlturaJugadores = 0;
    var contadorAlturaJugadores = 0;

    var alturaJugadorMin;
    var sexoJugadorMin;

    var banderaAlturaJugador = 0;

    var contadorCantidadMujeresMasAltasQue190 = 0;


    for(contador = 0; contador < 2; contador++) {

        do {
            alturaJugador = prompt("Ingrese altura del jugador");
            alturaJugador = parseInt(alturaJugador);
        }while(isNaN(alturaJugador) || alturaJugador < 0 || alturaJugador > 250);

        do {
            sexoJugador = prompt("Ingrese sexo del jugador 'f' o 'm'");
        }while(!isNaN(sexoJugador) || sexoJugador != "f" && sexoJugador != "m");

        //punto a)
        if(alturaJugador) {
            acumuladorAlturaJugadores += alturaJugador;
            contadorAlturaJugadores++;
        }

        //punto b)
        if(alturaJugador && banderaAlturaJugador == 0 || alturaJugadorMin > alturaJugador) {
            alturaJugadorMin = alturaJugador;
            sexoJugadorMin = sexoJugador;

            banderaAlturaJugador++;
        }

        //punto c)
        if(sexoJugador == "f" && alturaJugador > 190) {
            contadorCantidadMujeresMasAltasQue190++;
        }
        
        
    }

    //a)
    promedioAlturaJugadores = acumuladorAlturaJugadores / contadorAlturaJugadores;
    alert("El promedio de altura de los jugadores es: " + promedioAlturaJugadores);

    //b)
    alert("El sexo del jugador con menor altura es: " + sexoJugadorMin);

    //c)
    alert("La cantidad de mujeres que superan los 190cm son: " + contadorCantidadMujeresMasAltasQue190);
}
