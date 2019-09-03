import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class MessagesApiService {
  url = null;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) {
    this.getConfig()
      .subscribe(response => this.url = response)
  }


  getConfig() {
    return this.httpClient.get('assets/config.json')
  }

  getChats() {
    return this.httpClient.get(this.url.URLgetChats)
  }

  getMessages(id) {
    return this.httpClient.post(this.url.URLgetMessages, {
      "chatID": id
    }, this.httpOptions)
  }
}
