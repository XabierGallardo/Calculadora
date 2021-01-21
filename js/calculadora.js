//Variables iniciales, num_pantalla irá agregando números y se guardarán en el array fila_1 
let num_pantalla = 0;
let fila_1 = 0;
let fila_2 = 0;


//Registro números con mouse

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
});



//Registro números con teclado con disposición ES
$(document).keydown(function() {
	const tecla = event.keyCode;
	const tecla_valor = event.key;

	//Registro números por consola para mapear teclas
	//console.log("tecla " + tecla + " valor " + tecla_valor);

	/* Códigos en numeral y no numeral
	/	111
	*	106	
	+	107	171
	-	109	173
	7	103	55
	8	104	56
	9	105	57
	4	100	52
	5	101	53
	6	102	54
	1	97	49
	2	98	50
	3	99	51
	0	96	48
	.	110	190
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




		case 190: //Tecla .
			num_pantalla += ".";
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 54: //Tecla .
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 96: //Tecla 0
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 48: //Tecla 0
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 97: //Tecla 1
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 49: //Tecla 1
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 98: //Tecla 2
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 50: //Tecla 2
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 99: //Tecla 3
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;


		case 51: //Tecla 3
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 100: //Tecla 4
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 52: //Tecla 4
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 101: //Tecla 5
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 53: //Tecla 5
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 102: //Tecla 6
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 54: //Tecla 6
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 103: //Tecla 7
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 55: //Tecla 7
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 104: //Tecla 8
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 56: //Tecla 8
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 105: //Tecla 9
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;

		case 57: //Tecla 9
			num_pantalla += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-resultados").html(num_pantalla.substring(1));
		break;




		case 144: //Tecla bloq
			reset();
		break;

		case 67: //Tecla C
			reset();
		break;




		default:
		//console.log("Tecla incorrecta");
	}




	switch(tecla_valor) {

		case "+":
			sumar();
		break;

		case "-":
			restar();
		break;

		case "*":
			multiplicar();
		break;		

		case "/":
			dividir();
		break;
		
		default:
		//console.log("Tecla incorrecta");
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
	console.log("Imprimir resultado");
}



//Resetear la calculadora
$("#tecla-bloq").click(function(){
	reset();
});



reset(); //Reset inicial