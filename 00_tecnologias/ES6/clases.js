class libro{

        constructor(autor,titulo){
            this.autor=autor;
            this.titulo=titulo;
        }

        showAutor(){
            console.log(this.autor);
        }

}

class libroTecnico extends libro {

    constructor(autor,titulo,tema){

        super(autor,titulo);

        this.tema= tema;
    }

    show(){
        this.showAutor();
        console.log(this);
    }

}

let objlibro= new libroTecnico("pepe","las cosas de pepe","programacion");
objlibro.editorial="Amaya";
objlibro.show();


