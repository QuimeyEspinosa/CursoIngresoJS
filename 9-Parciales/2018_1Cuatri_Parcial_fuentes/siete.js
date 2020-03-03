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
            var nota = prompt("Ingrese una nota");
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
    alert("Minimo " + minimoNota + " sexo minimo " + minimoSexo);





































    var alumnos;
    var nota;
    var sexo;

    alumnos = 5

    nota = prompt("Ingrese una nota del 1 al 10:");

    sexo = prompt("Ingrese sexo ('F' o 'M')");

    for(nota <= 10 ; alumnos ;  ) {
        
    }
    
    
}
