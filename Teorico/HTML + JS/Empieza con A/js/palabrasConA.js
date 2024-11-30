window.addEventListener("load",inicio);

function inicio (){
	document.getElementById("idBoton").addEventListener("click",proceso);
}

function proceso(){
	let pal = document.getElementById("idPalabra").value;
	let resp = pal;
	if(pal.charAt(0) == "A" || pal.charAt(0) == "a"){
		resp += " empieza con A";
		cargarCombo(pal);
	}else{
		resp += " no empieza con A";
	}
	cargarLista(resp);
}

function cargarLista(texto){
	let lista = document.getElementById("idLista");
	let nodo = document.createElement("LI");
	let textNodo = document.createTextNode(texto);
	nodo.appendChild(textNodo);
	lista.appendChild(nodo);
}

function cargarCombo(texto){
	let combo = document.getElementById("idCombo");
	let nodo = document.createElement("option");
	let textNodo = document.createTextNode(texto);
	nodo.appendChild(textNodo);
	combo.appendChild(nodo);
}










