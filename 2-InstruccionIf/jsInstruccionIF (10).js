function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var min;
	var max;
	var resultado;

	min = 1;
	max = 11;

	resultado = Math.floor(Math.random() * (max - min)) + min;
	
	if(resultado >=9 ){
		
		alert("El resultado es " + resultado + " EXCELENTE");
		
		} else{
		
			if(resultado >= 4 ){
				
			alert("El resultado es " + resultado + " APROBO")
		
			} else {
		
				alert("El resultado es " + resultado + " Vamos la próxima se puede")
			}
		
		}	
}//FIN DE LA FUNCIÓN