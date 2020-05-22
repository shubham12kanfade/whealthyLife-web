import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPracticeModelComponent } from './add-practice-model.component';

describe('AddPracticeModelComponent', () => {
  let component: AddPracticeModelComponent;
  let fixture: ComponentFixture<AddPracticeModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPracticeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPracticeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
