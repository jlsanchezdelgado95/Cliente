"use script"
let contador1 = 1;
let contador2 = 1;
let contador3 = 1;
let precioFinal1 = 0;
let precioFinal2 = 0;
let precioFinal3 = 0;
function anyade(articulo) {
    if (articulo == document.getElementById("art1")) {//ARTICULO 1
        let dineroInicial = 1500;
        if (document.getElementById("pcCarro" + articulo.id) == null) {//Crear uno nuevo
            //precio = articulo.getAttribute("precio1");
            let precio = document.createElement("p");
            let unidades = document.createElement("p");
            let precioTotal = document.createElement("p");
            let contenedorArticulo = document.createElement("div");
            let img = document.createElement("img");
            let buttonClean = document.createElement("button");
            let buttonCleanAll = document.createElement("button");
            precio.id = "precioPC-1";
            unidades.id = "unidadesPC-1";
            precioTotal.id = "precioTotalPCs-1"//precio*unidad
            contenedorArticulo.id = "pcCarro" + articulo.id;
            document.getElementById("contenedorCarro").appendChild(contenedorArticulo);

            img.src = "images/alienware.png";
            document.getElementById("pcCarro" + articulo.id).appendChild(img);
            document.getElementById("pcCarro" + articulo.id).appendChild(precio);
            document.getElementById("pcCarro" + articulo.id).appendChild(unidades);
            document.getElementById("pcCarro" + articulo.id).appendChild(precioTotal);

            textoPrecio = document.createTextNode("Precio: " + dineroInicial);
            textoUnidades = document.createTextNode("Unidades: " + contador1);
            textoPrecioTotal = document.createTextNode("Total: " + dineroInicial * contador1);

            precio.appendChild(textoPrecio);
            unidades.appendChild(textoUnidades);
            precioTotal.appendChild(textoPrecioTotal);

            buttonClean.id = "botonBorrar-1";
            textoBoton = document.createTextNode("BORRAR");
            document.getElementById("pcCarro" + articulo.id).appendChild(buttonClean);
            document.getElementById("botonBorrar-1").appendChild(textoBoton);

            buttonClean.onclick = function () {
                if (contador1 <= 1) {
                    document.getElementById("pcCarro" + articulo.id).remove("pcCarro" + articulo.id);
                } else if (contador1 => 2) {
                    contador1 = contador1 - 1;
                    document.getElementById("unidadesPC-1").removeChild;
                    textoUnidades = document.createTextNode("Unidades: " + contador1);
                    document.getElementById("unidadesPC-1").appendChild(textoUnidades);
                    document.getElementById("precioTotalPCs-1").removeChild(textoPrecioTotal);
                    textoPrecioTotal = document.createTextNode("Total: " + dineroInicial * contador1);
                    document.getElementById("precioTotalPCs-1").appendChild(textoPrecioTotal);
                    let precioTotal = precioFinal1 + precioFinal2 + precioFinal3;
                    let precioTotalCarroMostrar = document.getElementById("precioTotal");
                    txtPrecioCarro = document.createTextNode("Precio total: " + precioTotal + "€");
                    precioTotalCarroMostrar.appendChild(txtPrecioCarro);
                }
            }
            buttonCleanAll.id = "botonBorrarTodo-1";
            textoBotonBorrarTodo = document.createTextNode("BORRAR TODO");
            document.getElementById("pcCarro" + articulo.id).appendChild(buttonCleanAll);
            document.getElementById("botonBorrarTodo-1").appendChild(textoBotonBorrarTodo);

            buttonCleanAll.onclick = function () {
                document.getElementById("pcCarro" + articulo.id).remove("pcCarro" + articulo.id);
                contador1 = 1;//Reiniciar el contador1
            }
        } else if (document.getElementById("pcCarro" + articulo.id) != null) {//Modificar el existente
            contador1 = contador1 + 1;
            document.getElementById("unidadesPC-1").removeChild(textoUnidades);
            textoUnidades = document.createTextNode("Unidades: " + contador1);
            document.getElementById("unidadesPC-1").appendChild(textoUnidades);
            document.getElementById("precioTotalPCs-1").removeChild(textoPrecioTotal);
            textoPrecioTotal = document.createTextNode("Total: " + dineroInicial * contador1);
            document.getElementById("precioTotalPCs-1").appendChild(textoPrecioTotal);
        }
        precioFinal1 = dineroInicial * contador1;
        //Hago el precioTotal
        let precioTotal = precioFinal1 + precioFinal2 + precioFinal3;
        if (document.getElementById("precioTotal") != null) {
            document.getElementById("precioTotal").remove;
        }
        let precioTotalCarroMostrar = document.getElementById("precioTotal");
        txtPrecioCarro = document.createTextNode("Precio total: " + precioTotal + "€");
        precioTotalCarroMostrar.appendChild(txtPrecioCarro);
    }
    if (articulo == document.getElementById("art2")) {//ARTICULO 2
        let dineroInicial = 1400;
        if (document.getElementById("pcCarro" + articulo.id) == null) {//Crear uno nuevo
            let precio = document.createElement("p");
            let unidades = document.createElement("p");
            let precioTotal = document.createElement("p");
            let contenedorArticulo = document.createElement("div");
            let img = document.createElement("img");
            let buttonClean = document.createElement("button");
            let buttonCleanAll = document.createElement("button");
            precio.id = "precioPC-2";
            unidades.id = "unidadesPC-2";
            precioTotal.id = "precioTotalPCs-2"//precio*unidad
            contenedorArticulo.id = "pcCarro" + articulo.id;
            document.getElementById("contenedorCarro").appendChild(contenedorArticulo);

            img.src = "images/laptop15XPS.png";
            document.getElementById("pcCarro" + articulo.id).appendChild(img);
            document.getElementById("pcCarro" + articulo.id).appendChild(precio);
            document.getElementById("pcCarro" + articulo.id).appendChild(unidades);
            document.getElementById("pcCarro" + articulo.id).appendChild(precioTotal);

            textoPrecio = document.createTextNode("Precio: " + dineroInicial);
            textoUnidades = document.createTextNode("Unidades: " + contador2);
            textoPrecioTotal = document.createTextNode("Total: " + dineroInicial * contador2);

            precio.appendChild(textoPrecio);
            unidades.appendChild(textoUnidades);
            precioTotal.appendChild(textoPrecioTotal);

            buttonClean.id = "botonBorrar-2";
            textoBoton = document.createTextNode("BORRAR");
            document.getElementById("pcCarro" + articulo.id).appendChild(buttonClean);
            document.getElementById("botonBorrar-2").appendChild(textoBoton);

            buttonClean.onclick = function () {
                if (contador2 <= 1) {
                    document.getElementById("pcCarro" + articulo.id).remove("pcCarro" + articulo.id);
                } else if (contador2 => 2) {
                    contador2 = contador2 - 1;
                    document.getElementById("unidadesPC-2").removeChild(textoUnidades);
                    textoUnidades = document.createTextNode("Unidades: " + contador2);
                    document.getElementById("unidadesPC-2").appendChild(textoUnidades);
                    document.getElementById("precioTotalPCs-2").removeChild(textoPrecioTotal);
                    textoPrecioTotal = document.createTextNode("Total: " + dineroInicial * contador2);
                    document.getElementById("precioTotalPCs-2").appendChild(textoPrecioTotal);
                }
            }
            buttonCleanAll.id = "botonBorrarTodo-2";
            textoBotonBorrarTodo = document.createTextNode("BORRAR TODO");
            document.getElementById("pcCarro" + articulo.id).appendChild(buttonCleanAll);
            document.getElementById("botonBorrarTodo-2").appendChild(textoBotonBorrarTodo);

            buttonCleanAll.onclick = function () {
                document.getElementById("pcCarro" + articulo.id).remove("pcCarro" + articulo.id);
                contador2 = 1;//Reiniciar el contador
            }
        } else if (document.getElementById("pcCarro" + articulo.id) != null) {//Modificar el existente
            contador2 = contador2 + 1;
            document.getElementById("unidadesPC-2").removeChild(textoUnidades);
            textoUnidades = document.createTextNode("Unidades: " + contador2);
            document.getElementById("unidadesPC-2").appendChild(textoUnidades);
            document.getElementById("precioTotalPCs-2").removeChild(textoPrecioTotal);
            textoPrecioTotal = document.createTextNode("Total: " + dineroInicial * contador2);
            document.getElementById("precioTotalPCs-2").appendChild(textoPrecioTotal);
        }
        precioFinal2 = dineroInicial * contador2;
        let precioTotal = precioFinal1 + precioFinal2 + precioFinal3;
        if (document.getElementById("precioTotal") != null) {
            document.getElementById("precioTotal").remove;
        }
        let precioTotalCarroMostrar = document.getElementById("precioTotal");
        txtPrecioCarro = document.createTextNode("Precio total: " + precioTotal + "€");
        precioTotalCarroMostrar.appendChild(txtPrecioCarro);
    }
    if (articulo == document.getElementById("art3")) {//ARTICULO 3
        let dineroInicial = 1450;
        if (document.getElementById("pcCarro" + articulo.id) == null) {//Crear uno nuevo
            //precio = articulo.getAttribute("precio1");
            let precio = document.createElement("p");
            let unidades = document.createElement("p");
            let precioTotal = document.createElement("p");
            let contenedorArticulo = document.createElement("div");
            let img = document.createElement("img");
            let buttonClean = document.createElement("button");
            let buttonCleanAll = document.createElement("button");
            precio.id = "precioPC-3";
            unidades.id = "unidadesPC-3";
            precioTotal.id = "precioTotalPCs-3"//precio*unidad
            contenedorArticulo.id = "pcCarro" + articulo.id;
            document.getElementById("contenedorCarro").appendChild(contenedorArticulo);

            img.src = "images/latitude5290.jpg";
            document.getElementById("pcCarro" + articulo.id).appendChild(img);
            document.getElementById("pcCarro" + articulo.id).appendChild(precio);
            document.getElementById("pcCarro" + articulo.id).appendChild(unidades);
            document.getElementById("pcCarro" + articulo.id).appendChild(precioTotal);

            textoPrecio = document.createTextNode("Precio: " + dineroInicial);
            textoUnidades = document.createTextNode("Unidades: " + contador3);
            textoPrecioTotal = document.createTextNode("Total: " + dineroInicial * contador3);

            precio.appendChild(textoPrecio);
            unidades.appendChild(textoUnidades);
            precioTotal.appendChild(textoPrecioTotal);

            buttonClean.id = "botonBorrar-3";
            textoBoton = document.createTextNode("BORRAR");
            document.getElementById("pcCarro" + articulo.id).appendChild(buttonClean);
            document.getElementById("botonBorrar-3").appendChild(textoBoton);

            buttonClean.onclick = function () {
                if (contador3 <= 1) {
                    document.getElementById("pcCarro" + articulo.id).remove("pcCarro" + articulo.id);
                } else if (contador3 => 2) {
                    contador3 = contador3 - 1;
                    document.getElementById("unidadesPC-3").removeChild(textoUnidades);
                    textoUnidades = document.createTextNode("Unidades: " + contador3);
                    document.getElementById("unidadesPC-3").appendChild(textoUnidades);
                    document.getElementById("precioTotalPCs-3").removeChild(textoPrecioTotal);
                    textoPrecioTotal = document.createTextNode("Total: " + dineroInicial * contador3);
                    document.getElementById("precioTotalPCs-3").appendChild(textoPrecioTotal);
                }
            }
            buttonCleanAll.id = "botonBorrarTodo-3";
            textoBotonBorrarTodo = document.createTextNode("BORRAR TODO");
            document.getElementById("pcCarro" + articulo.id).appendChild(buttonCleanAll);
            document.getElementById("botonBorrarTodo-3").appendChild(textoBotonBorrarTodo);

            buttonCleanAll.onclick = function () {
                document.getElementById("pcCarro" + articulo.id).remove("pcCarro" + articulo.id);
                contador3 = 1;//Reiniciar el contador
            }
        } else if (document.getElementById("pcCarro" + articulo.id) != null) {//Modificar el existente
            contador3 = contador3 + 1;
            document.getElementById("unidadesPC-3").removeChild(textoUnidades);
            textoUnidades = document.createTextNode("Unidades: " + contador3);
            document.getElementById("unidadesPC-3").appendChild(textoUnidades);
            document.getElementById("precioTotalPCs-3").removeChild(textoPrecioTotal);
            textoPrecioTotal = document.createTextNode("Total: " + dineroInicial * contador3);
            document.getElementById("precioTotalPCs-3").appendChild(textoPrecioTotal);
        }
        precioFinal3 = dineroInicial * contador3;
        let precioTotal = precioFinal1 + precioFinal2 + precioFinal3;
        if (document.getElementById("precioTotal") != null) {
            document.getElementById("precioTotal").remove;
        }
        let precioTotalCarroMostrar = document.getElementById("precioTotal");
        txtPrecioCarro = document.createTextNode("Precio total: " + precioTotal + "€");
        precioTotalCarroMostrar.appendChild(txtPrecioCarro);
    }
}

function limpiarCarro() {//depurar para ver si son null o no
    if (document.getElementById("pcCarroart1") != null) {
        document.getElementById("pcCarroart1").remove("pcCarroart1");
    }
    if (document.getElementById("pcCarroart2") != null) {
        document.getElementById("pcCarroart2").remove("pcCarroart2");
    }
    if (document.getElementById("pcCarroart3") != null) {
        document.getElementById("pcCarroart3").remove("pcCarroart3");
    }
}

        /*
        En la funcion hacer if(document.gerElementById("C"+articulo.id)==null){
            No esta, se hace uno nuevo al carrito
        } else {
            como existe, se modifica
        }
        La funcion anyade (articulo)
        articulo.id
        Div padre CARRITO
        1º crear Div del articulo, crear img(acceder al src del original)(LO HACEMOS HIJO DEL DIV CARRITO)
        TODOS HIJOS DEL DIV
        crear P del texto original
        crear p unidades 1,2,3 los que tenga
        crear p total precio * cantidad
        crear 2 button para borrar una unidad y borrar todos
        Cuando lleve el producto al carrito, concatenar a la id algo que lo
        identifique que sea del carro(concatenar)
        Para buscar con el DOM seria algo como
        carrito = document.getElemenyById("carrito")(NOs coge el elemento carrito div)
        articuloCarrio = Carrito.getElementById("C" + div(div del divcontenedor 1).Id)/Para buscar el articulo
        miboton = document.createElement("button");
        textoBoton = document.createTextNode("Borrar");
        miboton.id = "boton1";
        miboton.appendChild(textoBoton);
        document.body.appendChild(miboton);
        miboton.onclick = function(){           => Funcion anonima
            (La funcion para borrar);
            cuando haga click, hare el parentNode, y desde ahi buscare los parrafos(buscare el segundo)
            Y a ese texto le cambiare el que habia por uno menos
        };
        La funcion borrar todo es eliminar el hijo entero accediendo primero al padre
        Tanto al borrar uno o borrar todo, hay que modificar el carrito
        Tambien un vacio carrito que es eliminar todos los hijos del div carrito
        */