import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAutocompleteComponent } from './dynamic-autocomplete.component';

describe('DynamicAutocompleteComponent', () => {
  let component: DynamicAutocompleteComponent;
  let fixture: ComponentFixture<DynamicAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
