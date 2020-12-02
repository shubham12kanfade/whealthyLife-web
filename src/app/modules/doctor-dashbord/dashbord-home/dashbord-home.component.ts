import { UserService } from './../../../services/user.service';
import { DashboardAnalyticsService } from './../../../services/dashboard-analytics.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashbord-home',
  templateUrl: './dashbord-home.component.html',
  styleUrls: ['./dashbord-home.component.scss']
})
export class DashbordHomeComponent implements OnInit {


  constructor(public DAS:DashboardAnalyticsService, public UserService:UserService) {

    const id= this.UserService.getUserInfo()

    this.DAS.getdashboard(id._id).then(restData => {


    this.dashData=restData.data;
    console.log("DashbordHomeComponent -> constructor -> this.dashData", this.dashData)

    }).catch(error => {
    console.log("DashbordHomeComponent -> constructor -> error", error)

    })
  }

  ngOnInit(): void {


  }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  dashData: any;






}
