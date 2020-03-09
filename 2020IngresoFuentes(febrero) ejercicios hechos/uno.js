
/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
-el tipo (validar "barbijo" , "jabón" o "alcohol") ,
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-la Marca 
-el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var tipoProducto;
	var tipoProductoMax;
	
	var precioProducto;

	var cantidadUnidadesProducto;
	var barbijoCantidadUnidadesMax;
	var barbijoPrecioMax;
	var barbijoFabricanteMax;

	var marcaProducto;

	var fabricanteProducto;
	var productoFabricanteMax
	//var primeraVezBarbijoMax = true;


	var contadorProducto;
	var contadorUnidadesDeJabones = 0;
	var acumuladorJabones = 0;

	var banderaBarbijo = 0;
	var banderaTipoProducto = 0;

	for(contadorProducto = 0; contadorProducto < 5; contadorProducto++) {

		do {
			tipoProducto = prompt("Ingrese un tipo de producto");
		}while(!isNaN(tipoProducto) || tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol");

		do {
			precioProducto = prompt("Ingrese precio del producto");
			precioProducto = parseInt(precioProducto);
		}while(isNaN(precioProducto) || precioProducto < 100 || precioProducto >300);

		do {
			cantidadUnidadesProducto = prompt("Ingrese cantidad de unidades del producto");
			cantidadUnidadesProducto = parseInt(cantidadUnidadesProducto);
		}while(isNaN(cantidadUnidadesProducto) || cantidadUnidadesProducto < 0 || cantidadUnidadesProducto > 1000);

		do {
			marcaProducto = prompt("Ingrese marca del producto");
		}while(!isNaN(marcaProducto));

		do {
			fabricanteProducto = prompt("Ingrese fabricante del producto");
		}while(!isNaN(fabricanteProducto));

		//punto a) resuelto
		if((tipoProducto == "barbijo" && banderaBarbijo == 0) || (precioProducto > barbijoPrecioMax))
		{
			barbijoProductoMax = tipoProducto;
			barbijoFabricanteMax = fabricanteProducto;
			barbijoCantidadUnidadesMax = cantidadUnidadesProducto;
			
			banderaBarbijo++;
		}
		//punto b)
		if(tipoProducto && banderaTipoProducto == 0 || tipoProductoMax < cantidadUnidadesProducto) {

			tipoProductoMax = cantidadUnidadesProducto;
			productoFabricanteMax = fabricanteProducto;

			banderaTipoProducto++;
		}

		//punto c)
		if(tipoProducto == "jabon") {
			acumuladorJabones += cantidadUnidadesProducto;
		}

	    /*	punto a) otra forma
	    if (primeraVezBarbijoMax) 
		{
            primeraVezBarbijoMax = false;
            barbijoProductoMax = tipoProducto;
			barbijoCantidadUnidadesMax = cantidadUnidadesProducto;
			barbijoFabricanteMax = fabricanteProducto;
		}  
		else if (precioProducto > barbijoProductoMax) 
		{
            barbijoProductoMax = tipoProducto;
			barbijoCantidadUnidadesMax = cantidadUnidadesProducto;
			barbijoFabricanteMax = fabricanteProducto;
		}*/

	}

	document.write("Fabricante de barbijo más caro: " + barbijoFabricanteMax + "<br>");
	document.write("Cantidad de unidades del fabricante de barbijos más caro: " + barbijoCantidadUnidadesMax + "<br>");
	document.write("Fabricante con mayor cantidad de unidades: " + productoFabricanteMax + "<br>");
	
	document.write("Cantidad de jabones en total: " + acumuladorJabones + "<br>");

}
