"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs"); //importiamo le funzioni
var operators_1 = require("rxjs/operators");
//Range è lo stream es. -1-2-3-4-5
(0, rxjs_1.range)(1, 200)
    .pipe(//con il metodo pipe raccoglie gli operatori che abbiamo importato da rxjs per interagire con il flusso
(0, operators_1.filter)(function (elemento) { return elemento % 5 === 0; }), //filtriamo solo gli elementi divisibili per 5
(0, operators_1.map)(function (x) { return x + x; }) //eseguiamo una funzione ad ogni iterazione
).subscribe(function (x) { return console.log(x); }); //con questo metodo noi ci abboniamo come Observer per leggerli 
/*

importiao dal npm di rxjs le funzioni range,filter,map




*/ 
