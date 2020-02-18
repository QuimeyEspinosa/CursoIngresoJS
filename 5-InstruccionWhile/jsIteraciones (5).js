function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo != "f" && sexo != "m") {

    sexo = prompt ("Ingrese un sexo válido");

    sexo = sexo.toLowerCase();
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN