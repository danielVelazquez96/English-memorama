 

 class Deck{
     cartas=[];

     constructor(images,titles){
        this.cartas=images+titles;
        
     }  

     DropCard(){
        const randomNumer=Math.floor(Math.random()*this.cartas.length);
        return this.cartas.splice(randomNumer,1);
     }

 }