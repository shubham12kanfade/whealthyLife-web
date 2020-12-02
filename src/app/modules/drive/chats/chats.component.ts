import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  Patiets: { id : number ;avtar: string; name: string; massages: number }[];
  dataS: { id: number; avtar: string; name: string;  massages: number };
  headName: string;
  headAvtar: string;
  constructor() { }

  ngOnInit(): void {

    this.Patiets=[
      {
       id:1 , avtar: '../../../../../assets/images/doc2.jpg' ,  name: 'Sunita Deshpande', massages : 2
    },
    {
      id:2 , avtar: '../../../../../assets/images/doc2.jpg' ,  name: 'Sumitra Wahle' , massages : 1
    },
    {
      id:3 , avtar: '../../../../../assets/images/doc.jpg' ,  name: 'Kailash Pande' , massages : 3
    }
  ]
    console.log("ChartsComponent -> ngOnInit -> this.Patiets", this.Patiets)
  }

  sendId(value){
    this.dataS = this.Patiets.filter(x=>x.id == value )[0]
    this.headName=this.dataS.name;
    this.headAvtar=this.dataS.avtar;
  }


}
