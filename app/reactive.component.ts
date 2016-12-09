import {Component} from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'reactive',
    template: `

       <!-- <input id="search" type="text" class="form-control"> -->

        <form [ngFormModel]="form"> 
            <input type="text" ngControl="search"> 
        </form>
    `
})
export class AppComponent {

    //constructor() {
    //  var element = $("#search");
    //  var observable = Observable.fromEvent(element, "keyup");
    //}

    form: FormGroup;

    constructor(fb: FormBuilder) {

        this.form = fb.group({
            search: []
        });

        // Creating an observable from DOM events

        var search = this.form.find('search');

        search.valueChanges
            .debounceTime(400)
            .map(str => (<string>str).replace(' ', '-'))
            .subscribe(x => console.log(x));


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

        var oe = Observable.throw(new Error("error"));
        var oa = Observable.fromArray([1, 2, 3]);

        oe.subscribe(x => console.log(x),
            error => console.log(error),
            () => console.log("completed"));

        oa.subscribe(x => console.log(x),
            error => console.log(error),
            () => console.log("completed"));

    }


}