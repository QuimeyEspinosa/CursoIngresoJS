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
  var pesoIngrediente;

  var acumuladorIngredientes = 0;
  var acumuladorPrecio = 0 ;
  var acumuladorPesoIngredientes = 0;

  var precioPorKilo;
  var promedioPrecioPorKilo;
  var tipoValidadIngrediente;

  var descuento15;
  var descuento25;
  var sinDescuento;

  var banderaIngrediente = 0;

  var respuesta;

  do {

    do {
      ingrediente = prompt("Ingrese un ingrediente")
    }while(!isNaN(ingrediente));
    acumuladorIngredientes++;

    do {
      pesoIngrediente = prompt("Ingrese peso del ingrediente");
      pesoIngrediente=parseInt(pesoIngrediente);
    }while(isNaN(pesoIngrediente) || pesoIngrediente < 10 || pesoIngrediente > 1000);
    //acumular peso ingredientes para luego hacer descuentos
    acumuladorPesoIngredientes += pesoIngrediente;

    do {
      precioPorKilo = prompt("Ingrese precio por kilo del ingrediente");
      precioPorKilo=parseInt(precioPorKilo);
    }while(isNaN(precioPorKilo) || precioPorKilo < 10 || precioPorKilo > 1000);
    //acumular precios para luego hacer descuentos
    acumuladorPrecio += precioPorKilo;

    do {
      tipoValidadIngrediente = prompt("Ingrese tipo de ingrediente 'a' 'v' o 'm'");
    }while(!isNaN(tipoValidadIngrediente) || tipoValidadIngrediente != "a" && tipoValidadIngrediente != "v" && tipoValidadIngrediente != "m");
    
    //punto a) b) c) d)
    if(acumuladorPesoIngredientes >= 100 && acumuladorPesoIngredientes <= 300) {
      descuento15 = acumuladorPrecio * 0.85;
    } else if (acumuladorPesoIngredientes > 300) {
      descuento25 =  acumuladorPrecio * 0.75;
    } else {
      sinDescuento = acumuladorPrecio;
    }

    //punto e)
    if(ingrediente && banderaIngrediente == 0 || precioIngredienteMax < (acumuladorPesoIngredientes * acumuladorPrecio)) {

      precioIngredienteMax = (acumuladorPesoIngredientes * acumuladorPrecio);
      ingredienteMax = ingrediente;
      
      banderaIngrediente++;
    }
  
   respuesta = confirm("desea continuar ingresando ingredientes?")
  
  }while(respuesta);

  //punto f)
    promedioPrecioPorKilo = acumuladorPrecio / acumuladorIngredientes;

    document.write("Precio con descuento del 15%: " + descuento15 + "<br>");
    document.write("Precio con descuento del 25%: " + descuento25 + "<br>");
    document.write("Importe total sin descuento: " + sinDescuento + "<br>");

    document.write("El ingrediente más caro es: " + ingredienteMax + "<br>");

    document.write("Promedio de precio por kilo de todos los productos: " + promedioPrecioPorKilo + "<br>");

}
