//Variables iniciales, pantalla_valor irá agregando números y se guardarán en el array fila_1 
let pantalla_valor = 0;
let fila_1 = 0;
let fila_2 = 0;

let operador = "";
let resultado_calculo = 0;




/*	REGISTROS	*/

//Registro números con mouse
$("#tecla-9").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "9";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
});

$("#tecla-8").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "8";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
});

$("#tecla-7").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "7";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
});

$("#tecla-6").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "6";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
});

$("#tecla-5").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "5";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
});

$("#tecla-4").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "4";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
});
$("#tecla-3").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "3";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
});

$("#tecla-2").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "2";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
});

$("#tecla-1").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "1";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
});

$("#tecla-0").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "0";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
});

$("#tecla-punto").click(function() {
	if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
	} else {
		pantalla_valor += "9";
		$("#pantalla-valor").html(pantalla_valor.substring(1));
	}
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
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += ".";
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;
		case 110:
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += ".";
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;


		case 96: //Tecla 0
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				//Imprimimos el valor de la secuencia sin el 0 inicial
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;

		case 48:
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;


		case 97: //Tecla 1
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;
		case 49:
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;


		case 98: //Tecla 2
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;

		case 50:
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;


		case 99: //Tecla 3
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;

		case 51:
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;


		case 100: //Tecla 4
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;

		case 52: //Tecla 4
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;


		case 101: //Tecla 5
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;

		case 53:
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;


		case 102: //Tecla 6
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;

		case 54:
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;


		case 103: //Tecla 7
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;

		case 55:
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;


		case 104: //Tecla 8
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;

		case 56:
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;


		case 105: //Tecla 9
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
		break;

		case 57:
			if(pantalla_valor.length > 13) { console.log("Limite máximo de números") 
			} else {
				pantalla_valor += tecla_valor;
				$("#pantalla-valor").html(pantalla_valor.substring(1));
			}
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




/*	FUNCIONALIDADES */

function reset() {
	pantalla_valor = 0;
	fila_1 = 0;
	fila_2 = 0;

	operador = "";
	resultado_calculo = 0;

	$("#pantalla-valor").html(pantalla_valor);
	$("#pantalla-historico").html(pantalla_valor);
}


/*
function redimensionar() {

	let valor = pantalla_valor.length;

	if( valor > 13 ) {
		$("#pantalla-valor").css("font-size","x-large");
		$("#pantalla-historico").css("font-size","large");

	}

	console.log("Valor: " + valor);
}
*/



function operacion() {

	//Convertir en float el num de pantalla
	let pantalla_string = $("#pantalla-valor").text();
	let pantalla_numero = parseFloat(pantalla_string);

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

		fila_1 = resultado_calculo;
		$("#pantalla-historico").html(resultado_calculo);
		
		fila_2 = 0;
		pantalla_valor = 0;
		$("#pantalla-valor").html(pantalla_valor);

	} else { //Si no existía un valor previo

		fila_1 = pantalla_numero;
		$("#pantalla-historico").html(pantalla_numero);

		pantalla_valor = 0;
		$("#pantalla-valor").html(pantalla_valor);
	}
}




function resultado() {

	let pantalla_string = $("#pantalla-valor").text();
	let pantalla_numero = parseFloat(pantalla_string);

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

		fila_1 = 0;
		$("#pantalla-historico").html(resultado_calculo);

		fila_2 = 0;
		pantalla_valor = 0;
		$("#pantalla-valor").html(pantalla_valor);
	}
}




reset(); //Reset inicial