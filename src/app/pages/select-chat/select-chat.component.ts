import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../service/chat.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-select-chat',
  templateUrl: './select-chat.component.html',
  styleUrls: ['./select-chat.component.scss']
})
export class SelectChatComponent implements OnInit {
  chats: any;

  constructor(private chat: ChatService,
              private router: Router) { }

  ngOnInit() {
    this.chat.getAllChat().then(value => this.chats = value);
  }

  openChat(key: any) {
    this.router.navigate([`/chat/${key}`]);
  }
}
