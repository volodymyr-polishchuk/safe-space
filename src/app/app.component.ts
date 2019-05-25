import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ChatService} from './service/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService,
              private af: ChatService) {
    translate.setDefaultLang('uk');
  }

  getAll() {
    this.af.getMessage(value => {
      console.log(value);
    });
  }

  addOne() {
    this.af.addMessage({title: 'hello', user: 'hello'});
  }

}
