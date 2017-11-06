let oPrueba = {precio:12, iva:1.16}


oPrueba.calculaivaasiync = function() {

    /*setTimeout(function() {
        let precio_final=this.precio*this.iva
        console.log(` 
            El precio con iva es: 
            ${precio_final}
            `)
    },1000
    )*/
    setTimeout(()=> {
        let precio_final=this.precio*this.iva
        console.log(` 
            El precio con iva es: 
            ${precio_final}
            `)
    },1000
    )
}

oPrueba.calculaivaasiync();
