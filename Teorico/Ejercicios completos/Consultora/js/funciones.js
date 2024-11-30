window.addEventListener("load",inicio);

let ultimoEstilo = 0;
let sistema = new Sistema();

let e1= new Empresa("Empresa 1", "18 de Julio 1234",1111);
let e2= new Empresa("Empresa 2", "Yaguaron 2222", 4444);

let f1 = new Funcion("Programador", "Programa", 1);
let f2 = new Funcion("Arquitecto", "disena la solucion", 2);
let f3 = new Funcion("Jefe", "controla el desarrollo", 2);
let f4 = new Funcion("Secretaria", "administracion", 1);
let f5 = new Funcion("CEO", "dirige toda el area ", 5);

let p1 = new Puesto(e1, f1, "Programador de Java", 5100);
let p2 = new Puesto(e1, f2, "Arquitecto especializado", 4400);
let p3 = new Puesto(e2, f3, "Jefe de proyecto", 500);
let p4 = new Puesto(e1, f1, "Programacion de C++", 8100);
let p5 = new Puesto(e2, f4, "Secretaria bilingue", 3100);
let p6 = new Puesto(e1, f1, "Programador web", 400);
let p7 = new Puesto(e1, f5, "CEO general", 8700);

sistema.agregarEmpresa(e1);
sistema.agregarEmpresa(e2);

sistema.agregarFuncion(f1);
sistema.agregarFuncion(f2);
sistema.agregarFuncion(f3);
sistema.agregarFuncion(f4);
sistema.agregarFuncion(f5);

sistema.agregarPuesto(p1);
sistema.agregarPuesto(p2);
sistema.agregarPuesto(p3);
sistema.agregarPuesto(p4);
sistema.agregarPuesto(p5);
sistema.agregarPuesto(p6);
sistema.agregarPuesto(p7);


function inicio(){
    document.getElementById("idCambiarEstilo").addEventListener("click", cambiarEstilo);

    document.getElementById("idBotonE").addEventListener("click", agregarEmpresa);
    document.getElementById("idBotonF").addEventListener("click", agregarFuncion);
    document.getElementById("idBotonP").addEventListener("click", agregarPuesto);
    document.getElementById("idBotonTipoMayor").addEventListener("click", calcularTipoMas);
    document.getElementById("idBotonConsultarPromedio").addEventListener("click", consultarPromedio);
    document.getElementById("idBotonListadoPuestos").addEventListener("click", cargarTabla);

    cargar();
}

function cambiarEstilo(){
    let miEstilo = document.getElementById("idEstilo");
    if(ultimoEstilo%2==0){
        miEstilo.href = "css/estilos4.css"
    }
    else{
        miEstilo.href = "css/estilos10.css"  
    }
    ultimoEstilo++;
}

function calcularTipoMas(){
    let par = document.getElementById("idTipoMasSolicitado");
    let resul = sistema.tipoMasSolicitado();
    if(resul == 0){
        resul = "sin datos";
    }
    par.innerHTML = resul;
}

function limpiar(){
    document.getElementById("idFormularioEmpresa").reset();
    document.getElementById("idFormularioFunciones").reset();
    document.getElementById("idFormularioPuestos").reset();
    document.getElementById("idTipoMasSolicitado").innerHTML="";
    document.getElementById("idSueldoPromedio").innerHTML="";
    document.getElementById("idTablaPuestos").innerHTML="";
    

    cargar();
}

function cargar(){
    cargarLista("idListaE", sistema.listaEmpresas);
    cargarLista("idListaF", sistema.listaFunciones);

    cargarComboFunciones();
    cargarComboEmpresas();
}

function consultarPromedio(){
    let indiceF = document.getElementById("idComboFuncionesConsulta").selectedIndex; 
    let funcion = sistema.darFuncionIndice(indiceF);
    let resp = sistema.promedioFuncion(funcion);
    document.getElementById("idSueldoPromedio").innerHTML = resp;
}

function agregarEmpresa(){
    if(document.getElementById("idFormularioEmpresa").reportValidity()){
        let nombre = document.getElementById("idTxtNombreE").value;
        let direccion = document.getElementById("idTxtDireccion").value;
        let rut = document.getElementById("idTxtRUT").value;
        sistema.agregarEmpresa(new Empresa(nombre,direccion,rut));
        limpiar();
    }
}

function agregarFuncion(){
    if(document.getElementById("idFormularioFunciones").reportValidity()){
        let nombre = document.getElementById("idTxtNombreF").value;
        let descripcion = document.getElementById("idTxtDescripcion").value;
        let tipo = parseInt(document.getElementById("idTxtTipo").value);
        sistema.agregarFuncion(new Funcion(nombre,descripcion,tipo));
        limpiar();
    }
}

function agregarPuesto(){
    if(document.getElementById("idFormularioPuestos").reportValidity()){
        let indiceE = document.getElementById("idComboEmpresas").selectedIndex;
        let indiceF = document.getElementById("idComboFuncionesPuesto").selectedIndex;

        let detalle = document.getElementById("idTxtDetalle").value;
        let sueldo = parseInt(document.getElementById("idTxtSueldo").value);
        let empresa = sistema.darEmpresaIndice(indiceE);
        let funcion = sistema.darFuncionIndice(indiceF);
        sistema.agregarPuesto(new Puesto(empresa,funcion,detalle,sueldo));
        limpiar();
    }
}

function cargarLista(elemento, datos){
    let lista = document.getElementById(elemento);
    lista.innerHTML = "";
    for(let elem of datos){
        let nodo = document.createElement("LI");
        let nodoTexto = document.createTextNode(elem);
        nodo.appendChild(nodoTexto);
        lista.appendChild(nodo);
    }
}

function cargarComboFunciones(){
    cargarCombo("idComboFuncionesPuesto", sistema.listaFunciones);
    cargarCombo("idComboFuncionesConsulta", sistema.listaFunciones);
}

function cargarComboEmpresas(){
    cargarCombo("idComboEmpresas", sistema.listaEmpresas);
}

function cargarCombo(elemento, datos){
    let combito = document.getElementById(elemento);
    combito.innerHTML = "";
    for(let elem of datos){
        let nodo = document.createElement("option");
        let nodoTexto = document.createTextNode(elem);
        nodo.appendChild(nodoTexto);
        combito.appendChild(nodo);
    }
}

function cargarTabla(){
    let tablita = document.getElementById("idTablaPuestos");
    tablita.innerHTML = "";
    let datos = sistema.ordenar();
    for(let elem of datos){
        let fila = tablita.insertRow();
        let celda = fila.insertCell();
        celda.innerHTML = elem;
    }
}