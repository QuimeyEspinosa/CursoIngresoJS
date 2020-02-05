/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroUno;
    var numeroDos;
    var resultadoSuma;

    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    resultadoSuma = parseInt(numeroUno) + parseInt(numeroDos);

    alert("El resultado de la suma es " + resultadoSuma);

}

function restar()
{
    var numeroUno;
    var numeroDos;
    var resultadoResta;
    
    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;
    
    resultadoResta = parseInt(numeroUno) - parseInt(numeroDos);
    
    alert("El resultado de la resta es " + resultadoResta);

}

function multiplicar()
{ 
    var numeroUno;
    var numeroDos;
    var resultadoMultiplicar;

    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    resultadoMultiplicar = parseInt(numeroUno) * parseInt(numeroDos);

    alert("El resultado de la multiplicación es " + resultadoMultiplicar);
    
}

function dividir()
{
    var numeroUno;
    var numeroDos;
    var resultadoDividir;

    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    resultadoDividir = parseInt(numeroUno) / parseInt(numeroDos);

    alert("El resultado de la división es " + resultadoDividir);

}

