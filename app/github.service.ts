import { Follower } from './follower';
import { User } from './user';
import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService{

    private _userUrl: string = "https://api.github.com/users/octocat";
    private _followrersUrl: string = "https://api.github.com/users/octocat/followers";

    constructor(private _http : Http){
    }

    getUser(): Observable<User>{
        return this._http.get(this._userUrl).map(response => response.json());
    }

    getFollowers(): Observable<Follower[]>{
        return this._http.get(this._followrersUrl).map(response => response.json());
    }

}