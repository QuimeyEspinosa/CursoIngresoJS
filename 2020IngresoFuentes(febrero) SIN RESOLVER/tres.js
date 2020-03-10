/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en crucero nos solicitan:
-nombre
-edad(mayores de 18), 
-sexo("f" o "m") 
-estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.^*/

function mostrar()
{
    var nombrePasajero;
    var edadPasajero;
    var sexoPasajero;
    var estadoCivilPasajero;
    
    var respuesta;

    var banderaHombreCasadoMasJoven = 0;
    var edadPasajeroHombreCasadoMasJovenMin;
    var nombrePasajeroHombreCasadoMasJovenMin;

    var banderaPasajeroMasViejo = 0;

    var edadPasajeroMasViejoMax;
    var sexoPasajeroMasViejoMax;
    var nombrePasajeroMasViejoMax;

    var contadorMujeresCasadasOViudas = 0;
    var contadorMujeres = 0;
    var contadorHombreSoltero = 0;

    var acumuladorEdadMujeres = 0;
    var acumuladorEdadHombreSoltero = 0;

    var promedioEdadMujeres;
    var promedioEdadHombreSoltero;


    do {
        do {
            nombrePasajero = prompt("Ingrese nombre del pasajero");
        }while(!isNaN(nombrePasajero));

        do {
            edadPasajero = prompt("Ingrese edad del pasajero");
            edadPasajero = parseInt(edadPasajero);
        }while(isNaN(edadPasajero) || edadPasajero < 18);

        do {
            sexoPasajero = prompt("Ingrese sexo del pasajero");
        }while(!isNaN(sexoPasajero) || sexoPasajero != "f" && sexoPasajero != "m");

        do {
            estadoCivilPasajero = prompt("Ingrese estado civil del pasajero");
        }while(!isNaN(estadoCivilPasajero) || estadoCivilPasajero != "casado" && estadoCivilPasajero != "soltero" && estadoCivilPasajero != "viudo");


        //punto a)
        if(sexoPasajero == "m" && estadoCivilPasajero == "casado" && banderaHombreCasadoMasJoven == 0 || edadPasajeroHombreCasadoMasJovenMin > edadPasajero) {
            edadPasajeroHombreCasadoMasJovenMin = edadPasajero;
            nombrePasajeroHombreCasadoMasJovenMin = nombrePasajero;

            banderaHombreCasadoMasJoven++;
        }

        //punto b)
        if(edadPasajero && banderaPasajeroMasViejo == 0 || edadPasajeroMasViejoMax < edadPasajero) {
            edadPasajeroMasViejoMax = edadPasajero;
            sexoPasajeroMasViejoMax = sexoPasajero;
            nombrePasajeroMasViejoMax = nombrePasajero;

            banderaPasajeroMasViejo++;
        }

        //punto c)
        if(sexoPasajero == "f" && (estadoCivilPasajero == "casado" || estadoCivilPasajero == "viudo")) {
            contadorMujeresCasadasOViudas++;
        }

        //punto d)
        if(sexoPasajero == "f"){
            acumuladorEdadMujeres += edadPasajero;
            contadorMujeres++;
        }
        
        //punto e)
        if(sexoPasajero == "m" && estadoCivilPasajero == "soltero"){
            acumuladorEdadHombreSoltero += edadPasajero;
            contadorHombreSoltero++;
        }

        respuesta = confirm("desea continuar?");
        
    }while(respuesta);

    //a)
    document.write("Nombre hombre casado mas joven: " + nombrePasajeroHombreCasadoMasJovenMin + "<br>");

    //b)
    document.write("Nombre pasajero mas viejo: " + nombrePasajeroMasViejoMax + "<br>");
    document.write("Sexo pasajero mas viejo: " + sexoPasajeroMasViejoMax + "<br>");

    //c)
    document.write("Cantidad de mujeres casadas o viudas: " + contadorMujeresCasadasOViudas + "<br>");

    //d)
    promedioEdadMujeres = acumuladorEdadMujeres / contadorMujeres;
    document.write("Promedio edad mujeres: " + promedioEdadMujeres + "<br>");

    //e)
    promedioEdadHombreSoltero = acumuladorEdadHombreSoltero / contadorHombreSoltero;
    document.write("Promedio edad hombres solteros: " + promedioEdadHombreSoltero + "<br>");




}   
