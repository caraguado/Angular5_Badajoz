interface Autor {

    autor:string;
    pais:string;
    nacimiento:Date;
}

interface Intedit{

    nombre:string;
    lugar:string;
}


class Libro implements Autor{
    
    public titulo: string;
    public autor;
    public pais;
    public nacimiento;

    public inter: Intedit;
    
            constructor(autor,titulo){
                this.autor=autor;
                this.titulo=titulo;

                this.inter= {nombre:"" , lugar:""};
            }
    
            showAutor(){
                console.log(this.autor);
            }
    
    }
    
    class LibroTecnico extends Libro {

        private tema: string;
        public editorial:string;
    
        constructor(autor,titulo,tema,editorial){
    
            super(autor,titulo);
    
            this.tema= tema;
            this.editorial=editorial;
        }
    
        show(){
            this.showAutor();
            console.log(this);
        }
    
    }
    
    let objlibro= new LibroTecnico("pepe","las cosas de pepe","programacion","hola");
    objlibro.editorial="Amaya";
    objlibro.show();
    
    
    