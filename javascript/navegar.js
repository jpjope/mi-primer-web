
//cargar producto

let productos = [
    {
        "id":"uñas-01",
        "titulo":"Uñas 01",
        "imagen":"../img/uñas2.jpg",
        "precio":6700
    },
    {
        "id":"uñas-02",
        "titulo":"Uñas 02",
        "imagen":"../img/uñas3.jpg",
        "precio":7700
    },
    {
        "id":"uñas-03",
        "titulo":"Uñas 03",
        "imagen":"../img/uñas4.jpg",
        "precio":9700
    },
    {
        "id":"uñas-05",
        "titulo":"Uñas 05",
        "imagen":"../img/uñas5.jpg",
        "precio":6700
    },
    {
        "id":"uñas-06",
        "titulo":"Uñas 06",
        "imagen":"../img/uñas6.jpg",
        "precio":9700
    },
    {
        "id":"uñas-01",
        "titulo":"Uñas 01",
        "imagen":"../img/uñas2.jpg",
        "precio":6700
    },
    {
        "id":"uñas-02",
        "titulo":"Uñas 02",
        "imagen":"../img/uñas3.jpg",
        "precio":7700
    },
    {
        "id":"uñas-03",
        "titulo":"Uñas 03",
        "imagen":"../img/uñas4.jpg",
        "precio":9700
    },
    {
        "id":"uñas-05",
        "titulo":"Uñas 05",
        "imagen":"../img/uñas5.jpg",
        "precio":6700
    },
    {
        "id":"uñas-06",
        "titulo":"Uñas 06",
        "imagen":"../img/uñas6.jpg",
        "precio":9700
    },
    {
        "id":"uñas-01",
        "titulo":"Uñas 01",
        "imagen":"../img/uñas2.jpg",
        "precio":6700
    },
    {
        "id":"uñas-02",
        "titulo":"Uñas 02",
        "imagen":"../img/uñas3.jpg",
        "precio":7700
    },
    {
        "id":"uñas-03",
        "titulo":"Uñas 03",
        "imagen":"../img/uñas4.jpg",
        "precio":9700
    },
    {
        "id":"uñas-05",
        "titulo":"Uñas 05",
        "imagen":"../img/uñas5.jpg",
        "precio":6700
    },
    {
        "id":"uñas-06",
        "titulo":"Uñas 06",
        "imagen":"../img/uñas6.jpg",
        "precio":9700
    } 
];

//carrito
const CarritoNum = document.querySelector(".botonCarritoNum");
const botonCarritoNum = JSON.parse(localStorage.getItem('botonCarritoNum')) || [];
let contadorCarrito = 0;
let vaciar = document.querySelector("#vaciarCarrito") //a eliminar
//checkout
const checkout = document.querySelector("#checkout");
//aplicar
document.addEventListener('DOMContentLoaded', cargarProductos(productos));
document.addEventListener('DOMContentLoaded', cargarCarrito);
document.addEventListener('DOMContentLoaded',ActualizarCarrito);

//function cargar producto
function cargarProductos(productosEleguidos){
    //productos
    const cajaProductos = document.querySelector(".cajaProductos");
    let valor = 0;
    productosEleguidos.forEach(producto => {
        let div =document.createElement("div");
        div.classList.add("cajas");
        
        div.innerHTML= `
            
            <h2>${producto.titulo}<span class="span"><i></i> x 3 productos</span></h2>
            <figure class="imgProducto"><img src="${producto.imagen}" alt="" ></figure> 
            <p><img src="../img/dollar.svg" alt=""> <i>${producto.precio} pesos</i></p> 
            <button class="boton" value="${valor}">AGREGAR</button>
        `
        valor = valor + 1;
        cajaProductos.appendChild(div);
    });  
    CarritoNum.textContent = contadorCarrito  
}
//funcion cargar carrito
function cargarCarrito(){
    
    const botonAgregar = document.querySelectorAll(".boton");

    botonAgregar.forEach(botonA=>{
    
        botonAgregar[botonA.value].addEventListener("click",()=>{

            let carrito = JSON.parse(localStorage.getItem('contenedorCarrito')) || [];
            let insertAcarrito = {
                "id":botonA.value,
                "titulo":productos[botonA.value].titulo,
                "imagen":productos[botonA.value].imagen,
                "precio":productos[botonA.value].precio
            }      
            
            carrito.push(insertAcarrito)
            
            // Guardar en localStorage
            localStorage.setItem('contenedorCarrito', JSON.stringify(carrito));
            //
            contadorCarrito++
            localStorage.setItem('botonCarritoNum',JSON.stringify(contadorCarrito))
            CarritoNum.textContent = localStorage.getItem('botonCarritoNum');
            //ActualizarCarrito(productosCarrito)
            ActualizarCarrito()
        })
        
    } )
}
//funcion actualizar
function ActualizarCarrito(){

    const contenedorCarrito = document.querySelector(".contenedorCarrito");
    contenedorCarrito.innerHTML ="";

    let carrito = JSON.parse(localStorage.getItem('contenedorCarrito')) || [];
    
    carrito.forEach((producto, index) =>{
        let div = document.createElement("div")
                div.classList.add("divCarrito")
                div.innerHTML=`
                <h2>${producto.titulo}</h2>
                <figure class="imgProducto"><img src="${producto.imagen}" alt="" ></figure> 
                <p><img src="../img/dollar.svg" alt=""> <i class="carritoI">${producto.precio} pesos</i></p> 
                <button class="botonEliminar" value="${index}"></button>
                `
                contenedorCarrito.appendChild(div);
        EliminarItemCarrito(index)
       
    })
    contadorCarrito = localStorage.getItem('botonCarritoNum');
    CarritoNum.textContent = contadorCarrito;
}
//funcion eliminar item del carrito
function EliminarItemCarrito(index){

    let botonEliminar = document.querySelectorAll(".botonEliminar")

    botonEliminar[index].addEventListener("click",() =>{
        let carrito = JSON.parse(localStorage.getItem('contenedorCarrito')) || [];

        // Eliminar producto por índice
        carrito.splice(index, 1);
    
        // Actualizar localStorage
        localStorage.setItem('contenedorCarrito', JSON.stringify(carrito));
        //
        contadorCarrito--;
        localStorage.setItem('botonCarritoNum',JSON.stringify(contadorCarrito))
        CarritoNum.textContent = localStorage.getItem('botonCarritoNum');

        //Actualizamos carrito
        ActualizarCarrito();
    })
}
//Vaciar el carrito
vaciar.addEventListener("click",()=>{
    vaciarCarrito()
})
//checkout
checkout.addEventListener("click",()=>{
    mostrarCheckout()
})
function vaciarCarrito() {
    
    // Limpiar localStorage
    localStorage.removeItem('contenedorCarrito');
    localStorage.removeItem('botonCarritoNum')
    
    // Renderizar
    contadorCarrito = 0;
    botonCarritoNum.textContent = contadorCarrito
    ActualizarCarrito();
}
// Funciones de Checkout
function mostrarCheckout() {
    let carrito = JSON.parse(localStorage.getItem('contenedorCarrito')) || [];
    let mensajeCarrito = document.querySelector("#mensaje-carrito");

    if (carrito.length === 0) {
        mensajeCarrito.style.animationName="carritovacio"
        setTimeout(()=>{
            mensajeCarrito.style.animationName=""
        },8000);
        return;
    }
    mensajeCarrito.style.animationName=""

    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'flex';

    //operaciones
    const idSubtotal = document.querySelector("#subtotal");
    const idIva = document.querySelector("#iva");
    const idDescuento = document.querySelector("#descuento");
    const idTotal = document.querySelector("#total");

    const IVA = 0.21
    let subtotal = 0
    const descuento = 0.20
    let totalDescuento= 0
    carrito.forEach(operacion =>{
         subtotal += operacion.precio
        console.log(operacion.precio)
    })
    idDescuento.textContent = 0
    idSubtotal.textContent= subtotal;
    idIva.textContent =  (subtotal * IVA);
    
    if(carrito.length >2){
        idDescuento.textContent = (subtotal * descuento)
        totalDescuento = descuento
    }
    console.log((subtotal-(subtotal * totalDescuento))+((subtotal * IVA)) )
    idTotal.textContent = (subtotal-(subtotal * totalDescuento))+((subtotal * IVA)) ;
}
//Realizar compras
function realizarCompra() {
    let gracias = document.querySelector(".gracias");
    // Simular compra
    gracias.style.display="block"
    
    setTimeout(() => {
        // Vaciar carrito
        localStorage.removeItem('contenedorCarrito');
        localStorage.removeItem('botonCarritoNum')
    
        // Cerrar modal
        cerrarCheckout();
    
        // Renderizar carrito vacío
        ActualizarCarrito();
        gracias.style.display=""
    },2000)
    
}
//Cerrar el checkout
function cerrarCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
}

