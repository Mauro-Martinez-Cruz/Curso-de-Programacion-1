let numeroSecreto = 0;
//let numeroSecreto = generar(4);
let veces = 0;
let cantAp = 0;

window.addEventListener("load",inicio);

function inicio(){
    numeroSecreto = generar(4);
    document.getElementById("idBotonGenerar").addEventListener("click", comenzar);
    document.getElementById("idBotonAyuda").addEventListener("click", ayuda);
    document.getElementById("idBotonAdivinar").addEventListener("click", apostar);
}

function ayuda(){
    //alert(numeroSecreto);
    let valor = numeroSecreto;
    let pos = getRandomInt(0,valor.length);
    valor = valor.substring(0,pos) + "*" + valor.substring(pos+1);
    alert(valor);
}

function comenzar(){
    cantAp = 0;
    veces++;
    alert(veces);
    let miFormulario = document.getElementById("idFormulario");
    if(miFormulario.reportValidity()){
        let tope = parseInt(document.getElementById("idNumero").value);
        numeroSecreto = generar(tope);
        limpiarLista();
    }
}

function apostar(){
    let miFormulario = document.getElementById("idFormulario");
    if(miFormulario.reportValidity()){
        let apuesta = document.getElementById("idApuesta").value;
        if(!validarBienFormato(apuesta)){
            alert("formato incorrecto!!!")
        }
        else{
            cantAp++;
            let info = "";
            if(numeroSecreto == apuesta){
                info = "acerto!";
            }
            else{
                let contarBien = coinciden(apuesta,numeroSecreto);
                let contarReg = parecidas(apuesta,numeroSecreto);
                info = apuesta + " tiene " + contarBien + " bien " + 
                       contarReg + " regular";
            }
            agregarEnLista(info);
            //alert(cantAp);
            let cant = document.getElementsByTagName("li").length;
            alert(cant);
        }
        document.getElementById("idApuesta").value = "";
    }
}

function coinciden(ingreso, clave){
    let bien = 0;
    for(let i = 0; i < clave.length; i++){
        if(ingreso[i] == clave[i]){
            bien++;
        }
    }
    return bien;
}

function parecidas(ingreso, clave){
    let regular = 0;
    for(let i = 0; i < clave.length; i++){
        let digito = ingreso[i];
        if(clave.includes(digito) && clave[i] != digito){
            regular++;
        }
    }
    return regular;
}

function validarBienFormato(ingreso){
    let ok = true;
    if(ingreso.length != 4){
        ok = false;
    }
    else{
        for(let i = 0; i < ingreso.length && ok; i++){
            for(let j = i+1; j < ingreso.length && ok; j++){
                let dig1 = ingreso[i];
                let dig2 = ingreso[j];
                if(dig1 == dig2){
                    ok = false;
                }
            }
        }
    }
    return ok;
}

function validarBienFormato_v2(ingreso){
    let ok = ingreso.length == 4;
    for(let i = 0; i < ingreso.length && ok; i++){
        for(let j = i+1; j < ingreso.length && ok; j++){
            let dig1 = ingreso[i];
            let dig2 = ingreso[j];
            if(dig1 == dig2){
                ok = false;
            }
        }
    }
    return ok;
}

function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}

function generar(tope){
    let res = "" + getRandomInt(1,tope+1);
    for(let i = 1; i <= 3; i++){
        let num = getRandomInt(1, tope+1);
        while(res.includes(num)){
            num = getRandomInt(1, tope+1);
        }
        res = res + "" + num;
    }
    return res;
}

function agregarEnLista(texto){
    let lista = document.getElementById("idRespuestas");
    let nodo = document.createElement("li");
    let nodoTexto = document.createTextNode(texto);
    nodo.appendChild(nodoTexto);
    lista.appendChild(nodo);
}

function limpiarLista(){
    let lista = document.getElementById("idRespuestas");
    lista.innerHTML = "";
}