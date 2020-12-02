import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { MainService } from "src/app/services/main.service";
import { MyclinicService } from "src/app/services/myclinic.service";
import { UserService } from "src/app/services/user.service";
import csc from "country-state-city";
@Component({
  selector: "app-add-location",
  templateUrl: "./add-location.component.html",
  styleUrls: ["./add-location.component.scss"],
})
export class AddLocationComponent implements OnInit {
  // Address = new Address();
  dataArray = [];
  AddClinic: FormGroup;
  avatar: any;
  submitted: boolean = false;

  keyword = "name";
  public countries = [];

  DocId: any;
  obj: any;
  clinicId: void;
  countryList: any;
  SelectedCountry: any = [];
  ArrofState: any;

  constructor(
    public mainService: MainService,
    public messageService: MessageService,
    public myclinicService: MyclinicService,
    private fb: FormBuilder,
    public userService: UserService
  ) {
    this.AddClinic = this.fb.group({
      location: this.fb.array([this.createLocation()]),
    });

    const docData = this.userService.getUserInfo();

    this.DocId = docData._id;

    this.getclinic();
    this.countryList = csc.getAllCountries();
    console.log("AddLocationComponent -> this.AddClinic", this.AddClinic);
    this.AddClinic.controls["location"].valueChanges.subscribe((resData) => {
      this.SelectedCountry = [];
      console.log("AddLocationComponent -> resData", resData);
      const data = resData;
      this.SelectedCountry.push(resData);

      this.showCitys();
    });
  }
  showCitys() {
    this.SelectedCountry;
    console.log(
      "AddLocationComponent -> showCitys -> this.SelectedCountry",
      this.SelectedCountry
    );
    this.ArrofState = [];
    this.SelectedCountry[0].forEach((element) => {
      console.log("AddLocationComponent -> showCitys -> element");
      let data = [];
      data = csc.getStatesOfCountry(element.country);
      this.ArrofState.push(data);
    });
    console.log(
      "AddLocationComponent -> showCitys ->   this.ArrofState",
      this.ArrofState
    );
  }
  FnArrofState(i) {
    if (this.ArrofState) {
      console.log(
        "AddLocationComponent -> FnArrofState -> this.ArrofState[i]",
        this.ArrofState[i]
      );
      return this.ArrofState[i];
    } else {
      console.log("Sunit false");
      return null;
    }
  }
  getclinic() {
    this.myclinicService
      .getClinic(this.DocId)
      .then((resData) => {
        this.countries = resData.data;
      })
      .catch((error) => {});
  }

  location(): FormArray {
    return this.AddClinic.get("location") as FormArray;
  }

  createLocation(): FormGroup {
    return this.fb.group({
      address: ["", Validators.required],
      landmark: ["", Validators.required],
      country: ["", Validators.required],
      state: ["", [Validators.required]],
      city: ["", [Validators.required]],
      pincode: ["", [Validators.required]],
    });
  }

  addQuantity() {
    this.location().push(this.createLocation());
  }
  removeQuantity(i: number) {
    this.location().removeAt(i);
  }

  ngOnInit() {}

  onSave() {
    alert(JSON.stringify(this.AddClinic.value));

    if (this.AddClinic.invalid) {
      return;
    }

    const data = {
      ...this.AddClinic.value,
      clinicId: this.obj,
    };

    this.myclinicService
      .postAddClinicLocation(data)
      .then((resData) => {})
      .catch((error) => {});
  }

  selectEvent(item) {
    this.obj = item._id;
  }

  onChangeSearch(event) {
    const obj = event.value;
  }

  onFocused(e) {}
}
