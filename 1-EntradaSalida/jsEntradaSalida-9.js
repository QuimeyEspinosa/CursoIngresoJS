/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo
    var aumento

    sueldo = document.getElementById("sueldo").value;

    parseInt(sueldo);

    aumento = (sueldo * 1.1);

    document.getElementById("resultado").value = aumento;
    
}
