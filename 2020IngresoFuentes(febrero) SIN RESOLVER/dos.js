/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de 
ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
-peso (entre 10 y 1000)en kilo,
-precio por kilo (más de cero ),
-tipo validad("v";"a";"m")(vegetal,animal o mezcla )
a) Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
b) Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
c) El importe total a pagar , bruto sin descuento y...
d) el importe total a pagar con descuento(solo si corresponde)
e) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/

function mostrar()
{
    var ingrediente;
    var ingredientePrecioPorKiloMax;

    var peso;
    var precioPorKilo;
    var precioPorKiloMax
    var tipoValidad;

    var descuento15;
    var descuento25;
    var sinDescuento;

    var acumuladorPesoIngredientes = 0;
    var acumuladorPrecioPorKiloIngredientes = 0;

    var banderaPrecioPorKiloMasCaro = 0;

    var contadorIngredientes = 0;

    var promedioPrecioPorKiloIngredientes;
    
    var respuesta;

    do {
        do {
            ingrediente = prompt("Ingrese un ingrediente");
        }while(!isNaN(ingrediente));

        contadorIngredientes++;

        do {
            peso = prompt("Ingrese peso del ingrediente");
            peso = parseInt(peso);
        }while(isNaN(peso) || peso < 10 || peso > 1000);

        acumuladorPesoIngredientes += peso;

        do {
            precioPorKilo = prompt("Ingrese precio por kilo del ingrediente");
            precioPorKilo = parseInt(precioPorKilo);
        }while(isNaN(precioPorKilo) || precioPorKilo < 10 || precioPorKilo > 1000);

        acumuladorPrecioPorKiloIngredientes += precioPorKilo;

        do {
            tipoValidad = prompt("Ingrese tipo validad del ingrediente");
        }while(!isNaN(tipoValidad) || tipoValidad != "v" && tipoValidad != "a" && tipoValidad != "m");        

        //punto e)
        if(precioPorKilo && banderaPrecioPorKiloMasCaro == 0 || precioPorKilo > precioPorKiloMax) {
            precioPorKiloMax = precioPorKilo;
            ingredientePrecioPorKiloMax = ingrediente;

            banderaPrecioPorKiloMasCaro++;
        }

        respuesta = confirm("Desea continuar?");

    }while(respuesta);

    //punto a) b) c) d)
    if(acumuladorPesoIngredientes >= 100 && acumuladorPesoIngredientes <= 300) {
        descuento15 = (acumuladorPrecioPorKiloIngredientes * acumuladorPesoIngredientes) * 0.85;
    } else if (acumuladorPesoIngredientes > 300) {
        descuento25 = (acumuladorPrecioPorKiloIngredientes * acumuladorPesoIngredientes) * 0.75;
    } else {
        sinDescuento = (acumuladorPrecioPorKiloIngredientes * acumuladorPesoIngredientes);
    }

    document.write("Total a pagar con 15% de descuento: " + descuento15 + "<br>");
    document.write("Total a pagar con 25% de descuento: " + descuento25 + "<br>");
    document.write("Total a pagar sin descuento: " + sinDescuento + "<br>");

    document.write("Ingrediente mas caro: " + ingredientePrecioPorKiloMax + "<br>");

    //punto f)
    promedioPrecioPorKiloIngredientes = acumuladorPrecioPorKiloIngredientes / contadorIngredientes;

    document.write("Promedio precio por kilo de todos los ingredientes: " + promedioPrecioPorKiloIngredientes + "<br>");
}
