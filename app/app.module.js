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
var home_component_1 = require('./home.component');
var archive_component_1 = require('./archive.component');
var github_service_1 = require('./github.service');
var github_component_1 = require('./github.component');
var http_1 = require('@angular/http');
var changepassword_form_component_1 = require('./changepassword-form.component');
var subscription_form_component_1 = require('./subscription-form.component');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: ':year/:month', component: archive_component_1.ArchiveComponent },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            declarations: [
                app_component_1.AppComponent,
                subscription_form_component_1.SubscriptionFormComponent,
                changepassword_form_component_1.ChangePasswordFormComponent,
                github_component_1.GitHubComponent,
                archive_component_1.ArchiveComponent,
                home_component_1.HomeComponent
            ],
            providers: [
                github_service_1.GitHubService
            ],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map