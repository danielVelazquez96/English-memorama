

// Variable de libreria underscores
let _ = require('underscore');

// get elements by DOM
const NameJugador1=document.getElementById('nombreJugador1');
const NameJugador2=document.getElementById('nombreJugador2');

const PointsJugador1=document.getElementById('conteoJugador1');
const PointsJugador2=document.getElementById('conteoJugador2');

const cartas=document.querySelectorAll('.container .card');
const cartasImg=document.querySelectorAll('.container .card img');


let urlImages=[
    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851254/hc9awoljzdzleiiqasnx.jpg`,
    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851432/qjjjw4q2172h0xiwuqud.jpg`,

    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851390/zjvmqejwykychuqpftt3.jpg`,
    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851435/ba6pbaobunjkdnmce3io.jpg`,

    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851409/mqwqq28niueanjwpbfk7.jpg`,
    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851439/horge2fv0g7xw8mlzxdn.jpg`,

    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851413/l4p8qhlq6extqwvlxynj.jpg`,
    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851443/x1z2tqeaoj04dfftv4gy.jpg`,

    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851417/t9uekizl08ruwzkusqnm.jpg`,
    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851447/rspdq43mxxpnntyjoz51.jpg`,

    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851420/sopwfwzmcily2jzbcrse.jpg`,
    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851451/buqixsa81e0c5v72g4hr.jpg`,

    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851424/nfrx7ollvrck5krqmhst.jpg`,
    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851455/xqu6rno9dethsqrzkjil.jpg`,

    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851429/cxthv4vdvmtiqcjptqbg.jpg`,
    `https://res.cloudinary.com/dxi9i9ucm/image/upload/v1641851458/f6umgeddkznxjckyxv6u.jpg`,
];




// Game Variables
let points=[0,0];

let deck;

let turnoPlayer,
    turno,
    parSelectCards,
    parSelectCardsNumber;

let name1, 
    name2;


//Funcions ---------------------------------------------------------------------------
const setNames=()=>{
    
    setTimeout(() => {
        name1=prompt('Player 1 name');
        name2=prompt('Player 2 name');

        name1=(name1)?name1:'Player 1';
        name2=(name2)?name2:'Player 2';

        NameJugador1.innerHTML=name1;
        NameJugador2.innerHTML=name2;
    }, 1000);

    
}

const events=()=>{
    cartas.forEach((carta,index)=>{

        carta.addEventListener('click',()=>{
            carta.classList.remove('facedown');
            game(index);

        })

    })

}

const initDeck=()=>{
    // Codigo to use static resource later
    // for(let i=0; i<cartas.length;i++){
    //     deck.push(i+1);
    // }
    // // Shuffle deck
    // deck=_.shuffle(deck);
  
    urlImages=_.shuffle(urlImages);
}

const placeCards=()=>{
    cartasImg.forEach((card,i)=>{
        card.src=urlImages[i];
        // card.src=`/assets/img/memorama/body/${deck[i]}.jpg`
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

const winOrLoseTurn=([cart1,cart2])=>{
            //Code to static resource later. 
    // return (deck[cart1]==1 && deck[cart2]==9)?1:
    //         (deck[cart1]==2 && deck[cart2]==10)?1:
    //         (deck[cart1]==3 && deck[cart2]==11)?1:
    //         (deck[cart1]==4 && deck[cart2]==12)?1:
    //         (deck[cart1]==5 && deck[cart2]==13)?1:
    //         (deck[cart1]==6 && deck[cart2]==14)?1:
    //         (deck[cart1]==7 && deck[cart2]==15)?1:
    //         (deck[cart1]==8 && deck[cart2]==16)?1:
    //         (deck[cart1]==9 && deck[cart2]==1)?1:
    //         (deck[cart1]==10 && deck[cart2]==2)?1:
    //         (deck[cart1]==11 && deck[cart2]==3)?1:
    //         (deck[cart1]==12 && deck[cart2]==4)?1:
    //         (deck[cart1]==13 && deck[cart2]==5)?1:
    //         (deck[cart1]==14 && deck[cart2]==6)?1:
    //         (deck[cart1]==15 && deck[cart2]==7)?1:
    //         (deck[cart1]==16 && deck[cart2]==8)?1:
    //         0;

    return  (parSelectCards[0].indexOf(`qasnx`)!==-1   &&  parSelectCards[1].indexOf(`wuqud`)!==-1)?1:
            (parSelectCards[0].indexOf(`qpftt3`)!==-1  &&  parSelectCards[1].indexOf(`e3io`)!==-1)?1:
            (parSelectCards[0].indexOf(`wpbfk7`)!==-1  &&  parSelectCards[1].indexOf(`lzxdn`)!==-1)?1:
            (parSelectCards[0].indexOf(`vlxynj`)!==-1  &&  parSelectCards[1].indexOf(`ftv4gy`)!==-1)?1:
            (parSelectCards[0].indexOf(`usqnm`)!==-1   &&  parSelectCards[1].indexOf(`joz51`)!==-1)?1:
            (parSelectCards[0].indexOf(`bcrse`)!==-1   &&  parSelectCards[1].indexOf(`72g4hr`)!==-1)?1:
            (parSelectCards[0].indexOf(`qmhst`)!==-1   &&  parSelectCards[1].indexOf(`zkjil`)!==-1)?1:
            (parSelectCards[0].indexOf(`tqbg`)!==-1    &&  parSelectCards[1].indexOf(`yxv6u`)!==-1)?1:
            (parSelectCards[0].indexOf(`wuqud`)!==-1   &&  parSelectCards[1].indexOf(`qasnx`)!==-1)?1:
            (parSelectCards[0].indexOf(`e3io`)!==-1    &&  parSelectCards[1].indexOf(`qpftt3`)!==-1)?1:
            (parSelectCards[0].indexOf(`lzxdn`)!==-1   &&  parSelectCards[1].indexOf(`wpbfk7`)!==-1)?1:
            (parSelectCards[0].indexOf(`ftv4gy`)!==-1  &&  parSelectCards[1].indexOf(`vlxynj`)!==-1)?1:
            (parSelectCards[0].indexOf(`joz51`)!==-1   &&  parSelectCards[1].indexOf(`usqnm`)!==-1)?1:
            (parSelectCards[0].indexOf(`72g4hr`)!==-1  &&  parSelectCards[1].indexOf(`bcrse`)!==-1)?1:
            (parSelectCards[0].indexOf(`zkjil`)!==-1   &&  parSelectCards[1].indexOf(`qmhst`)!==-1)?1:
            (parSelectCards[0].indexOf(`yxv6u`)!==-1   &&  parSelectCards[1].indexOf(`tqbg`)!==-1)?1:
            0;
}

const endGame=()=>{
    const title=document.querySelector('header h1');
    title.innerHTML=(points[0]==points[1])?"DRAW"
                  :(points[0]>points[1])?`${name1} WIN`
                  :(`${name2} WIN`);

    title.style="text-transform: uppercase;";
}

const addpoint=()=>{
    PointsJugador1.innerHTML=points[0];
    PointsJugador2.innerHTML=points[1];
}

// Funcion main of game----------------------------------------------------------------
const game=(SelectCard)=>{
    const containerCard=document.querySelector('.container');

    turno++;
    if(!(turno%2==0)){
        parSelectCards.push(cartasImg[SelectCard].src);
        parSelectCardsNumber.push(SelectCard);

    }else{
        parSelectCards.push(cartasImg[SelectCard].src);
        parSelectCardsNumber.push(SelectCard);

        // if the player got the pair or not
        if(winOrLoseTurn(parSelectCards)){
            points[turnoPlayer]++;
            addpoint();

            // event disable
            containerCard.style.pointerEvents = 'none';
            setTimeout(() => {
                
                cartas[parSelectCardsNumber[0]].style="transform: scale(0,1);"
                cartas[parSelectCardsNumber[1]].style="transform: scale(0,1);"
                parSelectCardsNumber=[];
                parSelectCards=[];
                
                // Event re-enable
                containerCard.style.pointerEvents = 'auto';
            }, 1500);
            
            if(points[0]+points[1]==8) {endGame();}

            
        }else{
            // Events disable
            containerCard.style.pointerEvents = 'none';
            setTimeout(()=>{

                cartas[parSelectCardsNumber[0]].classList.add('facedown');
                cartas[parSelectCardsNumber[1]].classList.add('facedown');
                parSelectCardsNumber=[];
                parSelectCards=[];
                // Switch player turn
                turnoPlayer=(turnoPlayer) ? 0 : 1 ;
                changeColorTurno(turnoPlayer);

                // Event re-enable
                containerCard.style.pointerEvents = 'auto';
            }, 1500);
        }
        
    }

}

// Funcion to init--------------------------------------------------------------------
const init=()=>{
    
    setNames();

    deck=[];
    initDeck();

    turnoPlayer=0;
    changeColorTurno(turnoPlayer);
    
    points=[0,0];

    addpoint();
    
    turno=0;
    parSelectCards=[];
    parSelectCardsNumber=[];

    events()
    placeCards();

    
}



export{
    init
}


