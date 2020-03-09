
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
    var precioProducto;
    var cantidadUnidadesProducto;
    var marcaProducto;
    var fabricanteProducto;

    var contadorProducto;

    var precioProductoBarbijoMax;
    var cantidadUnidadesProductoBarbijoMax;
    var fabricanteProductoBarbijoMax;
    var banderaBarbijoMasCaro = 0;

    var banderaTipoProductoMasUnidades = 0;
    var cantidadUnidadesProductoMax;
    var fabricanteCantidadUnidadesProductoMax;

    var acumuladorJabones = 0;


    for(contadorProducto = 0; contadorProducto < 5; contadorProducto++) {

        do {
            tipoProducto = prompt("ingrese tipo de producto");
        }while(!isNaN(tipoProducto) || tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol");

        do{
            precioProducto = prompt("Ingrese precio del producto");
            precioProducto = parseInt(precioProducto);
        }while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300);

        do {
            cantidadUnidadesProducto = prompt("Ingrese cantidad unidades del producto");
            cantidadUnidadesProducto = parseInt(cantidadUnidadesProducto);
        }while(isNaN(cantidadUnidadesProducto) || cantidadUnidadesProducto < 0 || cantidadUnidadesProducto > 1000);

        do {
            marcaProducto = prompt("Ingrese marca del producto");
        }while(!isNaN(marcaProducto));

        do {
            fabricanteProducto = prompt("Ingrese fabricante del producto");
        }while(!isNaN(fabricanteProducto));

        //punto a)
        if(tipoProducto == "barbijo" && banderaBarbijoMasCaro == 0 || precioProducto > precioProductoBarbijoMax) {
            precioProductoBarbijoMax = precioProducto;
            cantidadUnidadesProductoBarbijoMax = cantidadUnidadesProducto;
            fabricanteProductoBarbijoMax = fabricanteProducto;

            banderaBarbijoMasCaro++;
        }

        //punto b)
        if(tipoProducto && banderaTipoProductoMasUnidades == 0 || cantidadUnidadesProducto > cantidadUnidadesProductoMax) {
            cantidadUnidadesProductoMax = cantidadUnidadesProducto;
            fabricanteCantidadUnidadesProductoMax = fabricanteProducto;

            banderaTipoProductoMasUnidades++;
        }

        //punto c)
        if(tipoProducto == "jabon") {
            acumuladorJabones += cantidadUnidadesProducto;
        }

    }

    document.write("Fabricante barbijo mas caro: " + fabricanteProductoBarbijoMax + "<br>");
    document.write("Cantidad unidades barbijo mas caro: " + cantidadUnidadesProductoBarbijoMax + "<br>");

    document.write("Fabricante con mayor cantidad de unidades: " + fabricanteCantidadUnidadesProductoMax + "<br>");

    document.write("Cantidad de jabones totales; " + acumuladorJabones + "<br>");

}
