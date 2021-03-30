import { BookingPageService } from "./../../services/booking-page.service";
import {
  Component,
  OnInit,
  NgZone,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";
import { Router } from "@angular/router";
import { MapsAPILoader } from "@agm/core";
import { google } from "google-maps";
import { SpecialityService } from "src/app/services/speciality.service";

@Component({
  selector: "app-bookappoiment",
  templateUrl: "./bookappoiment.component.html",
  styleUrls: ["./bookappoiment.component.scss"],
})
export class BookappoimentComponent implements OnInit {
  @ViewChild("search") public searchElementRef: ElementRef;
  google: google;

  keyword = "name";
  countries: any = [];
  appointmentC: any;
  ChatC: any;
  MedicineC: any;
  HealthcareProvidersC: any;
  topFour: any[];
  Countdata: any;

  constructor(
    public router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public speciality: SpecialityService,
    public BookingPageService: BookingPageService
  ) {
    this.speciality
      .getCount()
      .then((resData) => {
        this.Countdata = resData.data;
        console.log("BookappoimentComponent -> Countdata", this.Countdata);
      })
      .catch((err) => {
        console.log("BookappoimentComponent -> err", err);
      });

    this.speciality
      .getTopSpec()
      .then((resData) => {
        this.topFour = resData.data;
      })
      .catch((err) => {
        console.log("BookappoimentComponent -> err", err);
      });

    this.speciality
      .getSpecializationAll()
      .then((resData: any) => {
        this.countries = [];
        const data = resData.data;
        data.forEach((element) => {
          element.fullName;

          const data1 = {
            name: element.fullName,
            value: element._id,
          };
          this.countries.push(data1);
        });

        //  resData.data
      })
      .catch((error) => {
        console.log("BookappoimentComponent -> error", error);
      });

    this.appointmentCarousel();
    this.chatCarousel();
    this.medicinesCarousel();
    this.HealthcareProvidersCarousel();
  }
  HealthcareProvidersCarousel() {
    this.BookingPageService.getCarousel("HCProviders")
      .then((resData) => {
        this.HealthcareProvidersC = resData.data;
      })
      .catch((err) => {
        console.log(
          "BookappoimentComponent -> appointmentCarousel -> err",
          err
        );
      });
  }
  medicinesCarousel() {
    this.BookingPageService.getCarousel("Medicine")
      .then((resData) => {
        this.MedicineC = resData.data;
      })
      .catch((err) => {
        console.log(
          "BookappoimentComponent -> appointmentCarousel -> err",
          err
        );
      });
  }
  appointmentCarousel() {
    this.BookingPageService.getCarousel("Appoinment")
      .then((resData) => {
        this.appointmentC = resData.data;
      })
      .catch((err) => {
        console.log(
          "BookappoimentComponent -> appointmentCarousel -> err",
          err
        );
      });
  }
  chatCarousel() {
    this.BookingPageService.getCarousel("Chat")
      .then((resData) => {
        this.ChatC = resData.data;
      })
      .catch((err) => {
        console.log(
          "BookappoimentComponent -> appointmentCarousel -> err",
          err
        );
        // this.router.navigate(['/doctors']);
      });
  }
  getTopSpec;

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
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      }, // this.router.navigate(['/doctors']);
      940: {
        items: 1,
      },
      1040: {
        items: 1,
      },
    },
    nav: false,
  };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,

    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
      1040: {
        items: 4,
      },
    },
    nav: false,
  };

  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 100,
    margin: 10,
    navSpeed: 100,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
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
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
      1040: {
        items: 1,
      },
    },

    nav: false,
  };
  customOptionss: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    navSpeed: 3000,
    autoplaySpeed: 3000,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
  ngOnInit(): void {}

  selectEvent(item) {
    // this.router.navigate(['/doctors']);
  }

  onChangeSearch(search: string) {}

  onFocused(e) {}
}
