
// Variable de libreria underscores
var _ = require('underscore');

// get elements by DOM
const NameJugador1=document.getElementById('nombreJugador1');
const NameJugador2=document.getElementById('nombreJugador2');

const CountJugador1=document.getElementById('conteoJugador1');
const CountJugador2=document.getElementById('conteoJugador2');

const cartas=document.querySelectorAll('.container .card')
const cartasImg=document.querySelectorAll('.container .card img')

// Game Variables
let conteoJugaodr1;
let conteoJugaodr2;

let deck=[];


const htmlNames=()=>{
    const name1=prompt('Nombre del jugador 1',);
    const name2=prompt('Nombre del jugador 2',);

    NameJugador1.innerHTML=(name1)?name1:'Jugador1';
    NameJugador2.innerHTML=(name2)?name2:'Jugador2';
    
}

const events=()=>{

    cartas.forEach((carta,index)=>{
        carta.addEventListener('click',()=>{

            carta.classList.toggle('facedown');
           
        })
    })

}

const initDeck=()=>{
    for(let i=0; i<cartas.length;i++){
        deck.push(i+1);
    }
    // Shuffle deck
    deck=_.shuffle(deck);
  
}

const placeCards=()=>{
    cartasImg.forEach((card,i)=>{
        card.src=`/assets/img/memorama/body/${deck[i]}.jpg`
    })
}


const init=()=>{
    
    // htmlNames();

    conteoJugaodr1=0;
    conteoJugaodr2=0;

    CountJugador1.innerHTML=conteoJugaodr1;
    CountJugador2.innerHTML=conteoJugaodr2;
    
    initDeck();

    events()

    placeCards();
}



export{
    init
}