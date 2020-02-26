function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt("Ingrese el precio:");
    precio = parseInt(precio);

    descuento = prompt("Ingrese el descuento:");
    descuento = parseInt(descuento);
    descuento = (precio * descuento) / 100;
    descuento = parseInt(descuento);

    precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;



}
