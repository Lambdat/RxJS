"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs"); //importiamo l'observable
var operators_1 = require("rxjs/operators"); //operatori di pipe
//Il From è un metodo che restituisce un Observable 
//dato un array di elementi
(0, rxjs_1.from)([1, 2, 3, 4, 5, 6, 7, 8, 9]) //passiamo nei parametri un array di interi
    .pipe(//con il metodo pipe iniziamo ad utilizzare gli operatori
(0, operators_1.filter)(function (x) { return x % 2 == 0; }), //con l'operatore filter appunto filtriamo ma guarda te
(0, operators_1.tap)(function (x) { return console.log("Ciao Mondo"); }), //operatore che si inerpone
(0, operators_1.map)(function (x) { return x * x; }) //operatore che ad ogni ciclo effettua qualcosa
)
    .subscribe(//ora ci sottoscriviamo all'Observable from
function (//ora ci sottoscriviamo all'Observable from
subscriber) {
    console.log(subscriber);
});
