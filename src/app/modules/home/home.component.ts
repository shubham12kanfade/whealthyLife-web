import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormBuilder } from '@angular/forms';
import { MainService } from 'src/app/services/main.service';
import { SpecialityService } from './../../services/speciality.service';


import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import csc from 'country-state-city';

export interface User {
  name: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Specialit: any;
  labs: any;
  countryList: any;
  stateList: any;
  cityList: any;
  india:any=101;
  showmore: boolean=true;

  myControl = new FormControl();
  filteredOptions: Observable<User[]>;
  test: any;

  options: string[] = ["ASD", "sddcbsda", "sjkbcjbc"]


  constructor(public SpecialityService:SpecialityService,
    public MainService:MainService) {
      SpecialityService.getSpecialization().then((resData)=>{
          console.log("HomeComponent -> constructor -> resData", resData)
          this.Specialit=resData.data
        }).catch((error)=>{
          console.log("HomeComponent -> constructor -> error", error)
        })

      MainService.getLabs().then((resData)=>{
        console.log("HomeComponent -> resData+++++++++++++++++", resData)
          this.labs=resData.data
      }).catch((eror)=>{
        console.log("HomeComponent -> eror", eror)
      })

      this.countryList = csc.getAllCountries();
      console.log("HomeComponent -> this.countryList", this.countryList)

      this.stateList = csc.getStatesOfCountry("101");
        console.log("HomeComponent -> getStateList -> stateList", this.stateList)

        SpecialityService.getTestMaster().then(testdata => {
        console.log(": -----------------------------------");
        console.log("HomeComponent -> testdata", testdata);
        console.log(": -----------------------------------");

        this.test = testdata;

        }).catch(err => {
        console.log(": -------------------------");
        console.log("HomeComponent -> err", err);
        console.log(": -------------------------");

        })

   }

   getStateList(event) {


  }
  getCityList(event) {
    this.cityList = csc.getCitiesOfState(event.target.value);
  }
  showmoreFun(){
    this.showmore=!this.showmore
  }
  customOptions: OwlOptions = {
    loop: true,
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
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1040: {
        items: 4
      }
    },
    nav: false
  };


  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    // autoplaySpeed:100,
    margin: 10,
    navSpeed: 100,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  };

  qwe: OwlOptions = {
    loop: true,
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

    // this.filteredOptions = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => typeof value === 'string' ? value : value.name),
    //   map(name => name ? this._filter(name) : this.options.slice())
    // );
  }
  // displayFn(user: User): string {
  //   return user && user.name ? user.name : '';
  // }

  // private _filter(name: string): User[] {
  //   const filterValue = name.toLowerCase();

  //   return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  // }

}
