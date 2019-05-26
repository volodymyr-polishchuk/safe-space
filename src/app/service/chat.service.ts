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
  }

  getChat(existKey: string = null) {
    let key;
    if (existKey) {
      key = existKey;
    } else {
      this.chats$ = this.firebase.list('/chat');
      const chat = this.chats$.push([]);
      key = chat.key;
    }
    console.log(key);
    this.messages$ = this.firebase.list(`/chat/${key}/messages`);
  }

  addMessage(chatMessage: ChatMessage) {
    this.messages$.push(chatMessage);
  }

  getAllChat() {
    const p = new Promise((resolve, reject) => {
      const chats = [];
      this.firebase.database.ref('/chat/').once('value', a => {
        a.forEach(a1 => {
          chats.push(a1);
        });
      });
      resolve(chats);
    });
    return p;
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
