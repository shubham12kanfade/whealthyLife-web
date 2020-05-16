import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent implements OnInit {

  activeTab = 'first';

  constructor() { }

  ngOnInit(): void {
  }


  first(activeTab){
    this.activeTab = activeTab;
  }

  secondon(activeTab){
    this.activeTab = activeTab;
  }


  wealthylife(activeTab)
 {
  this.activeTab = activeTab;
 }
}
