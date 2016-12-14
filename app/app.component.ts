import { ArchiveComponent } from './archive.component';
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
      <!--<subscription-form></subscription-form>-->
      <!--<changepassword-form></changepassword-form>-->
      <!--<github></github>-->
      <ul>
        <li *ngFor="let archive of archives">
          <a routerLink="/{{archive.year}}/{{archive.month}}" routerLinkActive="active">
            {{archive.year}}/{{archive.month}}
          </a>
        </li>
      </ul>
      <router-outlet></router-outlet>

            `
})
export class AppComponent { 

  archives = [{year: 2016, month: 4}, {year: 2016, month: 2}, {year: 2015, month: 12}];

}
