//Leer 2 números y mostrar los múltiplos de ambos entre 1 y 100
let n1 = parseInt(prompt("dato"));
let n2 = parseInt(prompt("dato"));
for (let i = 1; i <= 100; i++){
    if (i%n1==0 && i%n2==0){
        alert(i);
    }
}

//Leer n, imprimir 2*n líneas según esta lógica:
//Ej. n = 4
//1 1 1
//1 2 2
//2 4 8
//2 5 9
//3 9 27
//3 10 28
//4 16 64
//4 17 65
let n = parseInt(prompt("n"));
for (let i = 1; i<=n; i++){
    console.log(i+ " " + i*i+" " + i*i*i);
}

//Leer n y calcular PI con esa cantidad de términos en la suma.
//La fórmula es: 4*(1/1 - 1/3 + 1/5 - 1/7 + ...)
//
//Ej. Si n es 4, la suma incluye hasta -1/7
let n1 = parseInt(prompt("dato"));
let pi = 0;
let signo = 1;
for (let i = 1; i<= n1; i++){
    let termino = 1/(2*i-1);
    pi = pi + signo*termino;
    signo = -signo;
}
pi = 4*pi;
alert(pi);

/*Consumo de Internet
A partir de los mega descargados, indicar el costo a pagar. Cada mega vale 1 peso. 
Se ingresa primero la cantidad de megas gratis del plan. 
Luego se ingresa la cantidad de usos. Por cada uso, se indica los megas bajados. 
Ej. 10 (esto es, 10 mega gratis), 5 (5 lecturas), 6 2 1 4 20, se pagan $23	
*/
let gratis = parseInt(prompt("gratis"));
let usos = parseInt(prompt("usos"));
let total = 0;
for (let i = 1; i <= usos; i++) {
    let cant = parseInt(prompt("cant"));
    total = total + cant;
}
if (total<= gratis) {
	alert("no se paga nada");}
else {
	alert(total - gratis);
}

/*Avión
Leer 6 números, representan la cantidad de pollo/pasta/carne 
disponible en un avión y la cantidad pedida de cada una. 
Indicar cuántos pasajeros no tendrán su primera elección
pollo d; pasta d; carne d; pollo p; pasta p; carne p
*/
let pasta = parseInt(prompt("pasta"));
let pollo = parseInt(prompt("pollo"));
let carne = parseInt(prompt("carne"));
let pastaP = parseInt(prompt("pasta"));
let polloP = parseInt(prompt("pollo"));
let carneP = parseInt(prompt("carne"));
let total = 0;
if (pastaP > pasta){
    total = total + pastaP-pasta;
}
if (carneP > carne){
    total = total + carneP-carne;
}
if (polloP > pollo){
    total = total + polloP-pollo;
}
alert(total);

/*Colores
RGB: 3 enteros de 0 a 255
a) Un color es “aburrido” si y sólo sí todos los pares de valores 
de sus componentes no difieren entre sí en más de un valor V dado. 
Se ingresan los valores de R, G, B y V e indicar si es aburrido. 
*/
let r = parseInt(prompt("Rojo"));
let g = parseInt(prompt("Verde"));
let b = parseInt(prompt("Azul"));
let v = parseInt(prompt("Valor"));
let res= "no aburrido";
if ((Math.abs(b - r) <= v) && (Math.abs(b - g) <= v) && (Math.abs(g - r) <= v)) {
    res = "aburrido";
}
alert (res);

/*b) Asumiendo R= 50, generar todos los colores posibles con G y B 
entre 100 y 105
*/
for (let i = 100; i <= 105; i++) {
    for (let j =100; j <= 105; j++) {
        console.log("Color Rojo 50 Verde "+i+ " Azul " + j);
    }
}

/*Ejemplo parcial*
Realizar un programa en JS para eventos. 
Se ingresarán datos de eventos hasta que el usuario indique la palabra “fin”. 
De cada evento se solicita al usuario su tipo ("público" o "privado") y la 
cantidad de personas que asistieron a ese evento particular. Se asume que 
todos los datos ingresados son válidos. 
Al final, indicar cuál tipo de evento tuvo en total más participantes o si 
ambos tipos tuvieron la misma cantidad total.

Agregarle que si hubo ningún dato, avisa.
Además, si hubo datos, informar el promedio de asistencia de personas en 
los eventos de tipo "privado".
*/
let totalPub = 0;
let totalPriv = 0;
let cantPriv = 0;

let tipo = "";
while(tipo != "fin"){
	tipo = prompt("tipo: ");
	if(tipo != "fin"){
		let cant = parseInt(prompt("cantidad"));
		if(tipo == "publico"){
			totalPub += cant;
		}
		else{
			totalPriv += cant;
			cantProv += 1;
		}
	}
}
if(totalPub + totalPriv == 0){
	alert("no hubo datos");
}
else{
	if(totalPub == totalPriv){
		alert("misma cantidad");
	}
	else{
		if(totalPub < totalPriv){
			alert("mas en privado");
		}
		else{
			alert("mas en publico");
		}
	}
	if(totalPriv > 0){
		alert("Promedio en privado " + totalPriv/cantPriv);
	}
}
