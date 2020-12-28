//Variables iniciales, num_pantalla irá agregando números y se guardarán en el array fila_1 
let num_pantalla = 0;
let fila_1 = 0;
let fila_2 = 0;


//Registro números con mouse
/*
$("#tecla-9").click(function() {
	num_pantalla += "9";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});

$("#tecla-8").click(function() {
	num_pantalla += "8";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});

$("#tecla-7").click(function() {
	num_pantalla += "7";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});

$("#tecla-6").click(function() {
	num_pantalla += "6";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});

$("#tecla-5").click(function() {
	num_pantalla += "5";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});

$("#tecla-4").click(function() {
	num_pantalla += "4";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});
$("#tecla-3").click(function() {
	num_pantalla += "3";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});

$("#tecla-2").click(function() {
	num_pantalla += "2";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});

$("#tecla-1").click(function() {
	num_pantalla += "1";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});

$("#tecla-0").click(function() {
	num_pantalla += "0";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});

$("#tecla-punto").click(function() {
	num_pantalla += ".";
	$("#pantalla-resultados").html(num_pantalla.substring(1));
});

$("#tecla-sumar").click(function() {
	sumar();
});

$("#tecla-restar").click(function() {
	restar();
});

$("#tecla-multiplicar").click(function() {
	multiplicar();
});

$("#tecla-dividir").click(function() {
	dividir();
});*/



//Registro números con teclado
$(document).keydown(function() {
	const tecla = event.keyCode;
	const tecla_valor = event.key;
	//console.log("tecla " + tecla + " valor " + tecla_valor);

	/* Códigos
	/	111
	*	106
	+	107
	-	109
	7	103
	8	104
	9	105
	4	100
	5	101
	6	102
	1	97
	2	98
	3	99
	0	96
	.	110
	Intro 13*/
	switch(tecla) {

		case 107: //Tecla +
			sumar();
		break;

		case 109: //Tecla -
			restar();
		break;

		case 106: //Tecla *
			multiplicar();
		break;

		case 111: //Tecla /
			dividir();
		break;

		case 13: //Tecla Intro
			resultado();
		break;

		case 110: //Tecla .
			num_pantalla += ".";
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 96: //Tecla 0
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 97: //Tecla 1
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 98: //Tecla 2
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 99: //Tecla 3
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 100: //Tecla 4
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 101: //Tecla 5
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 102: //Tecla 6
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 103: //Tecla 7
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 104: //Tecla 8
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 105: //Tecla 9
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 144: //Tecla bloq
			reset();
		break;

		default:
		console.log("Tecla incorrecta");
	}
});



//Función de reseteo de todos los valores
function reset() {
	num_pantalla = 0;
	fila_1 = 0;
	fila_2 = 0;

	$("#pantalla-resultados").html(num_pantalla);
	$("#pantalla-previa").html(num_pantalla);
}



function sumar() {
	
	//Convertimos en float el número de pantalla
	let valor_pantalla = $("#pantalla-resultados").text();
	let num_previo = parseFloat(valor_pantalla);
	
	//Si ya existía un valor previo
	if(fila_1 !== 0) { 
		
		//Asignamos el nuevo valor a la fila_2
		fila_2 = num_previo;

		//Hacemos la suma
		let resultado = fila_1 + fila_2;

		//Imprimimos los valores
		$("#pantalla-previa").html(resultado);
		$("#pantalla-resultados").html(resultado);

		//Pasamos el nuevo valor a la fila_1 y reseteamos los valores
		fila_1 = resultado;
		fila_2 = 0;
		num_pantalla = 0;


	} else {

		//Metemos el nuevo valor en fila_1 e imprimimos
		fila_1 = num_previo;
		$("#pantalla-previa").html(num_previo);

		num_pantalla = 0;
		$("#pantalla-resultados").html(num_pantalla);

	}
}



function restar() {
	
	let valor_pantalla = $("#pantalla-resultados").text();
	let num_previo = parseFloat(valor_pantalla);
	
	if(fila_1 !== 0) { 
		
		fila_2 = num_previo;

		let resultado = fila_1 - fila_2;

		$("#pantalla-previa").html(resultado);
		$("#pantalla-resultados").html(resultado);

		fila_1 = resultado;
		fila_2 = 0;
		num_pantalla = 0;


	} else {

		fila_1 = num_previo;
		$("#pantalla-previa").html(num_previo);

		num_pantalla = 0;
		$("#pantalla-resultados").html(num_pantalla);

	}
}



function multiplicar() {
	
	let valor_pantalla = $("#pantalla-resultados").text();
	let num_previo = parseFloat(valor_pantalla);
	
	if(fila_1 !== 0) { 
		
		fila_2 = num_previo;

		let resultado = fila_1 * fila_2;

		$("#pantalla-previa").html(resultado);
		$("#pantalla-resultados").html(resultado);

		fila_1 = resultado;
		fila_2 = 0;
		num_pantalla = 0;


	} else {

		fila_1 = num_previo;
		$("#pantalla-previa").html(num_previo);

		num_pantalla = 0;
		$("#pantalla-resultados").html(num_pantalla);

	}
}



function dividir() {
	
	let valor_pantalla = $("#pantalla-resultados").text();
	let num_previo = parseFloat(valor_pantalla);
	
	if(fila_1 !== 0) { 
		
		fila_2 = num_previo;

		let resultado = fila_1 / fila_2;

		$("#pantalla-previa").html(resultado);
		$("#pantalla-resultados").html(resultado);

		fila_1 = resultado;
		fila_2 = 0;
		num_pantalla = 0;


	} else {

		fila_1 = num_previo;
		$("#pantalla-previa").html(num_previo);

		num_pantalla = 0;
		$("#pantalla-resultados").html(num_pantalla);

	}
}



function resultado() {
/*
	let valor_pantalla = $("#pantalla-resultados").text();
	let num_previo = parseInt(valor_pantalla);
	
	if(fila_1 !== 0) { 
		
		fila_2 = num_previo;

		//Para imprimir el resultado, sumamos un 0
		let resultado = fila_1 + 0;

		$("#pantalla-previa").html(resultado);
		$("#pantalla-resultados").html(resultado);

		fila_1 = resultado;
		fila_2 = 0;
		num_pantalla = 0;


	} else {

		fila_1 = num_previo;
		fila_2 = 0;

		let resultado = fila_1 + fila_2;

		$("#pantalla-previa").html(resultado);
		$("#pantalla-resultados").html(resultado);

		fila_1 = resultado;
		fila_2 = 0;
		num_pantalla = 0;

	}
	*/
}



//Resetear la calculadora
$("#tecla-bloq").click(function(){
	reset();
});



reset(); //Reset inicial