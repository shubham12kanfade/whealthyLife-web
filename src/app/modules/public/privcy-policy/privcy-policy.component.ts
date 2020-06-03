import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privcy-policy',
  templateUrl: './privcy-policy.component.html',
  styleUrls: ['./privcy-policy.component.scss']
})
export class PrivcyPolicyComponent implements OnInit {
  Aviso:string="Aviso"
  constructor() { }
  private(val){
this.Aviso=val;
console.log("PrivcyPolicyComponent -> Aviso", this.Aviso)
  }
  ngOnInit(): void {
  }

}
