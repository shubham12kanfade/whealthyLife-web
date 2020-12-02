import { ChatService } from './../../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  Patiets: { id : number ;avtar: string; name: string; massages: number }[];
  dataS: { id: number; avtar: string; name: string;  massages: number };
  headName: string;
  headAvtar: string;
  DoctId: any;
  DOCFirst: any;
  DOCLast: any;

  constructor(private chat : ChatService,public userService : UserService) {

    this.DoctId = this.userService.getUserInfo();

    this.DOCFirst = this.DoctId.firstName
    console.log(": --------------------------------------------------------------");
    console.log("ChartsComponent -> constructor -> this.DOCFirst", this.DOCFirst);
    console.log(": --------------------------------------------------------------");
    this.DOCLast = this.DoctId.lastName
    console.log(": ------------------------------------------------------------");
    console.log("ChartsComponent -> constructor -> this.DOCLast", this.DOCLast);
    console.log(": ------------------------------------------------------------");


    this.chat.getChatHead(this.DoctId._id).then(resData => {
    console.log(": --------------------------------------------------");
    console.log("ChartsComponent -> constructor -> resData", resData);
    console.log(": --------------------------------------------------");

    }).catch(error => {
    console.log(": ----------------------------------------------");
    console.log("ChartsComponent -> constructor -> error", error);
    console.log(": ----------------------------------------------");

    })


  }

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
