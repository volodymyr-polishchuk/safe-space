import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages$;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.getMessage(value => {
      this.messages$ = value;
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
