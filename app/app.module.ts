import { HomeComponent } from './home.component';
import { ArchiveComponent } from './archive.component';
import { GitHubService } from './github.service';
import { GitHubComponent } from './github.component';
import { JsonpModule, HttpModule } from '@angular/http';
import { ChangePasswordFormComponent } from './changepassword-form.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SubscriptionFormComponent } from './subscription-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':year/:month', component: ArchiveComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpModule, 
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent, 
    SubscriptionFormComponent, 
    ChangePasswordFormComponent, 
    GitHubComponent,
    ArchiveComponent,
    HomeComponent
  ],
  providers:[
    GitHubService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
