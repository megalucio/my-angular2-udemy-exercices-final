import { ChangePasswordFormComponent } from './changepassword-form.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SubscriptionFormComponent } from './subscription-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, SubscriptionFormComponent, ChangePasswordFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
