import { Follower } from './follower';
import { Observable } from 'rxjs/Rx';
import { User } from './user';
import { GitHubService } from './github.service';
import { OnInit, Component } from '@angular/core';

import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'github',
    template: `
                <div *ngIf="loading">
                    <i class="fa fa-spinner fa-spin fa-3x"></i>
                </div>        
                <h3>@{{login}}<h3>
                <div class="media">
                    <div class="media-left">
                        <img class="media-object avatar" [src]="avatar_url">
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading"></h4>  
                    </div>
                </div>
                <h3>Followers<h3>
                <div *ngFor="let follower of followers" class="media">
                    <div class="media-left">
                        <img class="media-object avatar" [src]="follower.avatar_url">
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{follower.login}}</h4>  
                    </div>
                </div>
            `,
    styles: [`.avatar {  
                    width: 100; 
                    height: 100; 
                    border-radius: 100%;  
            }`]


})
export class GitHubComponent implements OnInit {

    user: User;
    followers: Follower[];

    loading = true;

    avatar_url: string;
    login: string;

    constructor(private _gitHubService: GitHubService) {

    }

    ngOnInit() {

        Observable.forkJoin(this._gitHubService.getUser(), this._gitHubService.getFollowers())
            .subscribe(x => {
                this.loading = false;
                this.user = x[0];
                this.followers = x[1];
                this.avatar_url = this.user.avatar_url;
                this.login = this.user.login;
            });
    }

}
