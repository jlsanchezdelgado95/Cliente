       "use script"
        let contador = 1;
        let precioTotal = 0;
        let precioTotalCarroMostrar = document.getElementById("precioTotal");
        txtPrecioCarro = document.createTextNode("Precio total: " + precioTotal + "€");
        precioTotalCarroMostrar.appendChild(txtPrecioCarro);
        function anyade(articulo) {
            if (articulo == document.getElementById("art1")) {
                console.log(articulo);
                if (document.getElementById("pcCarro" + articulo.id) == null) {//Crear uno nuevo
                    console.log(articulo);
                    //precio = articulo.getAttribute("precio1");
                    let precio = document.createElement("p");
                    let unidades = document.createElement("p");
                    let precioTotal = document.createElement("p");
                    let contenedorArticulo = document.createElement("div");
                    let img = document.createElement("img");
                    let buttonClean = document.createElement("button");
                    let buttonCleanAll = document.createElement("button");
                    precio.id = "precioPC";
                    unidades.id = "unidadesPC";
                    precioTotal.id = "precioTotalPCs"//precio*unidad
                    contenedorArticulo.id = "pcCarro" + articulo.id;
                    document.getElementById("contenedorCarrito").appendChild(contenedorArticulo);
                    
                    img.src = "images/alienware.png";
                    document.getElementById("pcCarro" + articulo.id).appendChild(img);
                    document.getElementById("pcCarro" + articulo.id).appendChild(precio);
                    document.getElementById("pcCarro" + articulo.id).appendChild(unidades);
                    document.getElementById("pcCarro" + articulo.id).appendChild(precioTotal);

                    textoPrecio = document.createTextNode("Precio: " + precio);
                    textoUnidades = document.createTextNode("Unidades: " + contador);
                    textoPrecioTotal = document.createTextNode("Total: " + precioTotal);

                    precio.appendChild(textoPrecio);
                    unidades.appendChild(textoUnidades);
                    precioTotal.appendChild(textoPrecioTotal);

                    buttonClean.id = "botonBorrar";
                    textoBoton = document.createTextNode("BORRAR");
                    document.getElementById("pcCarro" + articulo.id).appendChild(buttonClean);
                    console.log(textoBoton);
                    document.getElementById("botonBorrar").appendChild(textoBoton);

                    buttonClean.onclick = function(){
                        if (contador<=1) {
                            document.getElementById("pcCarro" + articulo.id).remove("pcCarro" + articulo.id);
                        } else {
                            contador = contador -1;
                            document.getElementById("unidadesPC").removeChild(textoUnidades);
                            textoUnidades = document.createTextNode("Unidades: " + contador);
                            document.getElementById("unidadesPC").appendChild(textoUnidades);
                            document.getElementById("precioTotalPCs").removeChild(textoPrecioTotal);
                            textoPrecioTotal = document.createTextNode("Total: " + precio * contador);
                            document.getElementById("precioTotalPCs").appendChild(textoPrecioTotal);
                        }
                    }
                    buttonCleanAll.id = "botonBorrarTodo";
                    textoBotonBorrarTodo = document.createTextNode("BORRAR TODO");
                    document.getElementById("pcCarro" + articulo.id).appendChild(buttonCleanAll);
                    document.getElementById("botonBorrarTodo").appendChild(textoBotonBorrarTodo);

                    buttonCleanAll.onclick = function(){
                        document.getElementById("pcCarro" + articulo.id).remove("pcCarro" + articulo.id);
                        contador = 1;//Reiniciar el contador
                    }
                } else if(document.getElementById("pcCarro" + articulo.id) != null) {//Modificar el existente
                    contador = contador + 1;
                    document.getElementById("unidadesPC").removeChild(textoUnidades);
                    textoUnidades = document.createTextNode("Unidades: " + contador);
                    document.getElementById("unidadesPC").appendChild(textoUnidades);
                    document.getElementById("precioTotalPCs").removeChild(textoPrecioTotal);
                    textoPrecioTotal = document.createTextNode("Total: " + precio * contador);
                    document.getElementById("precioTotalPCs").appendChild(textoPrecioTotal);
                }
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