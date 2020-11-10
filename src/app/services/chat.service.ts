import { ApiCallService } from './api/apicall.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public API: ApiCallService) { }

  getChatHead(data){
    return this.API.postData('chathead/all', data)
  }
}
