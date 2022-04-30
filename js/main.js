const fila = document.querySelector('.contenedorSliderEsp');
const especialidad = document.querySelectorAll('.especialidad');
const flechaIzquierda =document.getElementById('flechaIzquierda');
const flechaDerecha =document.getElementById('flechaDerecha');

// --- event listener flecha derecha --- //
/* scrollLeft => dice el valor numerico del scroll actual, 
pero pasandole un valor, scrollLeft modificara el scroll a dicho valor */
// offsetWidth => dice el valor del ancho del contenedor
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth; 
   
    const indicadorActivo = document.querySelector('.indicadores .activo');
  
    if (indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth; 

    const indicadorActivo = document.querySelector('.indicadores .activo');
  
    if (indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }

});

// -- paginacion -- //
// Math.ceil => redondea hacia arriba!

const numeroDePaginas = Math.ceil(especialidad.length / 2);
for ( let i = 0; i< numeroDePaginas; i++){
    const indicador = document.createElement("button");
    if(i===0){
        indicador.classList.add('activo');
    }
    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) =>{
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}

window.onscroll = function(){
		
    var position = window.pageYOffset || document.documentElement.scrollTop;
            
    var elementoAMover = document.getElementById('elementoAMover');
            
    let cantidadDeMovimiento = position * 0.2 ;
    elementoAMover.style.top = 80-cantidadDeMovimiento + 'px';
    }
    


/* antes y despues */
divisor = document.getElementById("divisor");
slider = document.getElementById("slider");
function moveDivisor() { divisor.style.width = slider.value+"%"; } 

//reset after page load
window.onload = function() {
moveDivisor();
};    
/* termina antes y despues */
    