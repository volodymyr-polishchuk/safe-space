import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {ChatMessage} from '../model/ChatMessage';
import {Chat} from '../model/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages$: AngularFireList<any>;
  chats$: AngularFireList<Chat[]>;
  messages: Array<ChatMessage>;

  constructor(private firebase: AngularFireDatabase) {
    this.chats$ = this.firebase.list('/chat');
    const chat = this.chats$.push([]);
    this.messages$ = this.firebase.list(`/chat/${chat.key}/messages`);
  }

  addMessage(chatMessage: ChatMessage) {
    this.messages$.push(chatMessage);
  }

  getMessage(callback: (value: ChatMessage[]) => void) {
    this.messages$.snapshotChanges().subscribe(
      list => {
        this.messages = list.map(item => {
          return {
            key: item.key,
            ...item.payload.val()
          };
        });
        if (callback) {
          callback(this.messages);
        }
      }
    );
  }

}
