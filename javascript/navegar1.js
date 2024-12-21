
//presentacion (carrusel)
const img = document.querySelector("#imgPresentacion");
let imagenes = ["uñas1.png","uñas2.jpg","uñas3.jpg","uñas4.jpg","uñas5.jpg","uñas6.jpg"]

function cargaCarrusel(){
    let i= 0;
    setInterval(()=>{
        img.src="../img/"+imagenes[i];
        i +=1;
        if(i == 6){
            i = 0;
        }
    },2500)
}
//menu Carrito
const cajaCarrito = document.querySelector(".cajaCarrito");
const boton = document.querySelector(".botonCarrito");

boton.addEventListener("click",()=>{  
    despegarCarrito(); 
});
let contador = 0;
function despegarCarrito(){
    
    if(contador == 0) {
        cajaCarrito.style.height="100%";
        cajaCarrito.style.paddingTop="1%"
        cajaCarrito.style.transition="all 1.6s"
        contador = 1;
    }else{
        cajaCarrito.style.height="0vh";
        cajaCarrito.style.paddingTop="0%"
        cajaCarrito.style.transition="all 1.s"
        contador = 0;
    }
}
//menu hamburgueza
const botonMenu = document.querySelector("#menu");
const cajaMenu = document.querySelector(".divMenu ul");

let contadorMenu = 0;
botonMenu.addEventListener("click",()=>{  
    despegarMenu();
});
function despegarMenu(){
    if(contadorMenu == 0) {
        cajaMenu.style.height="auto"
        cajaMenu.style.transition="all 2.5s"
        contadorMenu = 1;
    }else{
        cajaMenu.style.height=""
        cajaMenu.style.transition="all 2.5s"
        contadorMenu = 0;
    }
}