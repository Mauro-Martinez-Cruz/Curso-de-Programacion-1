window.addEventListener("load", inicio);

function inicio(){
	document.getElementById("idBotonEnviar").addEventListener("click", proceso);
}

function proceso(){
	let formul = document.getElementById("idFormulario");
	if(formul.reportValidity()){
		let nombre = document.getElementById("idNombre").value;
		let correo = document.getElementById("idMail").value;
		
		let respuestaGen = document.getElementById("idGeneroM").checked;
		let genero = "femenino";
		if(respuestaGen){
			genero = "masculino";
		}
		
		let hijos = document.getElementById("idHijos").value;
		let formaContacto = document.getElementById("idFormaContacto").value;
		
		let texto = nombre + " (" + correo + ") " + genero + " " + hijos + " hijos, contactar por " + formaContacto;
		cargarCombo(texto);
		cargarTabla(texto);
		
		formul.reset();
	}
}

function cargarCombo(dato){
	let combo = document.getElementById("idSocios");
	let nodo = document.createElement("option");
	let nodoT = document.createTextNode(dato);
	nodo.appendChild(nodoT);
	combo.appendChild(nodo);
	// 	combo.add(nodo, combo[0]);  // lo agrega en primer lugar
	// nodo.selected=true;  // para que quede elegido
}
function cargarTabla(dato){
	let tabla = document.getElementById("idTabla");
	let fila  = tabla.insertRow(0);
	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	let celda = fila.insertCell();
	celda.innerHTML = dato;
}