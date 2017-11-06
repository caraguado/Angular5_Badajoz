// ------------------------------------------1-----------------------------------
// En vez de var let o const
//let adatos = [ {precio:23}, {precio:45},{precio:65}]
/*
{
let adatos = [ {precio:23}, {precio:45},{precio:65}]
}

adatos.length;
*/
// ------------------------------------------1-----------------------------------

let adatos = [ {precio:23}, {precio:45},{precio:65}];

/*aDatos.forEach(function(element) 
});*/


adatos.forEach(element=> { 
        let iva =1.22;
        let precio_final=iva*element.precio
        console.log(` 
            El precio con iva es: 
            ${precio_final}
            `)
            }
);