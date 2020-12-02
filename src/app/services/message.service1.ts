import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MessageService {

  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessage :AngularFireMessaging) {

  //  this.functionA();

  this.getDeviceToken();
   }


  //  functionA(){
  //   this.angularFireMessage.messages.subscribe((message) => {
  //     message.onMessage = message.onMessage.bind(message);
  //     message.onTokenRefresh = message.onTokenRefresh.bind(message);
  //   })
  //  }

  getDeviceToken(){
    this.angularFireMessage.requestToken.subscribe(token =>{
    console.log("MessageService -> getDeviceToken -> token", token)
    })
  }

   
   reciveMessage() {
    this.angularFireMessage.messages.subscribe((payload) => {
    console.log("MessageService -> reciveMessage -> payload", payload)
      this.currentMessage.next(payload);
    })
  }

}
