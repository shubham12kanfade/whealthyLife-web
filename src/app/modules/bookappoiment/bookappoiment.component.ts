import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { google } from 'google-maps';

@Component({
  selector: 'app-bookappoiment',
  templateUrl: './bookappoiment.component.html',
  styleUrls: ['./bookappoiment.component.scss']
})
export class BookappoimentComponent implements OnInit {
  @ViewChild('search') public searchElementRef: ElementRef;
  google: google;

  keyword = 'name';
  public countries = [
    {
      id: 1,
      name: 'Dentist',
    },
    {
      id: 2,
      name: 'Gynecologist/obstetrician',
    },
    {
      id: 3,
      name: 'General Physician',
    },
    {
      id: 4,
      name: 'General Dermatologist',
    },
    {
      id: 5,
      name: 'Ear-nose-throat (ent) Specialist',
    },
    {
      id: 6,
      name: 'Homoeopath',
    },
    {
      id: 7,
      name: 'Ayurveda',
    }
  ];

  constructor(public router: Router, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  customOptionsOne: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: false,
    navSpeed: 300,
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
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
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

  slick: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
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
    this.placesLoad();
  }

  placesLoad() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["(cities)"],
        componentRestrictions: {country: 'in'}
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
        });
      });
    });
  }


  selectEvent(item) {
    this.router.navigate(['/doctors']);
  }

  onChangeSearch(search: string) {
  }

  onFocused(e) {
  }
}
