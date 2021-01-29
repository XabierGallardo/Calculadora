//Variables iniciales, pantalla_valor irá agregando números y se guardarán en el array fila_1 
let pantalla_valor = 0;
let fila_1 = 0;
let fila_2 = 0;

let operador = "";
let resultado_calculo = 0;




/*	REGISTROS	*/

//Registro números con mouse
$("#tecla-9").click(function() {
	pantalla_valor += "9";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});

$("#tecla-8").click(function() {
	pantalla_valor += "8";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});

$("#tecla-7").click(function() {
	pantalla_valor += "7";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});

$("#tecla-6").click(function() {
	pantalla_valor += "6";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});

$("#tecla-5").click(function() {
	pantalla_valor += "5";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});

$("#tecla-4").click(function() {
	pantalla_valor += "4";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});
$("#tecla-3").click(function() {
	pantalla_valor += "3";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});

$("#tecla-2").click(function() {
	pantalla_valor += "2";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});

$("#tecla-1").click(function() {
	pantalla_valor += "1";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});

$("#tecla-0").click(function() {
	pantalla_valor += "0";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});

$("#tecla-punto").click(function() {
	pantalla_valor += ".";
	$("#pantalla-valor").html(pantalla_valor.substring(1));
});

$("#tecla-sumar").click(function() {
	operador = "+";
	operacion();
});

$("#tecla-restar").click(function() {
	operador = "-";
	operacion();
});

$("#tecla-multiplicar").click(function() {
	operador = "*";
	operacion();
});

$("#tecla-dividir").click(function() {
	operador = "/";
	operacion();
});

$("#tecla-intro").click(function() {
	resultado();
});

$("#tecla-bloq").click(function(){
	reset();
});


//Registro números con teclado con disposición ES
$(document).keydown(function() {
	const tecla = event.keyCode;
	const tecla_valor = event.key;

	//Registro números por consola para mapear teclas
	//console.log("tecla " + tecla + " valor " + tecla_valor);

	//Switch códigos
	switch(tecla) {

		case 107: //Tecla +
			operador = "+";
			operacion();
		break;
		case 171:
			operador = "+";
			operacion();
		break;


		case 109: //Tecla -
			operador = "-";
			operacion();
		break;
		case 173:
			operador = "-";
			operacion();
		break;


		case 13: //Tecla Intro
			resultado();
		break;


		case 190: //Tecla .
			pantalla_valor += ".";
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;
		case 54:
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;


		case 96: //Tecla 0
			pantalla_valor += tecla_valor;

			//Imprimimos el valor de la secuencia sin el 0 inicial
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;
		case 48:
			pantalla_valor += tecla_valor;

			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;


		case 97: //Tecla 1
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;
		case 49:
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;


		case 98: //Tecla 2
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;
		case 50:
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;


		case 99: //Tecla 3
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;
		case 51:
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;


		case 100: //Tecla 4
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;

		case 52: //Tecla 4
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;


		case 101: //Tecla 5
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;
		case 53:
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;


		case 102: //Tecla 6
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;
		case 54:
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;


		case 103: //Tecla 7
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;
		case 55:
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;


		case 104: //Tecla 8
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;
		case 56:
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;


		case 105: //Tecla 9
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
		break;
		case 57:
			pantalla_valor += tecla_valor;
			$("#pantalla-valor").html(pantalla_valor.substring(1));
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

	//Switch de valores
	switch(tecla_valor) {

		case "*":
			operador = "*";
			operacion();
		break;


		case"/":
			operador = "/";
			operacion();
		break;

		default:
			//console.log("Tecla incorrecta");
	}
});




/*	Funcionalidades */

function reset() {
	pantalla_valor = 0;
	fila_1 = 0;
	fila_2 = 0;

	operador = "";
	resultado_calculo = 0;

	$("#pantalla-valor").html(pantalla_valor);
	$("#pantalla-historico").html(pantalla_valor);
}



function operacion() {

	//Las operaciones se resuelven con el operador = o mediante los operadores + - * /
	resultado(); 

	//Convertir en float el num de pantalla
	let pantalla_string = $("#pantalla-valor").text();
	let pantalla_numero = parseFloat(pantalla_string);


	//Si ya existía un valor previo, el nuevo se asigna a fila_2
	if (fila_1 !== 0) {
		
		fila_2 = pantalla_numero;

		switch (operador) {
			
			case "+":
				resultado_calculo = fila_1 + fila_2;
			break;

			case "-":
				resultado_calculo = fila_1 - fila_2;
			break;

			case "*":
				resultado_calculo = fila_1 * fila_2;
			break;

			case "/":
				resultado_calculo = fila_1 / fila_2;
			break;

			default:
				console.log("Falta asignar operador");

		}

		operador = "";

		//El resultado pasa a fila_1 y se imprimen los valores
		fila_1 = resultado_calculo;
		$("#pantalla-historico").html(fila_1);

		fila_2 = 0;
		pantalla_valor = 0;
		$("#pantalla-valor").html(pantalla_valor);
		
	} else { //Si no existía un valor previo

		fila_1 = pantalla_numero;
		$("#pantalla-historico").html(pantalla_numero);

		pantalla_valor = 0;
		$("#pantalla-valor").html(pantalla_valor);

		operador = "";
	}

	/* Guía para resultado() {}

	1. Introducir cifra
	2. Al presionar un operador, el número de pantalla_resultados pasa a pantalla_historico 


	4. Al presionar intro o cualquier simbolo, se hace la funcion resolver
	5. La funcion resolver agarra el string de pantalla_historico , el numero lo mete en fila_1
	5. Luego toma el valor en pantalla y lo mete en fila_2

	7. Despues de enter el numero, agarra el ultimo caracter (cifra operacion) i se mete condicional

			if("+") -> fila_1 + fila_2
			...

	8. Considerar los if de antes, si no hay numero en fila_1, se mete ahí

	9. Completada la operación, el resultado pasa a pantalla_historico y se quedará esperando a que se meta algun operador

	10. Resetear operador y valores

	11. Condicional sobre operadores sin valores previos
	*/ 
	
}

function resultado() {

		//Calcular resultado de fila_1 y fila_2

}


reset(); //Reset inicial