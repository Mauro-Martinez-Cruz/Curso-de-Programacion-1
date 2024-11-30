//Cálcular de IVA
let precio = parseInt(prompt("ingrese precio"));
console.log("el precio total es ", precio*1.22);

//Leer 10 números y mostrar la suma
//for
let suma = 0;
let i;
let dato;
for(let i = 0; i <= 10; i = i+1){
	dato = parseInt(prompt("Ingrese dato"));
	suma = suma + dato;
}
alert("La suma es " + suma);

//while
let suma = 0;
let van = 0;
let dato;
while(van < 10){
	dato = parseInt(prompt("Ingrese dato"));
	suma = suma + dato;
	van = van + 1;
}
alert("La suma es " + suma);

//Leer 3 datos, 2 repetidos, indicar el repetido
let a = parseInt(prompt("Ingrese el primer dato: "));
let b = parseInt(prompt("Ingrese el segundo dato: "));
let c = parseInt(prompt("Ingrese el tercer dato: "));
if(a === b){
	alert("El valor repetido es " + a);
}
else{
	alert("El calor repetido es " + c);
}


//Leer 4 números y mostrar su suma
let suma = 0;
for (let i = 1; i <= 4; i++){    
	let dato = parseInt(prompt("Ingrese dato"));    
	suma = suma + dato;
}
alert(suma);


//Máximo
let max = Number.MIN_SAFE_INTEGER;
let huboDatos = false;
let resp = prompt("quiere ingresar datos?");
while (resp==="S"){
    let dato = parseInt(prompt("Dato"));
    huboDatos = true;
    if (dato> max){
        max = dato;
    }
    resp = prompt("mas datos?");
}
if (huboDatos){
    alert("Maximo vale "+ max);
}
else {
    alert("no hubo datos");
}

//Ingrese a, b y c y determinar las raíces de la ecuación de 2do grado
let a = parseInt(prompt("coeficiente de 2do grado "));
let b = parseInt(prompt("coeficiente de 1er grado "));
let c = parseInt(prompt("termino independiente "));
let disc = b*b - 4 *a * c;
if (disc <0){
       alert("sin raices reales");
}
else {
       if (disc===0){
           let x = - b / (2*a);
           alert("doble "+ x);

       }
       else {
           let x1 = (- b+ Math.sqrt(disc))/(2*a);
           let x2 = (- b- Math.sqrt(disc))/(2*a);
           alert("raices "+ x1 + " " +x2);
           
       }
}

//Conjetura de Collatz
let n = parseInt(prompt("numero"));
while (n !=1){
    console.log(n);
    if (n%2==0){
        n = n/2;
    }
    else{
        n = n*3+1;
    }
}

//Leer n, mostrar n filas según el patrón
//Ejemplo: n = 5
//
//1 2 3 PUM
//5 6 7 PUM
//9 10 11 PUM
//13 14 15 PUM
//17 18 19 PUM

let n = prompt("n");
let cont = 1;
for (let i = 1; i <= n; i++){
    console.log(cont+ " "+ (cont+1)+ " "+ (cont+2)+ " "+ "PUM");
    cont = cont+4;
}

