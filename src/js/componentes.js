
// get elements by DOM
const NameJugador1=document.getElementById('nombreJugador1');
const NameJugador2=document.getElementById('nombreJugador2');

const CountJugador1=document.getElementById('conteoJugador1');
const CountJugador2=document.getElementById('conteoJugador2');

let conteoJugaodr1;
let conteoJugaodr2;

const htmlNames=()=>{
    const name1=prompt('Nombre del jugador 1',);
    const name2=prompt('Nombre del jugador 2',);

    NameJugador1.innerHTML=(name1)?name1:'Jugador1';
    NameJugador2.innerHTML=(name2)?name2:'Jugador2';
    
}


const init=()=>{
    
    // htmlNames();

    conteoJugaodr1=0;
    conteoJugaodr2=0;

    CountJugador1.innerHTML=conteoJugaodr1;
    CountJugador2.innerHTML=conteoJugaodr2;
    
}





export{
    init
}