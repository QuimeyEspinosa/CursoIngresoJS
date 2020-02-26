
function mostrar()
{

    //buscar como validar

    var ancho;
    var largo;
    var perimetro;

    ancho = prompt("Ingrese Ancho");
    ancho = parseInt(ancho);

    largo = prompt("Ingrese Largo");
    largo = parseInt(largo);

    perimetro = (ancho + largo) * 2;
    perimetro = parseInt (perimetro);

    alert("El perimetro es " + perimetro);
}
