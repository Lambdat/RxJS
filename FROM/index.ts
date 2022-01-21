import {from} from "rxjs"; //importiamo l'observable
import {filter,map,tap} from "rxjs/operators" //operatori di pipe

//Il From è un metodo che restituisce un Observable 
//dato un array di elementi


from([1,2,3,4,5,6,7,8,9]) //passiamo nei parametri un array di interi
.pipe(  //con il metodo pipe iniziamo ad utilizzare gli operatori
    
    filter(x=> x % 2 == 0), //con l'operatore filter appunto filtriamo ma guarda te
    
    tap(x=> console.log("Ciao Mondo")), //operatore che si inerpone

    map(x=> x*x)    //operatore che ad ogni ciclo effettua qualcosa
)



.subscribe( //ora ci sottoscriviamo all'Observable from
    subscriber=>
    {
        console.log(subscriber);
    }
    
)