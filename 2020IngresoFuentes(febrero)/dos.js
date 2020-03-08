/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de 
ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
-peso (entre 10 y 1000)en kilo,
-precio por kilo (más de cero ),
-tipo validad("v";"a";"m")(vegetal,animal o mezcla )
-Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
-Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/

function mostrar()
{
  alert("dos");

  var ingrediente;

  var peso;

  var precioPorKilo;

  var descuento15 = 0.85;
  var descuento25 = 0.75;

  var importeDescuento15;
  var importeDescuento25;

  var importeSinDescuento;

  var tipoValidad;
  var tipoValidadPrecioPorKiloMax;

  var respuesta;

  do {

    ingrediente = prompt("Ingrese un ingrediente");
    peso = prompt("Ingrese peso del ingrediente");
    precioPorKilo = prompt("Ingrese precio por kilo del ingrediente");
    tipoValidad = prompt("Ingrese tipo de validad");

    while(!isNaN(ingrediente)) {
      ingrediente = prompt("Error! ingrese un ingrediente válido");
    }

    while(isNaN(peso) || peso < 10 && peso > 1000) {
      peso = prompt("Error! ingrese un peso válido");
      peso = parseInt(peso)
    }

    while(isNaN(precioPorKilo) || precioPorKilo < 0) {
      precioPorKilo = prompt("Error! ingrese un precio por kilo válido");
      precioPorKilo = parseInt(precioPorKilo)
    }

    while(!isNaN(tipoValidad) || tipoValidad != "v" && tipoValidad != "a" && tipoValidad != "m") {
      tipoValidad = prompt("Error! ingrese un tipo válido");
    }

    //Descuentos
    if(peso > 300) {
      //punto B
      importeDescuento25 = (precioPorKilo * peso) * descuento25;         
    } else if (peso > 100) {
      importeDescuento15 = (precioPorKilo * peso) * descuento15;  
    } else {
      //punto A)
      importeSinDescuento = precioPorKilo * peso;
    }

    // punto D)
    if(tipoValidad && bandera == 0 || tipoValidadPrecioPorKiloMax < precioPorKilo) 
		{
      tipoValidadPrecioPorKiloMax = precioPorKilo;
      tipoValidadMax = tipoValidad;
      
         
			bandera++;
    }



    respuesta = confirm("Desea continuar?");

  }while(respuesta);

}
