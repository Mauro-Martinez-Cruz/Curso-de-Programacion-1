class Editorial{
    constructor(nombre, pais){
        this.nombre = nombre;
        this.pais = pais;
    }

    toString(){
        return "Editorial de nombre " + this.nombre + " pais: " + this.pais;
    }
}

class Libro{
    constructor(titulo, paginas, editorial, descripcion){
        this.titulo = titulo;
        this.paginas = paginas;
        this.editorial = editorial;
        this.descripcion = descripcion;
        this.costo = 100;
    }

    //Método que actualice su costo en un % darTodosLibros
    actualizarCosto(porcentaje){
        //this.costo += this.costo * porcentaje / 100;
        this.costo = this.costo*(100+porcentaje)/100;
    }

    //Método que retorne si es largo (paginas>400)
    esLargo(){
        return this.paginas > 400;
    }

    //Método para compararce con otro libro
    compararCon(otro){
        return this.titulo.toUpperCase().localeCompare(otro.titulo.toUpperCase());
    }

    toString(){
        return this.titulo + " de editorial " + this.editorial;
    }
}

class Biblioteca{
    constructor(direccion){
        this.direccion = direccion;
        this.listaLibros = [];
        this.listaEditoriales = [];
    }

    agregarLibro(libro){
        this.listaLibros.push(libro);
    }

    darTodosLibros(){
        return this.listaLibros;
    }

    agregarEditorial(editorial){
        this.listaEditoriales.push(editorial);
    }

    darTodasEditoriales(){
        return this.listaEditoriales;
    }

    //Método que incremente el costo de todos los libros en un porcentaje dardo
    actualizarCostos(porcentaje){
        for(let lib of this.listaLibros){
            lib.actualizarCosto(porcentaje);
        }
    }

    //Método que retorne el costo promedio de todos los libros
    promedio(){
        let suma = 0;
        for(let lib of this.listaLibros){
            suma += lib.costo;
        }
        return suma/this.listaLibros.length;
    }

    //Método que retorne el/los libros de máxima cantidad de paginas
    darLibroMayorCantidadPaginas(){
        let retorno = [];
        let max = 0;
        for(let lib of this.listaLibros){
            if(lib.paginas > max){
                max = lib.paginas;
                retorno = [];
                retorno.push(lib);
                //retorno = [lib];
            }
            else{
                if(lib.paginas == max){
                    retorno.push(lib);
                }
            }
        }
        return retorno;
    }

    //Método que retorne los libros largos (paginas > 400)
    darLibrosLargos(){
        let result = [];
        for(let lib of this.listaLibros){
            if(lib.esLargo()){
                result.push(lib);
            }
        }
        return result;
    }

    //Método que retorna los libros ordenados
    ordenarLibros(){
        this.listaLibros.sort(function(a,b){return a.compararCon(b)})
        return this.listaLibros;
    }

    //Dado un título, indicar si hay un libro con ese título
    estaLibro(titulo){
        let esta = false;
        for(let i = 0; i < this.listaLibros.length && !esta; i++){
            let lib = this.listaLibros[i];
            if(lib.titulo == titulo){
                esta = true;
            }
        }
        return esta;
    }

    //Dado un título, ubicar el objeto Libro de ese título
    ubicarLibro(titulo){
        let cualLibro;
        for(let elem of this.listaLibros){
            if(elem.titulo == titulo){
                cualLibro = elem;
            }
        }
        return cualLibro;
    }

    //Método para dar de baja un libro de un título dado
    eliminarLibro(titulo){
        if(this.estaLibro(titulo)){
            let libro = ubicarLibro(titulo);
            this.listaLibros.splice(this.listaLibros.indexOf(libro),1);
        }
    }

    eliminarLibro2(titulo){
        if(this.estaLibro(titulo)){
            let libro = ubicarLibro(titulo);
            let pos = this.listaLibros.indexOf(libro);
            this.listaLibros = this.listaLibros.slice(0,pos) + 
                                    this.listaLibros.slice(pos+1);
        }
    }

    //Método que retorne editoriales SIN libros
    editorialesSinLibros(){
        let result = [];
        for(let edit of this.listaEditoriales){
            let tiene = false;
            for(let lib of this.listaLibros){
                if(lib.editorial == edit){
                    tiene = true;
                }
            }
            if(!tiene){
                result.push(edit);
            }
        }
        return result;
    }
}