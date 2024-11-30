class Contacto{
    constructor(unNombre, unApellido, unaEdad, unTelefono){
        this.nombre = unNombre;
        this.apellido = unApellido;
        this.edad = unaEdad;
        this.telefono = unTelefono;
    }
    
    toString(){
        return this.nombre +" -- "+ this.apellido+ 
            " ("+ this.edad + ") " +this.telefono ;

    }
    
    esJoven(){
        return this.edad < 25;
    }
    /*
    compararCon(otro){
        return this.edad - otro.edad;
    }
    */

    compararCon(otro){
        let dif = this.edad - otro.edad;
        if(dif == 0){
            dif = this.apellido.toUpperCase().localeCompare(otro.apellido.toUpperCase());
        }
        return dif;
    }
}

class Agenda{
    constructor(){
        this.lista = [];
    }
    agregar(unContacto){
        this.lista.push(unContacto);
        this.lista.sort(function(a,b){ return a.compararCon(b)});
    }
    darTodos(){
        return this.lista;
    }
    darJovenes(){
        let ret = [];
        for(let elem of this.lista){
            if(elem.esJoven()){
                ret.push(elem);
            }
        }
        return ret;
    }

    eliminar(pos){
        if(pos >= 0 && pos < this.lista.length){
            this.lista.splice(pos,1);
        }
    }

    estaTelefono(telefono){
        let esta = false;
        for(let i = 0; i < this.lista.length && !esta; i++){
            if(this.lista[i].telefono == telefono){
                esta = true;
            }
        }
        return esta;
    }
    /*
    masJoven(){
        let pos = -1;
        let edad = 61;
        for(let i = 0; i < this.lista.length; i++){
            if(this.lista[i].edad < edad){
                pos = i;
                edad = this.lista[i].edad;
            }
        }
        return this.lista[pos];
    }
    */

    masJoven(){
        return this.lista[0];
    }

    cantidadMismaEdad(){
        let cant = 0;
        let edad = this.lista[0].edad;
        for(let i = 1; i < this.lista.length; i++){
            if(edad == this.lista[i].edad){
                cant++;
            }
            else{
                edad = this.lista[i].edad;
            }
        }
        return cant;
    }
}