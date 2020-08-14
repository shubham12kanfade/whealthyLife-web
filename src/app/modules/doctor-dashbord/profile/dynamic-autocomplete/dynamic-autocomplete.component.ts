import { Component, EventEmitter, forwardRef, HostBinding, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dynamic-autocomplete',
  templateUrl: './dynamic-autocomplete.component.html',
  styleUrls: ['./dynamic-autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicAutocompleteComponent),
      multi: true
    }
  ]
})
export class DynamicAutocompleteComponent implements OnInit {

  myControl = new FormControl();
  selectedValue;
  filteredOptions: Observable<string[]>;
  question = 'Would you like to add ';
  @Input() options: string[];
  @Output() added = new EventEmitter();

  constructor(public mainService: MainService,) {

  }

  // Function to call when the option changes.
  onChange = (option: string) => {
    console.log("DynamicAutocompleteComponent -> onChange -> option", option)

  };

  // Function to call when the input is touched (when the autocomplete is clicked).
  onTouched = () => { };

  get value() {
    return this.selectedValue;
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.mainService.getDegree().then((resData) => {
      console.log("EducationComponent -> resData", resData.data);
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(option => option ? this.filter(option) : resData.data.slice())
        );
    }).catch((error) => {
      console.log("EducationComponent -> error", error);
    })
  }

  optionSelected(option) {
    if (option.value.indexOf(this.question) === 0) {
      let newOption = option.value.substring(this.question.length).split('?')[0];
      this.options.push(newOption);
      this.added.emit(newOption);
      this.myControl.setValue(newOption);
      this.writeValue(newOption);
    } else {
      this.myControl.setValue(option.value);
      this.writeValue(option.value);
    }
  }

  enter() {
    const controlValue = this.myControl.value;
    console.log("DynamicAutocompleteComponent -> enter -> controlValue", controlValue);
    if (!this.options.some((entry: any) => entry.shortName === controlValue)) {
      this.added.emit(controlValue);
      const index = this.options.push(controlValue);
      setTimeout(
        () => {
          this.myControl.setValue(controlValue);
          this.writeValue(controlValue);
        }
      );
    } else {
      // this.writeValue(controlValue);
      this.getList();
    }
  }

  // Allows Angular to update the model (option).
  // Update the model and changes needed for the view here.
  writeValue(option: string): void {
    this.selectedValue = option;
    this.onChange(option);
  }

  // Allows Angular to register a function to call when the model (rating) changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (option: string) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private filter(value: string): string[] {
    let results;
    if (value) {
      results = this.options
        .filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0);
      if (results.length < 1) {
        results = [this.question + value + '?'];
      }
    } else {
      results = this.options.slice();
    }
    return results;
  }
}
