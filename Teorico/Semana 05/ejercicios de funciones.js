//Ejercicio elefantes
function estribillo(cantidad){
    let pluralS= "";
    let pluralN ="";
	let pluralRON = "";
    if (cantidad> 1){
        pluralS = "s";
        pluralN = "n";
		pluralRON = "ron";
    }
    console.log(cantidad + " elefante"+ pluralS+ "  se balanceaba" + pluralN)
    console.log("sobre la tela de una araña");
    console.log("Como veía que resistía”);
    console.log("fue" + pluralRON + " a llamar otro elefante.");
}

/*
CONVERTIR MILLAS A KM
Hacer función que recibe la cantidad de millas y retorna el equivalente en km.
*/
function convertirAKM(cant){
    return cant*1.069;
}

//Invocación: 
convertirAKM(100);


/*
Hacer función que retorne si dos números son múltiplos
Ej
6, 25   retorna falso
24, 6	retorna true
*/
function multiplos(a,b) {
	return (a%b==0) || (b%a==0);
}

multiplos(6,25);

/*
Hacer función que reciba dos strings del mismo largo y una letra, debe retornar 
cuántas veces esa letra está en la misma posición en los dos strings

Ejemplo:
caserios
cacerola

Si recibe la letra e, debe retornar 1.  Si recibe la letra s, retorna 0
*/
function mismaPosicion(frase1, frase2, letra){
    let veces = 0;
    for (let i = 0; i < frase1.length; i++){
        if (frase1.charAt(i)==frase2.charAt(i) && letra == frase2.charAt(i)){
            veces++;
        }
    }
    return veces;
}
alert(mismaPosicion("hola", "masa","a"));

/*
Retornar el porcentaje de G y C en ADN
ADN:  C G A T
*/
function porcentaje(adn){
    let cant = 0;
    for (let i = 0; i < adn.length; i++){
        if (adn.charAt(i)=="C" || adn.charAt(i)=="G"){
            cant++;
        }
    }
    return cant*100/adn.length;
}
 
alert("porcentaje "+ porcentaje("ADCCG"));

/*
Dada una hora y una diferencia, calcular la hora local de ese lugar.

Ejemplo:
23 hs, 5 hs de diferencia 	corresponde 4 
23 hs, -3 hs de diferencia corresponde 20
6 hs y -8 hs de diferencia 	corresponde 22
6 hs y 4 hs de diferencia 	corresponde 10
1 hs y -2 hs de diferencia corresponde 23
23 hs y 1 hs de diferencia corresponde 0

*/
function calcularHora(hora, diferencia) {
    let aux = hora + diferencia;
    if (aux < 0) {
        aux = aux + 24;
    } 
    else {
        if (aux >= 24) {
            aux = aux - 24;
        }
    }
    return aux;
}
alert(calcularHora(23,-5));
alert(calcularHora(23,5));
alert("llega a "+ calcularHora(calcularHora(22, -2), 6));

/*
Combinaciones de m tomadas de a n es:
m!/((m-n!)*n!)
*/
function factorial(n){
    let res = 1;
    for (let i = 2; i <=n; i++){
        res = res * i;
    }
    return res;
}
 
function combinaciones(m,n){
    return factorial (m)/(factorial(n)*factorial(m-n));
}
alert (combinaciones(5,2));

/*
Calcular distancia entre dos puntos
*/
function distancia(x1,y1, x2, y2){
    let difx = Math.pow(x1-x2,2);
    let dify = Math.pow(y1-y2,2);
    return Math.sqrt(difx+dify);
}
alert(distancia(3,2,7,8));

/*
Hacer función que reciba una frase e indique si está toda en mayúsculas, minúsculas o combinadas
function info(cadena)
*/
function info(cadena) {
    let resultado = "La cadena \"" + cadena + "\" ";
    // Comprobar mayúsculas y minúsculas
    if (cadena == cadena.toUpperCase()) {
        resultado += " está formada sólo por mayúsculas";
    } else {
        if (cadena == cadena.toLowerCase()) {
            resultado += " está formada sólo por minúsculas";
        } else {
            resultado += " está formada por mayúsculas y minúsculas";
        }
    }
     return resultado;
}
alert(info(prompt("frase")));

/*
Intercalar strings (pueden ser de distinto largo)
*/
function combinar(primera, segunda) {
    let min = Math.min(primera.length, segunda.length);
    let nuevo = "";
    for (let i = 0; i < min; i++) {
        nuevo = nuevo + primera.charAt(i) + segunda.charAt(i);
    }
    if (primera.length > min) {
        nuevo = nuevo + primera.substring(min);
    }
    if (segunda.length > min) {
        nuevo = nuevo + segunda.substring(min);
    }
    return nuevo;
}
alert(combinar("abcd", "pqrtsts"));

/*
Un string es armónico si la cantidad de letras “a” en posiciones pares es 
igual a la cantidad de letras “b” en posiciones impares. 

Ej. “AfgBmbasAabxb” no es armónico ya que hay 3 letras A en posiciones pares 
(posiciones: 0,6,8) y 2 letras “B” en posiciones impares (posiciones: 3,5). 

Hacer una función en JS que reciba un string y retorne si es armónico o no.
Asumir largo par.
*/
function armonico(st) {
    let qa = 0;
    let qb = 0;
    for (let i = 0; i < st.length; i = i + 2) {
        if (st.charAt(i) == "A") {
            qa++;
        }
        if (st.charAt(i + 1) == "B") {
            qb++;
        }

    }
    return (qa == qb);
}

/*
Dado un string, retornar uno nuevo donde cada letra esté repetida según su posición.
Ejemplo:
Lee: “hola”, genera: hoolllaaaa
Lee: “parcial”, genera: paarrrcccciiiiiaaaaaalllllll

*/
function paso(pal) {
    let nuevo = "";
    for (let i = 0; i < pal.length; i++) {
        let cual = pal.charAt(i);
        for (let j = 1; j <= (i + 1); j++) {
            nuevo = nuevo + cual;
        }
    }
    return nuevo;
}
alert(paso("hola"));

/*
Dos contraseñas tienen el mismo patrón cuando la diferencia entre cada uno de sus dígitos 
posición a posición es la misma.  Se asumen del mismo largo.
Ejemplo: contraseñas 2406 y 5739 tienen el mismo patrón:
 

Explicación: 2 y 5 difieren en +3, 4 y 7 difieren en +3, 0 y 3 difieren en +3, 6 y 9 difieren en +3
Ejemplo: 75920 y 64831 no tienen el mismo patrón.

Implementar en JS la función verificar que recibe dos contraseñas y retorna el valor booleano 
correspondiente. Anotar la invocación para probar en la consola con las contraseñas 2402 y 5523.
function patron (clave1, clave2)
*/
function patron(d1, d2) {
    let ok = true;
    let aux = d1.toString().charAt(0) - d2.toString().charAt(0);
    for (let i = 1; i < d1.toString().length; i++) {
        let dif2 = d1.toString().charAt(i) - d2.toString().charAt(i);
        if (dif2 != aux) {
            ok = false;
        }
    }
    return ok;
}

/*
En un club se asigna como contraseña a cada socio un string generado de la siguiente forma: 
comienza con las letras “CA” (contraseña asignada) y luego 18 dígitos, los cuales inician 
con ceros (eventualmente ninguno) y terminan con el número de socio particular. 
Ejemplos: 	CA000000000000012340 es del socio 12340
		CA123456789012345678 es del socio 123456789012345678
		CA000000000000000100 es del socio 100
		CA12345 es inválida
		12345678901234567890 es inválida
 
Implementar una función que recibe la contraseña y retorna el número de socio particular o 
el aviso de que no es válida. Ejemplificar la invocación con la contraseña CA12345
function proceso(contraseña)
*/
function proceso(c){
    let ok = true;
    if (c.length<18 || !c.startsWith("CA") ){
        ok = false;
    }
    else {
        let num = parseInt(c.substring(2));
        ok = num;
    }
    return ok;
}
alert(proceso("CA000000000000012340"));