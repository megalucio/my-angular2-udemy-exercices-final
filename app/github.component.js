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
var Rx_1 = require('rxjs/Rx');
var github_service_1 = require('./github.service');
var core_1 = require('@angular/core');
require('rxjs/add/observable/forkJoin');
var GitHubComponent = (function () {
    function GitHubComponent(_gitHubService) {
        this._gitHubService = _gitHubService;
        this.loading = true;
        this.username = "octocat";
        this.user = {};
        this.followers = [];
    }
    GitHubComponent.prototype.ngOnInit = function () {
        var _this = this;
        Rx_1.Observable.forkJoin(this._gitHubService.getUser(this.username), this._gitHubService.getFollowers(this.username))
            .subscribe(function (x) {
            _this.user = x[0];
            _this.followers = x[1];
        }, null, function () { return _this.loading = false; });
    };
    GitHubComponent = __decorate([
        core_1.Component({
            selector: 'github',
            template: "\n                <div *ngIf=\"loading\">\n                    <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n                </div>        \n                <h3>@{{user.login}}<h3>\n                <div class=\"media\">\n                    <div class=\"media-left\">\n                        <img class=\"media-object avatar\" [src]=\"user.avatar_url\">\n                    </div>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\"></h4>  \n                    </div>\n                </div>\n                <h3>Followers<h3>\n                <div *ngFor=\"let follower of followers\" class=\"media\">\n                    <div class=\"media-left\">\n                        <img class=\"media-object avatar\" [src]=\"follower.avatar_url\">\n                    </div>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\">{{follower.login}}</h4>  \n                    </div>\n                </div>\n            ",
            styles: [".avatar {  \n                    width: 100; \n                    height: 100; \n                    border-radius: 100%;  \n            }"]
        }), 
        __metadata('design:paramtypes', [github_service_1.GitHubService])
    ], GitHubComponent);
    return GitHubComponent;
}());
exports.GitHubComponent = GitHubComponent;
//# sourceMappingURL=github.component.js.map