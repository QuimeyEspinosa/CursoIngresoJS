/*Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/

function mostrar()

{
    var marca;
    var marcaMaxima;
    var marcaMinima;

    var peso;
    var pesoMin;
    var pesoMax;
    var contadorPesos = 0;
    var acumuladorPesos = 0;
    var promedioPesos;

    var primeraVez = true;

    var temperaturaAlmacenamiento;
    var temperaturasPares = 0;
    var temperaturasMenorACero = 0;

    var respuesta;

    

    do {
        marca = prompt("Ingrese la marca del producto.");

        peso = prompt("Ingrese el peso del producto");
        peso = parseInt(peso);

        temperaturaAlmacenamiento = prompt("Ingrese la temperatura de almacenamiento del producto");
        temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);

        
        while(isNaN(peso) || peso < 1 || peso > 100) {
            peso = prompt("Error! Ingrese un peso válido");
            peso = parseInt(peso);
        }

        while(isNaN(temperaturaAlmacenamiento) || temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30) {
            temperaturaAlmacenamiento = prompt("Error! Ingrese una temperatura de almacenamiento válida");
            temperaturaAlmacenamiento = parseInt(temperaturaAlmacenamiento);
        }
        
        //punto A)
        if(temperaturaAlmacenamiento % 2 == 0) {
            temperaturasPares++;
        }

        //punto B)
        if (primeraVez) {
            primeraVez = false;
      
            pesoMin = peso;
            pesoMax = peso;
            marcaMinima = marca;
            marcaMaxima = marca;

        } else if (peso > pesoMax) {
            pesoMax = peso;
            marcaMaxima = marca;
        }
          
          //punto C)
        if(temperaturaAlmacenamiento < 0) {
            temperaturasMenorACero++;
        }

          //punto D) acumular cantidad de pesos
        if(peso > 0) {
              acumuladorPesos += peso;
              contadorPesos++;

        }        

        respuesta = confirm("Desea continuar?");

    } while(respuesta);
    
    document.write("Cantidad de temperaturas pares: " + temperaturasPares + "<br>");
    document.write("Marca del producto más pesado: " + marcaMaxima + "<br>");
    document.write("Cantidad de temperaturas menores a cero grados: " + temperaturasMenorACero + "<br>");

    //punto D) calculo promedio de pesos
    if(contadorPesos == 0) {
        promedioPesos = 0;
    } else {
        promedioPesos = acumuladorPesos / contadorPesos;
    }

    document.write("Promedio de todos los pesos: " + promedioPesos + "<br>");

    //punto E)
    document.write("Peso mínimo: " + pesoMin + "<br>");
    document.write("Peso máximo: " + pesoMax + "<br>");


}
