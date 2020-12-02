import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAndBathComponent } from './body-and-bath.component';

describe('BodyAndBathComponent', () => {
  let component: BodyAndBathComponent;
  let fixture: ComponentFixture<BodyAndBathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyAndBathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAndBathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
