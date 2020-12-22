//Variables iniciales, num_pantalla irá agregando números y se guardarán en el array fila_1 
let num_pantalla = 0;
let fila_1 = [];
let fila_2 = [];


//Función de reseteo de todos los valores
function reset() {
	num_pantalla = 0;
	fila_1 = [];
	fila_2 = [];

	$("#pantalla-resultados").html(num_pantalla);
}

//Registro teclas panel numérico
$(document).keydown(function() {
	const tecla = event.keyCode;
	const tecla_valor = event.key; 
	console.log("Tecla: " + tecla_valor + " código: " + tecla);

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
	Intro 13
	*/
	
	switch(tecla) {

		case 107:
			console.log("sumar");
		break;

		case 109:
			console.log("restar");
		break;

		case 106:
			console.log("multiplicar");
		break;

		case 111:
			console.log("dividir");
		break;

		case 13:
			console.log("resultado");
		break;

		case 110:
			console.log("decimal");
		break;

		case 96:
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla);
		break;

		case 97:
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla);
		break;

		case 98:
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla);
		break;

		case 99:
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla);
		break;

		case 100:
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla);
		break;

		case 101:
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla);
		break;

		case 102:
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla);
		break;

		case 103:
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla);
		break;

		case 104:
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla);
		break;

		case 105:
			num_pantalla += tecla_valor;
			$("#pantalla-resultados").html(num_pantalla);
		break;

		default:
		console.log("Tecla incorrecta");
	}
});



//Resetear la calculadora
$("#tecla-bloq").click(function(){ 
	reset();
});


reset(); //Reset inicial