import { nextTick } from "process";
import { Observable,map,filter,from } from "rxjs";




//Creiamo un Observable da 0
//Un Observable è un flusso di dati come il precedente "range"
//che di sua natura è lazy (pigro), ci dovrà essere qualcuno
//che si deve sotto scrivere (subscribe) per poter accedere
//al flusso

//per non confondersi range e from sono esempi di observable

let elementi : Array<any>= [1,"ciao",2,"mondo"];

//dichiaro un observable
let obs : Observable<any> = new Observable(
    subscriber=>{
       
    //esistono 3 metodi per il subscriber: next, error,complete
    
   
    for(let x of elementi){

        subscriber.next(x);
    }
    
    setTimeout(()=> {subscriber.next(5)},5000); //Dopo 5 secondi verrà mandato 5 a video     

    //subscriber.complete(); SINCRONA 
    
});



    obs.pipe(  //pipe serve per utilizzare i vari operatori sugli observable
            filter(x=> typeof x === "number"),
            map(x => x+5)
        )
    .subscribe({ //infine ci abbonamo al flusso e per ciascun dato lo lanciamo in console
        
        //Al metodo subscribe passiamo un oggetto contenente 3 metodi appunto next error e complete
        
        next(x){
            
            console.log("elemento = " + x);
            
        },

     

        

        error(x){
            console.log(`c'è stato un errore: ${x}`);
        }
        
    }); 


    /*
    function prova():number{
        return 5;
    }

    let somma = (a:number,b:number) =>{
        return a+b;
    }
    */
/*

    Nel caso in cui vogliate gestire non solo i valori emessi ma anche error e complete, meglio passare un oggetto observer fatto così:

        observable.subscribe({
            next(x) { console.log('got value ' + x); },
            error(err) { console.error('something wrong occurred: ' + err); },
            complete() { console.log('done'); }
        });

    che usa la sintassi corta di proprietà valore. La sintassi lunga sarebbe:

        observable.subscribe({
            next: x => console.log('got value ' + x),
            error: err =>  console.error('something wrong occurred: ' + err),
            complete: () =>  console.log('done')
        });


*/


