"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var Rx_1 = require('rxjs/Rx');
var ReactiveComponent = (function () {
    function ReactiveComponent(fb) {
        this.form = fb.group({
            search: []
        });
        // Creating an observable from DOM events
        var search = this.form['search'];
        search.valueChanges
            .debounceTime(400)
            .map(function (str) { return str.replace(' ', '-'); })
            .subscribe(function (x) { return console.log(x); });
        // // Creating an observable from an array
        // var startDates = [];
        // var startDate = new Date();
        // for (date = -2; date <= 2; date++) {
        //     var date = new Date(
        //         startDate.getFullYear(),
        //         startDate.getMonth(),
        //         startDate.getDay() + date
        //     );
        //     startDates.push(date);
        // }
        // var observable = Observable.fromArray(startDates);
        // observable.map(date => {  
        //     console.log("Getting deals for date " + date);  
        //     return [1, 2, 3]; 
        // })
        // .subscribe(x => console.log(x));
        // // Other ways to create an observable
        // //var otherObservable = Observable.empty();
        // //var otherObservable = Observable.range(1, 5);
        // //var otherObservable = Observable.fromArray([1, 2, 3]);  
        // //var otherObservable = Observable.of([1, 2, 3]);
        // var otherObservable = Observable.of(1, 2, 3);
        // otherObservable.subscribe(x => console.log(x));
        // // Implementing a timer
        // var intervalObservable = Observable.interval(1000);
        // intervalObservable
        // .flatMap(x => {
        //     console.log("calling the server");
        //     return Observable.of([1,2,3]);
        // })
        // .subscribe(news => console.log(news));
        // // Running Parallel Operations
        // var o1 = Observable.of({userId: 1, username: 'mosh'})
        //                 .delay(2000);
        // var o2 = Observable.of([1,2,3])
        //                 .delay(1500);
        // Observable.forkJoin(o1, o2).map(joined => 
        //     new Object(
        //         {user: joined[0], tweets: joined[1]}
        //     )
        // ).subscribe(result =>console.log(result));
        // // Handling Errors
        // var errorObs = Observable.throw(
        //     new Error("Something failed"));
        // errorObs.subscribe(
        //     x => console.log(x),
        //     error => console.error(error));
        // // Retry
        // var counter = 0;
        // var ajaxCall = Observable.of('url')
        // .flatMap(() => {
        //     if(++counter < 2)
        //         return Observable.throw(new Error("Request failed"));
        //     return Observable.of([1,2,3]);
        // });
        // ajaxCall.retry(2).subscribe(
        //     x => console.log(x),
        //     error => console.log(error));
        // // Catching and continuing
        // // var remoteDataStream = Observable.throw(
        // //     new Error("Something failed"));
        // var remoteDataStream = Observable.of([5,6,7,8]);
        // remoteDataStream.catch(err => {
        //     var localDataStream = Observable.of([1,2,3,4]);
        //     return localDataStream;
        // }).subscribe(x => console.log(x));
        // // Timeouts
        // var rStream = Observable.of(['a', 'b', 'c']).delay(5000);
        // rStream.timeout(1000).subscribe(
        //     x => console.log(x),
        //     error => console.log(error));
        // Getting notified when an observable completes
        var oe = Rx_1.Observable.throw(new Error("error"));
        var oa = Rx_1.Observable.of(1, 2, 3);
        oe.subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); }, function () { return console.log("completed"); });
        oa.subscribe(function (x) { return console.log(x); }, function (error) { return console.log(error); }, function () { return console.log("completed"); });
    }
    ReactiveComponent = __decorate([
        core_1.Component({
            selector: 'reactive',
            template: "\n\n       <!-- <input id=\"search\" type=\"text\" class=\"form-control\"> -->\n\n        <form [ngFormModel]=\"form\"> \n            <input type=\"text\" ngControl=\"search\"> \n        </form>\n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ReactiveComponent);
    return ReactiveComponent;
}());
exports.ReactiveComponent = ReactiveComponent;
//# sourceMappingURL=reactive.component.js.map