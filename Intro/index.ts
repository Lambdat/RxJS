import {range} from "rxjs"; //importiamo le funzioni
import {filter,map} from "rxjs/operators"

//Range è lo stream es. -1-2-3-4-5
range(1,200)
    .pipe(  //con il metodo pipe raccoglie gli operatori che abbiamo importato da rxjs per interagire con il flusso
        filter( elemento => elemento % 5 === 0), //filtriamo solo gli elementi divisibili per 5
        map(x=>x+x)   //eseguiamo una funzione ad ogni iterazione


).subscribe(x=> console.log(x)); //con questo metodo noi ci abboniamo come Observer per leggerli 

/*

importiao dal npm di rxjs le funzioni range,filter,map




*/