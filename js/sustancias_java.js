
var cartas = [{imagen: '1', seleccion: false},
    {imagen: '2', seleccion: false},
    {imagen: '3', seleccion: false},
    {imagen: '4', seleccion: false},
    {imagen: '5', seleccion: false},
    {imagen: '6', seleccion: false},
    {imagen: '7', seleccion: false},
    {imagen: '8', seleccion: false},
    {imagen: '9', seleccion: false},
    {imagen: '10', seleccion: false},
    {imagen: '11', seleccion: false},
    {imagen: '12', seleccion: false},
    {imagen: '13', seleccion: false},
    {imagen: '14', seleccion: false},
    {imagen: '15', seleccion: false},
    {imagen: '1', seleccion: false},
    {imagen: '2', seleccion: false},
    {imagen: '3', seleccion: false},
    {imagen: '4', seleccion: false},
    {imagen: '5', seleccion: false},
    {imagen: '6', seleccion: false},
    {imagen: '7', seleccion: false},
    {imagen: '8', seleccion: false},
    {imagen: '9', seleccion: false},
    {imagen: '10', seleccion: false},
    {imagen: '11', seleccion: false},
    {imagen: '12', seleccion: false},
    {imagen: '13', seleccion: false},
    {imagen: '14', seleccion: false},
    {imagen: '15', seleccion: false}];

    var intentos = 0;
    var jugada1 = "";
    var jugada2 = "";
    var identificadorJ1 = "";
    var identificadorJ2 = "";

function iniciar () {
    cartas.sort(function() {return Math.random() - 0.5});
    for ( var i = 0 ; i < 30 ; i++ ) {
        var carta = cartas[i].imagen;
        var dato = document.getElementById( i.toString() );
        dato.dataset.valor = carta;
    }
}

function cambio (event) {
    jugada2 = event.dataset.valor;
    identificadorJ2 = event.id;
    if (jugada1 !== "" && cartas[parseInt(identificadorJ2)].seleccion != true
        && cartas[parseInt(identificadorJ1)].seleccion != true) {

        if (jugada1 === jugada2
            && identificadorJ1 !== identificadorJ2
            && cartas[parseInt(identificadorJ2)].seleccion != true
            && cartas[parseInt(identificadorJ1)].seleccion != true) {
            cartas[parseInt(identificadorJ1)].seleccion = true;
            cartas[parseInt(identificadorJ2)].seleccion = true;

            cartaCambio(identificadorJ2, jugada2);
            vaciar();
            comprobar();
        } else if (identificadorJ1 !== identificadorJ2) {
            var self = this;
            setTimeout(function () {
                cartaCambio(self.identificadorJ1, "placeholder")
                cartaCambio(self.identificadorJ2, "placeholder")
                vaciar()
            }, 200);

            cartaCambio(identificadorJ2, jugada2);
        }
    } else if (jugada2 !== "valor") {

        cartaCambio(identificadorJ2, jugada2);
        jugada1 = jugada2;
        identificadorJ1 = identificadorJ2;
    }
}
    function vaciar ()  {
        jugada1 = "";
        jugada2 = "";

        identificadorJ1 = "";
        identificadorJ2 = "";
    }

    function cartaCambio (posicion, contenido) {
        document.getElementById(posicion.toString()).src = contenido+".jpg";
    }
    function comprobar () {
        var aciertos = 0;
        for( var i = 0 ; i < 16 ; i++ ){
            if ( cartas[i].seleccion == true ) {
                aciertos ++;
            }

        }

        if(aciertos == 16){
           alert("Felicidades Ganaste!!!");

        }
    }

function reiniciar () {
    cartas.sort(function() { return Math.random() - 0.5});
    for ( var i = 0; i < 30 ; i++ ) {
        var carta = cartas[i].imagen;
        var dato = document.getElementById( i.toString() );
        dato.dataset.valor = carta;
        cartaCambio(i, 'placeholder');
    }
};