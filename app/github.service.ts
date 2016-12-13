import { Follower } from './follower';
import { User } from './user';
import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService{

    private _userUrl: string = "https://api.github.com/users/";

    constructor(private _http : Http){
    }

    getUser(username): Observable<User>{
        return this._http.get(this._userUrl + username).
            map(response => response.json());
    }

    getFollowers(username): Observable<Follower[]>{
        return this._http.get(this._userUrl + username + "/followers").
            map(response => response.json());
    }

}