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
  var ingrediente
  var pesoIngrediente;

  var acumuladorIngredientesDescuento = 0;

  var precioPorKilo;
  var tipoValidadIngrediente;

  var descuento15;
  var descuento25;
  var sinDescuento;

  var descuento;

  var respuesta;

  do {

    do {
      ingrediente = prompt("Ingrese un ingrediente")
    }while(!isNaN(ingrediente));

    do {
      pesoIngrediente = prompt("Ingrese peso del ingrediente");
    }while(isNaN(pesoIngrediente) || pesoIngrediente < 10 || pesoIngrediente > 1000);

    do {
      precioPorKilo = prompt("Ingrese precio por kilo del ingrediente");
    }while(isNaN(precioPorKilo) || precioPorKilo < 10 || precioPorKilo > 1000);

    do {
      tipoValidadIngrediente = prompt("Ingrese tipo de ingrediente 'a' 'v' o 'm'");
    }while(!isNaN(tipoValidadIngrediente) || tipoValidadIngrediente != "a" && tipoValidadIngrediente != "v" && tipoValidadIngrediente != "m");

    if(pesoIngrediente > 100 || pesoIngrediente > 300) {
      acumuladorIngredientesDescuento += pesoIngrediente;
    }
    
    if(acumuladorIngredientesDescuento > 100) {
      descuento15 = (precioPorKilo * acumuladorIngredientesDescuento) * 0.85
    } else if (acumuladorIngredientesDescuento > 300) {
      descuento25 = (precioPorKilo * acumuladorIngredientesDescuento) * 0.75
    } else {
      sinDescuento = precioPorKilo * acumuladorIngredientesDescuento
    }

    respuesta = confirm("desea continuar ingresando ingredientes?")

  }while(respuesta);

  document.write("Precio con descuento del 15%: " + descuento15 + "<br>");
  document.write("Precio con descuento del 25%: " + descuento25 + "<br>");
  document.write("Importe total sin descuento: " + sinDescuento + "<br>");

}
