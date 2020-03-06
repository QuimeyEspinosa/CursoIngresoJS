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
