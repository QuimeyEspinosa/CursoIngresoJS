
/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	alert("uno");

	var contadorProducto = 0;

	var precio;
	var precioBarbijoMax;
	var precioBarbijoFabricanteMax;
	var precioBarbijoCantidadUnidadesProductoMax;

	var fabricanteMax;
	var fabricante;

	var marca;

	var producto;
	var productoUnidadesMax;
	
	var cantidadUnidades;
	var contadorCantidadDeJabones;

	var bandera = 0;
	
	while(contadorProducto < 5) {
		contadorProducto++;
		
		do 
		{
			producto = prompt("Ingrese un producto");
		} while(!isNaN(producto) || producto != "barbijo" && producto != "jabon" && producto != "alcohol");

		do 
		{
			precio = prompt("Ingrese un precio");
			precio = parseInt(precio);
		} while(isNaN(precio) || precio < 100 && precio > 300);

		do 
		{
			cantidadUnidades = prompt("Ingrese cantidad de unidades");
			cantidadUnidades = parseInt(cantidadUnidades);
		} while(isNaN(cantidadUnidades) || cantidadUnidades < 1 && cantidadUnidades > 1000);

		do 
		{
			marca = prompt("Ingrese marca del producto");
		} while(!isNaN(marca));

		do 
		{
			fabricante = prompt("Ingrese fabricante del producto");
		} while(!isNaN(fabricante));

		//punto a)
		if(producto == "barbijo" && bandera == 0 || precioBarbijoMax < precio) 
		{
			precioBarbijoMax = precio;
			precioBarbijoFabricanteMax = fabricante;
			precioBarbijoCantidadUnidadesProductoMax = cantidadUnidades;

			bandera++;
		}

		//punto b)
		if(producto && bandera == 0 || productoUnidadesMax < cantidadUnidades) 
		{
			productoUnidadesMax = cantidadUnidades;
			fabricanteMax = fabricante;

			bandera++;
		}

		//punto c)
		if(producto == "jabon") {
			contadorCantidadDeJabones++;
		}

	}

	document.write("Fabricante del barbijo más caro: " + precioBarbijoFabricanteMax + " Cantidad de unidades del barbijo más caro " +  precioBarbijoCantidadUnidadesProductoMax + "<br>");
	document.write("Fabricante del producto con más unidades: " + fabricanteMax + "<br>");
	document.write("Cantidad de jabones: " + contadorCantidadDeJabones + "<br>");
	
}
