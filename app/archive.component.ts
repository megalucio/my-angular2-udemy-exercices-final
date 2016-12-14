import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'archive',
    template: `
        <h3>Archive</h3>
        {{params.year}} {{params.month}}
    `
})

export class ArchiveComponent implements OnInit{
    params;

    constructor(private _route: ActivatedRoute){}

    ngOnInit(){
        this._route.params.subscribe(params =>{
            this.params = params;
        })
    }

}