import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../service/chat.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages$;

  constructor(private chat: ChatService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(value => {
      console.log(value);
      if (value.key) {
        this.chat.getChat(value.key);
      } else {
        this.chat.getChat();
      }
      this.chat.getMessage(v => {
        this.messages$ = v;
      });
    });
  }

  enterHandler(event: KeyboardEvent) {
    if (event.key !== 'Enter') { return; }

    const target = (event.target as HTMLInputElement);
    const value = target.value;
    target.value = '';
    this.chat.addMessage({
      title: value,
      user: 'user'
    });
  }

}
