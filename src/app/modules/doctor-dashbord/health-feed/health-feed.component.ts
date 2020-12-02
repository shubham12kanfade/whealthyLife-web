import { StartFreeComponent } from './start-free/start-free.component';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-health-feed',
  templateUrl: './health-feed.component.html',
  styleUrls: ['./health-feed.component.scss']
})
export class HealthFeedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  customOptions: OwlOptions = {
    loop:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 300,
    navText: ["", ""],

    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      },
      1040: {
        items: 1
      }
    },
    nav: false
  };
  ngOnInit(): void {
  }




  startfreemodalopen() {
    const dialogRef = this.dialog.open(StartFreeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }

}
