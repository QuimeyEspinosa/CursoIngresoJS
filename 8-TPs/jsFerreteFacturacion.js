/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{
  var precio1;
  var precio2;
  var precio3;
  var resultado;

  precio1 = document.getElementById("PrecioUno").value;
  precio2 = document.getElementById("PrecioDos").value;
  precio3 = document.getElementById("PrecioTres").value;

  resultado = parseInt(precio1) + parseInt(precio2) + parseInt(precio3);

  alert("El resultado de la suma es " + resultado);
}
function Promedio ()
{
  var precio1;
  var precio2;
  var precio3;
  var sumaprecios;
  var promedio;

  precio1 = document.getElementById("PrecioUno").value;
  precio2 = document.getElementById("PrecioDos").value;
  precio3 = document.getElementById("PrecioTres").value;

  sumaprecios = parseInt(precio1) + parseInt(precio2) + parseInt(precio3);

  promedio = (sumaprecios / 3);

  alert("El promedio es " + promedio);

}
function PrecioFinal ()
{
  var precio1;
  var precio2;
  var precio3;
  var sumaprecios;
  var iva;

  precio1 = document.getElementById("PrecioUno").value;
  precio2 = document.getElementById("PrecioDos").value;
  precio3 = document.getElementById("PrecioTres").value;

  sumaprecios = parseInt(precio1) + parseInt(precio2) + parseInt(precio3);

  iva = (sumaprecios * 1.21);

  alert("El resultado es " + iva);

}
