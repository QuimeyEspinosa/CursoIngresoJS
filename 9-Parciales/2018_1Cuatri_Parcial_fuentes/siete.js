/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de 
las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/


function mostrar()
{
    var contador = 0;
    var acumuladorSuma = 0;
    var promedio;
    var minimoNota;
    var minimoSexo;
    var contadorVarones;

    while (contador < 5) {
        contador++;

        do {
            var nota = prompt("Ingrese una nota del 1 al 10");
            nota = parseInt(nota);
        } while (isNaN(nota) || nota < 0 || nota > 10);

        do {
            var sexo = prompt("Ingrese sexo");
        } while (sexo != "m" && sexo != "f");

        //Punto A. Acumulador
        acumuladorSuma += nota;

        //Punto B. Minimo
        if (contador == 1) {
            minimoNota = nota;
            minimoSexo = sexo;
        } else if(nota < minimoNota) {
            minimoNota = nota;
            minimoSexo = sexo;
        }

        //Punto C. cantidad de varones
        if(nota >=6 && sexo == "m") {
            contadorVarones++;
        }

        
    }

    //punto a. calculo
    promedio = acumuladorSuma / contador;

    alert("Promedio " + promedio);
    alert("La nota mínima es " + minimoNota + " y le pertenece al sexo " + minimoSexo);
    alert("La cantidad de varones que se sacaron más de 6 es: " + contadorVarones);

}
