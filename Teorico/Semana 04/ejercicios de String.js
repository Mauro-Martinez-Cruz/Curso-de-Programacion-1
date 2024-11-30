/*
Leer 2 palabras e indicar cuántos caracteres de más tiene la más larga respecto a la más corta

Ej. Verano Primavera
Respuesta: 3
*/
let p1 = prompt("palabra 1");
let p2 = prompt("palabra 2");
alert(Math.abs(p1.length-p2.length));

/*
Leer string y decir si palabra es panvocálica, esto es que contiene todas las vocales 
Ejs: centrifugado, educativo
*/
let p1 = prompt("palabra 1").toUpperCase();
if (p1.includes("A")&& p1.includes("E")&& 	p1.includes("I")&& p1.includes("O")&& 	p1.includes("U")){
    alert("panvocalica");
}
else {
    alert("no panvocalica");
}

/*
Ana y Beatriz tienen un piano en la casa. Todos los días tienen que practicar una vez. 
Se lleva anotado quien practica, durante un largo período. 
Verificar si esa anotación es válida (tiene cantidad par de letras). 
Ej: 
AB valida, 
ABAA no valida, 
ABBABABAAB valida
*/
let datos = prompt("secuencia");
let ok = true;
for (let i = 0; i < datos.length; i= i+2){
    let parte = datos.substring(i, i+2);
    if (!parte.includes("A") || !parte.includes("B") ){
        ok = false;
    }
}
if (ok){
    alert("OK");
}
else {
    alert("NO OK");
}

/*
Leer 2 String del mismo largo que corresponden a secuencias de ADN. 
Calcular la distancia de Hamming, esto es la cantidad de posiciones que no coinciden
*/
let p1 = prompt("palabra 1");
let p2 = prompt("palabra 2");
let cant = 0;
for (let i = 0; i < p1.length; i++){
    if (p1.charAt(i)!= p2.charAt(i)){
        cant++;
    }
}
alert(cant);

/*
Leer String e indicar letra más repetida. 
Si varias, cualquiera de ellas
*/
let p = prompt("palabra");
let max = 0;
let letraMas= "";
for (let i = 0; i < p.length; i++){
    let letra = p.charAt(i);
    let vecesLetra = 0;
    for (let j = 0; j<p.length; j++){
        if (p.charAt(j)==letra){
            vecesLetra++;
        }
    }
    if (vecesLetra>max){
        max = vecesLetra;
        letraMas = letra;
    }
}
alert(letraMas+ " esta " + max);

/*
Ejercicio tipo parcial:
Leer un string que representa un párrafo. Indicar si es válido. 

Se considera válido si tiene más de 20 caracteres y cada vez que 
hay una coma, el siguiente carácter es un espacio. 

Ejemplos: 
“Este es el texto. Para revisar, mañana sin falta.” Es válido 
“Esta frase aunque larga,no es ok, opss”            No es válido 
“Frase larga y también incorrecta,”                 No es válido
*/
let frase = prompt("frase");
let ok = true;
if(frase.length >= 20){
	ok = false;
}
else{
	for(let i = 0; i < frase.length; i++){
		if(frase.charAt(i) == ","){
			if(i < frase.length - 1){
				if(frase.charAt(i + 1) != " "){
					ok = false;
				}
			}
			else{
				ok = false;
			}
		}
	}
}
if(ok){
	alert("valida!");
}
else{
	alert("no valida!");
}