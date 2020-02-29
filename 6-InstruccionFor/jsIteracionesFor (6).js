function mostrar()
{
    var numero;
    var cantidadNumerosPares = 0;

    numero = prompt("Ingrese un numero");
    numero = parseInt(numero);

    for(numero ; numero > 1 ; numero--) {

        if(numero % 2 == 0 && numero != 0 ) {

            document.write("numero par: " + numero + "<br >");
            cantidadNumerosPares++;

        }

    
    } 

    document.write("cantidad de numeros pares: " + cantidadNumerosPares + "<br >");

    /*
    var num;
    var cantnumpar=0;
    num=prompt("ingrese numero ");
    num=parseInt(num);
    for(var num;num>1;num--)
    {
       if(num%2==0 && num!=0)
       {
            document.write("numero par: " + num + "<br>");
            cantnumpar++;
            
        }
      
        
    }

    document.write("cantidad de numeros pares: " + cantnumpar + "<br>"); */




}//FIN DE LA FUNCIÓN