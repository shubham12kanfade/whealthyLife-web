import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-now',
  templateUrl: './chat-now.component.html',
  styleUrls: ['./chat-now.component.scss']
})
export class ChatNowComponent implements OnInit {
  isExitModalVisible: any=false;
  toggleExitModal:any=false;

  constructor() { }

  ngOnInit(): void {
  }
  exitVisible(){
    this.isExitModalVisible=true;
  }
  toggleExitModal1(){
   this.isExitModalVisible=true;
  }
}
