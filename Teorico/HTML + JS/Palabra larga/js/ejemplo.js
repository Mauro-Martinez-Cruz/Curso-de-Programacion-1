window.addEventListener("load", inicio);


function inicio(){
	document.getElementById("idBoton").addEventListener("click", proceso);
	document.getElementById("idEnTabla").addEventListener("click", mostrar);
	document.getElementById("idEnLista").addEventListener("click", mostrar);
}

function proceso(){
	let palabraIng = document.getElementById("idPalabra").value;
	let textoAMostrar = palabraIng + " no es larga";
	let resultado = verSiLarga(palabraIng);
	if(resultado){
		textoAMostrar = palabraIng + " es larga";
		agregarEnLista(palabraIng);
		agregarEnTabla(palabraIng);
		mostrar();
	}
	document.getElementById("pResultado").innerHTML=textoAMostrar;
	document.getElementById("idPalabra").value="";
}

function verSiLarga(texto){
	return texto.length > 10;
}

function agregarEnLista(texto){
	let nodo = document.createElement("li");
	let nodoTexto = document.createTextNode(texto);
	nodo.appendChild(nodoTexto);
	document.getElementById("idLista").appendChild(nodo);
}

function agregarEnTabla(texto){
	let tabla = document.getElementById("idTabla");
	let fila = tabla.insertRow();
	let celda = fila.insertCell();
	celda.innerHTML = texto;
}

function mostrar(){
	let selec = document.getElementById("idEnTabla");
	if(selec.checked){
		document.getElementById("idTabla").style.display="block";
		document.getElementById("idLista").style.display="none";
	}else{
		document.getElementById("idTabla").style.display="none";
		document.getElementById("idLista").style.display="block";
	}
}












