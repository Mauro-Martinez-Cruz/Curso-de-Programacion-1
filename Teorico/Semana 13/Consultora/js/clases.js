class Empresa{
    constructor(nombre, direccion, rut){
        this.nombre = nombre;
        this.direccion = direccion;
        this.rut = rut;
    }

    toString(){
		return this.nombre + " en: " + this.direccion + " RUT: " + this.rut;
	}
}

class Funcion{
    constructor(nombre, descripcion, tipo){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipo = tipo;
    }

    toString(){
		return this.nombre + " " + this.descripcion + " tipo: " + this.tipo;
	}
}

class Puesto{
    constructor(empresa, funcion, detalle, sueldo){
        this.empresa = empresa;
        this.funcion = funcion;
        this.detalle = detalle;
        this.sueldo = sueldo;
    }

    toString(){
		return this.empresa + "\n " + this.funcion + "\n " + this.detalle + "\n " + this.sueldo;
	}

    compararCon(otro){
        //this -> a / otro -> b
        // < 0 : a va despues que b
        // > 0 : a va antes que b
        // = 0 : son iguales
        return otro.sueldo - this.sueldo;
    }
}

class Sistema{
    constructor(){
        this.listaEmpresa = [];
        this.listaFunciones = [];
        this.listaPuestos = [];
    }

    agregarEmpresa(unaEmpresa){
        this.listaEmpresa.push(unaEmpresa);
    }

    agregarFuncion(unaFuncion){
        this.listaFunciones.push(unaFuncion);
    }

    agregarPuesto(unPuesto){
        this.listaPuestos.push(unPuesto);
    }

    darEmpresaIndice(unIndice){
        return this.listaEmpresa[unIndice];
    }

    darFuncionIndice(unIndice){
        return this.listaFunciones[unIndice];
    }

    promedioFuncion(unaFuncion){
        let suma = 0;
        let cant = 0;
        for(let elem of this.listaPuestos){
            if(elem.funcion == unaFuncion){
                suma += elem.sueldo;
                cant++;
            }
        }
        let retorno = "Sin datos";
        if(cant > 0){
            retorno = (suma/cant).toFixed(2);
        }
        return retorno;
    }

    tipoMasSolicitado(){
        let tot = [0,0,0,0,0,0];
                // 0 1 2 3 4 5
        for(let elem of this.listaPuestos){
            let tipo = elem.funcion.tipo;
            tot[tipo]++;
        }

        let max = 0;
        let tipoMax = 0;
        for(let i = 1; i <= 5; i++){
            if(tot[i] > max){
                max = tot[i];
                tipoMax = i;
            }
        }
        return tipoMax;
    }

    ordenar(){
        this.listaPuestos.sort(function(a,b){return a.compararCon(b)});
        return this.listaPuestos;
    }

    empresasSinPuesto(){
        let lista = [];
        for(let elemE of this.listaEmpresa){
            let tiene = false;
            for(let elemP of this.listaPuestos){
                if(elemP.empresa == elemE){
                    tiene = true;
                }
            }
            if(!tiene){
                lista.push(elemE);
            }
        }
        return lista;
    }

    rangoSueldos(){
        let valorMax = Number.MIN_SAFE_INTEGER;
        let valorMin = Number.MAX_SAFE_INTEGER;

        for(let elem of this.listaPuestos){
            let suel = elem.sueldo;
            if(suel > valorMax){
                valorMax = suel;
            }
            if(suel < valorMin){
                valorMin = suel;
            }
        }

        return valorMax - valorMin;
    }

    empresasConPuestosTodosTipos(){
        let emp = [];
        for(let elemE of this.listaEmpresa){
            let lista = [];
            for(let elemP of this.listaPuestos){
                if(elemP.empresa == elemE){
                    let tipo = elemP.funcion.tipo;
                    if(!lista.includes(tipo)){ //lista.indexOf(tipo) == -1
                        lista.push(tipo);
                    }
                }
            }
            if(lista.length == 5){
                emp.push(elemE);
            }
        }
        return emp;
    }

    empresasConPuestosTodosTipos2(){
        let emp = [];
        for(let elemE of this.listaEmpresa){
            let lista = [false,false,false,false,false,false];
                  //       0     1     2     3     4     5
            for(let elemP of this.listaPuestos){
                if(elemP.empresa == elemE){
                    let tipo = elemP.funcion.tipo;
                    lista[tipo] = true;
                }
            }
            let todos = true;
            for(let i = 1; i <= 5 && todos; i++){
                if(!lista[i]){
                    todos = false;
                }
            }
            if(todos){
                emp.push(elemE);
            }
        }
        return emp;
    }


    puestosPorTipoDeEmpresa(emp){
        let tot = [0,0,0,0,0];
        for(let elem of this.listaPuestos){
            if(elem == emp){
                let tipo = elem.funcion.tipo;
                tot[tipo-1]++;
            }
            
        }
        return tot;
    }
}

