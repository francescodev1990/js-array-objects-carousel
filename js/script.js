//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creo array con dati letterali associati alle foto con i seguenti dati:

//- url dell’immagine
//- titolo
//- descrizione

const dataFoto = [
    foto1 = {
      url: 'Stairway to Heaven',
      titolo: 'Led Zeppelin',
      descrizione: '1971'
    },
    foto2 = {
        url: 'Stairway to Heaven',
        titolo: 'Led Zeppelin',
        descrizione: '1971'
    },
    foto3 = {
        url: 'Stairway to Heaven',
        titolo: 'Led Zeppelin',
        descrizione: '1971'
      },
      foto4 = {
          url: 'Stairway to Heaven',
          titolo: 'Led Zeppelin',
          descrizione: '1971'
      },
    
  ];

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){

    console.log(itemActive);
});

prev.addEventListener('click', function(){
    console.log(circles);
})


