"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
//Creiamo un Observable da 0
//Un Observable è un flusso di dati come il precedente "range"
//che di sua natura è lazy (pigro), ci dovrà essere qualcuno
//che si deve sotto scrivere (subscribe) per poter accedere
//al flusso
//per non confondersi range e from sono esempi di observable
var elementi = [1, "ciao", 2, "mondo"];
//dichiaro un observable
var obs = new rxjs_1.Observable(function (subscriber) {
    //esistono 3 metodi per il subscriber: next, error,complete
    for (var _i = 0, elementi_1 = elementi; _i < elementi_1.length; _i++) {
        var x = elementi_1[_i];
        subscriber.next(x);
    }
    setTimeout(function () { subscriber.next(5); }, 5000); //Dopo 5 secondi verrà mandato 5 a video     
    //subscriber.complete();
});
obs.pipe(//pipe serve per utilizzare i vari operatori sugli observable
(0, rxjs_1.filter)(function (x) { return typeof x === "number"; }), (0, rxjs_1.map)(function (x) { return x + 5; }))
    .subscribe({
    //Al metodo subscribe passiamo un oggetto contenente 3 metodi appunto next error e complete
    next: function (x) {
        console.log("elemento = " + x);
    },
    error: function (x) {
        console.log("c'\u00E8 stato un errore: ".concat(x));
    }
});
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
