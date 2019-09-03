import { Component, OnInit } from '@angular/core';
import { MessagesApiService } from '../../services/messages-api.service'

export interface EachMessage {
  id: string;
  sender: string;
  messages: Array<any>;
  sentDate: any;
  chatID: string;
}

@Component({
  selector: 'app-all-chats',
  templateUrl: './all-chats.component.html',
  styleUrls: ['./all-chats.component.scss']
})


export class AllChatsComponent implements OnInit {
  chats: Array<any>;

  constructor(private messagesApiService: MessagesApiService) {
    this.getChats();
  }

  ngOnInit() {
  }
  getChats() {
    this.messagesApiService.url? 
      this.messagesApiService.getChats()
      .subscribe(chats => {
        this.chats = chats as Array<any>;
        console.log(this.chats);
        this.getMessages();
      })
     : 
     setTimeout(()=> {this.getChats();}, 200)
  }

  getMessages() {
    this.chats.forEach(chat => {                      // go through every available chat
      chat.messages = []
      this.messagesApiService.getMessages(chat.id)    // and get the messages assigned to its ID
        .subscribe(messages =>
          {(messages as Array<EachMessage>).forEach(message => 
            { 
              console.log(chat.messages, message);
              chat.messages.push(message)             // put each of them in this.chats
            })
          })
    });
    console.log(this.chats) 
  }
  
  

}
