function jugar(opcionUsuario){

	/* Generamos un "random" para crear la opcionMaquina. Le asignamos los parámetros 
	mínimo y máximo. */
	function aleatorio(minimo,maximo){
		var numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

		/* Una vez que se tiene el numeroAleatorio en la variable, utilizamos el array con las diferentes
		opciones en formato string. Dejamos la opción almacenada en la variable opcion*/
		var eleccion = opciones[numeroAleatorio];
		/* Indicamos que la función "aleatorio" se encargará de recoger lo calculado en la variabe elección */
		return eleccion;
	}

	//Se crea un array con las diferentes opciones disponibles
	var opciones = ['Piedra','Papel','Tijera'];

	/* Se llama a la función aleatorio y se guarda en la variable 
	que servirá como respuesta a la opción de la máquina */
	var opcionMaquina = aleatorio(0,2); 


	//Damos el mensaje en caso de empate
	var resultado;

	if (opcionUsuario === opcionMaquina) {
		resultado = "<h2>¡Es un empate!</h2>";
	} else if ((opcionUsuario == "Piedra" && opcionMaquina == "Tijera") ||
			   (opcionUsuario == "Papel" && opcionMaquina == "Piedra") ||
			   (opcionUsuario == "Tijera" && opcionMaquina == "Papel")){
		resultado = "<h2>¡Has ganado!</h2>"; //Dejo sólo opciones en que el usuario gane
	} else { //En el resto, pierde usuario
		resultado = "<h2>Has perdido</h2>";
	}
	//Mostramos el resultado
	document.getElementById('eleccion').innerHTML = "<p>Has elegido "+"<span>"+ opcionUsuario +"</span>"+" y La Maquina ha elegido "+"<span>"+ opcionMaquina+"</span>";
	document.getElementById('resultado').innerHTML = "<h2>"+ resultado +"</h2>";
}

