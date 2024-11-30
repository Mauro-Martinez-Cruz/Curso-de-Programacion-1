window.addEventListener("load", inicio);
let agenda = new Agenda();

function inicio(){
    document.getElementById("idBotonAgregar").addEventListener("click", agregarContacto);
    document.getElementById("idBotonJovenes").addEventListener("click", consultarJovenes);
    document.getElementById("idBotonEliminar").addEventListener("click", eliminar);
    datosDePrueba();
    actualizar();
}

function datosDePrueba(){
    agenda.agregar(new Contacto("Gonzalo", "Wagner", 31, "099123123"));
    agenda.agregar(new Contacto("Ana", "Perez", 22, "099456456"));
    agenda.agregar(new Contacto("Gaston", "Ramirez", 35, "099852852"));
    agenda.agregar(new Contacto("Leo", "Fernandez", 19, "099741852"));
    agenda.agregar(new Contacto("Federico", "Valverde", 25, "098741741"));
}

function agregarContacto(){
    if(document.getElementById("idFormulario").reportValidity()){
        let nombre = document.getElementById("idNombre").value;
        let apellido = document.getElementById("idApellido").value;
        let edad = parseInt(document.getElementById("idEdad").value);
        let telefono = document.getElementById("idTelefono").value;
        if(!agenda.estaTelefono(telefono)){
            agenda.agregar(new Contacto(nombre, apellido, edad, telefono));
            document.getElementById("idFormulario").reset();
            actualizar();
            alert("La cantidad de contactos con la misma edad son: " + agenda.cantidadMismaEdad());
        }
        else{
            alert("¡Teléfono repetido!")
        }
        
    }
}

function actualizar(){
    //cargarLista();
    cargarLista2("idLista", agenda.darTodos());
    limpiarTabla();
    //cargarCombo();
    cargarCombo2("idComboContactos", agenda.darTodos());
    mostrarMasJoven();
    mostrarCantidad();
}

function cargarLista(){
    let lista = document.getElementById("idLista");
    lista.innerHTML = "";
    let datos = agenda.darTodos();
    for(let elem of datos){
        let nodo = document.createElement("LI");
        let nodoTexto = document.createTextNode(elem);
        nodo.appendChild(nodoTexto);
        lista.appendChild(nodo);
    }
}

function consultarJovenes(){
    //cargarTabla();
    let titulo = ["Nombre","Apellido","Edad"]
    cargarTabla2("idTablaJovenes", agenda.darJovenes(), titulos);
}

function limpiarTabla(){
    document.getElementById("idTablaJovenes").innerHTML = "";
}

function cargarTabla(){
    let tabla = document.getElementById("idTablaJovenes");
    tabla.innerHTML = "";
    let datos = agenda.darJovenes();
    if(datos.length == 0){
        tabla.innerHTML = "SIN DATOS";
    }
    else{
        let fila = tabla.insertRow();
        let head1 = document.createElement("th");
        head1.innerHTML = "Nombre"
        fila.appendChild(head1);
        let head2 = document.createElement("th");
        head2.innerHTML = "Apellido"
        fila.appendChild(head2);
        let head3 = document.createElement("th");
        head3.innerHTML = "Edad"
        fila.appendChild(head3);
        for(let elem of datos){
            let fila = tabla.insertRow();
            let celda1 = fila.insertCell();
            celda1.innerHTML = elem.nombre;
            let celda2 = fila.insertCell();
            celda2.innerHTML = elem.apellido;
            let celda3 = fila.insertCell();
            celda3.innerHTML = elem.edad;
        }
    }
}

function eliminar(){
    let elegido = document.getElementById("idComboContactos").selectedIndex;
    agenda.eliminar(elegido);
    actualizar();
}

function cargarCombo(){
    let combo = document.getElementById("idComboContactos");
    combo.innerHTML = "";
    let datos = agenda.darTodos();
    for(let elem of datos){
        let nodo = document.createElement("option");
        let nodoTexto = document.createTextNode(elem);
        nodo.appendChild(nodoTexto);
        combo.appendChild(nodo);
    }
}

function mostrarMasJoven(){
    let p = document.getElementById("idMasJoven");
    let datos = agenda.darTodos();
    if(datos.length == 0){
        p.innerHTML = "Más joven: SIN DATOS";
    }
    else{
        p.innerHTML = "Más joven: " + agenda.masJoven();
    }
}

function mostrarCantidad(){
    let titulo = document.getElementById("idCant");
    titulo.innerHTML = agenda.darTodos().length;
}

function cargarLista2(lista, datos){
    let lista = document.getElementById(lista);
    lista.innerHTML = "";
    for(let elem of datos){
        let nodo = document.createElement("LI");
        let nodoTexto = document.createTextNode(elem);
        nodo.appendChild(nodoTexto);
        lista.appendChild(nodo);
    }
}

function cargarEncabezado(tabla, titulos){
    let tablita = document.getElementById(tabla);
    let heade = tablita.createTHead();
    let row = heade.insertRow();
    for(let titulo of titulos){
        cell = document.createElement("th");
        cell.innerHTML = titulo;
        row.appendChild(cell);
    }
}

function cargarTabla2(tabla, datos, titulos){
    let tablita = document.getElementById(tabla);
    tablita.innerHTML = ""
    cargarEncabezado(tabla, titulos);
    for(let elem of datos){
        let fila = tablita.insertRow();
        let celda1 = fila.insertCell();
        celda1.innerHTML = elem.nombre;
        let celda2 = fila.insertCell();
        celda2.innerHTML = elem.apellido;
        let celda3 = fila.insertCell();
        celda3.innerHTML = elem.edad;
    }
}

function cargarCombo2(cualCombo, datos){
    let combito = document.getElementById(cualCombo);
    combito.innerHTML = "";
    for (elemento of datos){
        let nodoC = document.createElement("option");
        let nodoTextoC = document.createTextNode(elemento);
        nodoC.appendChild(nodoTextoC);
        combito.appendChild(nodoC);
    }
}