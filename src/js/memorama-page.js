
// Variable de libreria underscores
let _ = require('underscore');

// get elements by DOM
const NameJugador1=document.getElementById('nombreJugador1');
const NameJugador2=document.getElementById('nombreJugador2');

const PointsJugador1=document.getElementById('conteoJugador1');
const PointsJugador2=document.getElementById('conteoJugador2');

const cartas=document.querySelectorAll('.container .card')
const cartasImg=document.querySelectorAll('.container .card img')

// Game Variables
let points=[0,0];

let deck;

let turnoPlayer,
    turno,
    parSelectCards;




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
            game(index);

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

const changeColorTurno=(turno)=>{
    const colorActivePlayer='blue';
    if(!turno){
        NameJugador1.style.color=colorActivePlayer;
        PointsJugador1.style.color=colorActivePlayer;
        NameJugador2.style.color='black';
        PointsJugador2.style.color='black';
    }else{
        NameJugador1.style.color='black';
        PointsJugador1.style.color='black';
        NameJugador2.style.color=colorActivePlayer;
        PointsJugador2.style.color=colorActivePlayer;
    }
}


const game=(SelectCard)=>{
    turno++;
    if(!(turno%2==0)){
        parSelectCards.push(SelectCard);
    }else{
        parSelectCards.push(SelectCard);
        // Validar si acerto o no acerto
        if(winOrLoseTurn(parSelectCards)){
            points[turnoPlayer]++;
            addpoint();
            // addpoint();

            // cartas[parSelectCards[0]].style='cursor: not-allowed;';
            // cartas[parSelectCards[1]].style='cursor: not-allowed;';
            cartas[parSelectCards[0]].removeEventListener('click',this,false);
            cartas[parSelectCards[1]].removeEventListener('click',this,false);
           
            parSelectCards=[];
            
        }else{

            setTimeout(()=>{
                cartas[parSelectCards[0]].classList.toggle('facedown');
                cartas[parSelectCards[1]].classList.toggle('facedown');
                parSelectCards=[];
            }, 1500);
            
                
        }
        turnoPlayer=(turnoPlayer) ? 0 : 1 ;
        changeColorTurno(turnoPlayer);
    }
}

const winOrLoseTurn=([cart1,cart2])=>{

    return (deck[cart1]==1 && deck[cart2]==9)?1:
            (deck[cart1]==2 && deck[cart2]==10)?1:
            (deck[cart1]==3 && deck[cart2]==11)?1:
            (deck[cart1]==4 && deck[cart2]==12)?1:
            (deck[cart1]==5 && deck[cart2]==13)?1:
            (deck[cart1]==6 && deck[cart2]==14)?1:
            (deck[cart1]==7 && deck[cart2]==15)?1:
            (deck[cart1]==8 && deck[cart2]==16)?1:
            (deck[cart1]==9 && deck[cart2]==1)?1:
            (deck[cart1]==10 && deck[cart2]==2)?1:
            (deck[cart1]==11 && deck[cart2]==3)?1:
            (deck[cart1]==12 && deck[cart2]==4)?1:
            (deck[cart1]==13 && deck[cart2]==5)?1:
            (deck[cart1]==14 && deck[cart2]==6)?1:
            (deck[cart1]==15 && deck[cart2]==7)?1:
            (deck[cart1]==16 && deck[cart2]==8)?1:
            0;
}


const addpoint=()=>{
    PointsJugador1.innerHTML=points[0];
    PointsJugador2.innerHTML=points[1];
}

const init=()=>{
    
    // htmlNames();

    deck=[];
    initDeck();

    turnoPlayer=0;
    changeColorTurno(turnoPlayer);
    
    points=[0,0];

    addpoint();
    
    turno=0;
    parSelectCards=[];

    events()
    placeCards();

    
}



export{
    init
}