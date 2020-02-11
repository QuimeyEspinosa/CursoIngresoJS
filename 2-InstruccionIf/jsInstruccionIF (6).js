function mostrar()
{
  var edad;

  edad = document.getElementById("edad").value;

  if(edad > 17) {
    alert("Es adulto");
  } else {
    if (edad < 13) {
      alert("es niñe");

    } else {
      alert("es adolescente");
    }
  }

  // FORMA INCORRECTA:
  //if(edad >= 13 && edad <= 17) {
    //alert("Usted es adolescente");

  //}

    //if(edad < 13) {
      //alert("Usted es un niño");

    //}

      //if(edad >= 18) {
        //alert("Usted es mayor de edad");

      //}
//tomo la edad




}//FIN DE LA FUNCIÓN
