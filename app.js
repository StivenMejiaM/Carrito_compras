/*-----------CONSTANTES--------------*/

const contener = document.querySelector("main");
const movie = document.getElementById("series");
const opcion2 = document.getElementById("opcion-create");
let imgselected = "";
let idProduct = 0;

/*-----------VENTANA--------------*/

const pagar = document.getElementById("pagar");
const cancelar = document.getElementById("cancelar");
const modal = document.querySelector('.modal');
const borrar = document.getElementById('eliminar');
const NewProduct = document.getElementById('nuevo_producto');
const NewPrice = document.getElementById('nuevo_precio');
const NewImg = document.getElementById('nueva_imagen');
const BotonCrear = document.getElementById('crear');
const filterPrice = document.getElementById('filter');
const container = document.getElementById('contenedor');

/*-----------EVENTOS----------------*/

window.addEventListener('load', selecionador);
movie.addEventListener('change', validar);
opcion2.addEventListener('click', showModal);
BotonCrear.addEventListener('click', createNewProduct);
NewImg.addEventListener('change', importImg);
borrar.addEventListener('click', ()=> modal.style.display = 'none');
filterPrice.addEventListener('change', filterProduct);

function filterProduct(event){
    const responsefilter = event.target.value === 'Menores a 40'
    ? coleccion.filter(serie => serie.valor < 40)
    : event.target.value === 'Entre 45 y 61'
    ? coleccion.filter(serie => serie.valor >=45 && serie.valor <=61)
    : event.target.value === 'Mayores 61 a 80'
    ? coleccion.filter(serie => serie.valor >=61 && serie.valor <=80)
    : event.target.value === 'Elevados a 100'
    ? coleccion.filter(serie => serie.valor >100)
    : null;

    container.innerHTML = ' ';
    responsefilter.map(serie => crear(serie));
}

function importImg(event){
    const currentImg = event.target.files[0];
    const objetURL = URL.createObjectURL(currentImg);
    imgselected = objetURL;
}


function createNewProduct(){
    idProduct++;
    const tittleProduct = NewProduct.value;
    const priceProduct = NewPrice.value;
    const id = idProduct;
    const NewSeries = { id: id ,portada: tittleProduct ,total: 1,valor: priceProduct ,imagen: imgselected };

    coleccion.push(NewSeries);
    selecionador();
    modal.style.display = 'none';
}


function showModal(){
    modal.style.display = 'flex';
}


function validar() { 
  coleccion.map(serie => { serie.portada === movie.value ? crear(serie) : null }); 
  coleccion.map(serie => { serie.id === anuncio.id ? alert("r") : null }); 
}


function selecionador() {
    series.innerHTML = '';
    const anyOpcion = document.createElement('option');
    series.appendChild(anyOpcion);
    anyOpcion.textContent = 'Select a Product';
    coleccion.map( serie => {
    const elegir = document.createElement('option');
    elegir.value = serie.portada;
    elegir.textContent = serie.portada;    
    movie.appendChild(elegir);
  });

}


function crear(serie) {
  const {portada,total, imagen,id,valor} = serie;  

  const anuncio = document.createElement('div');
  const foto = document.createElement('img');
  const nombre = document.createElement('p');
  const precio = document.createElement('p');
  const agregar = document.createElement('button');
  const eliminar = document.createElement('button');
  const cantidad= document.createElement('p');


  anuncio.setAttribute('id',id);
  cantidad.textContent=("cantidad: "+total);
  eliminar.textContent="X";
  eliminar.classList.add('deleted');
  eliminar.setAttribute('id',id);
  anuncio.classList.add('card-product');
  foto.setAttribute('src',imagen);
  foto.setAttribute('alt',portada);
  foto.classList.add('img-product');
  nombre.textContent = portada;
  nombre.classList.add('name-product');
  precio.classList.add('price-product');
  precio.textContent = valor; 
  agregar.setAttribute('id',id);
  agregar.classList.add('btn-add');
  agregar.textContent = 'Agregar';
  


 
  anuncio.appendChild(eliminar);
  anuncio.appendChild (foto);
  anuncio.appendChild(cantidad);
  anuncio.appendChild(nombre);
  anuncio.appendChild(precio);
  anuncio.appendChild(agregar);



  contener.appendChild(anuncio);



const deshacer = document.getElementById(id);

deshacer.addEventListener('click',borrando);

function borrando(){
  const anuncio = document.getElementById(id);
  contener.removeChild(anuncio);
}
}