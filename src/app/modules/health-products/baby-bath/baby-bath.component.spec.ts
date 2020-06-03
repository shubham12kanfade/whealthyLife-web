import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyBathComponent } from './baby-bath.component';

describe('BabyBathComponent', () => {
  let component: BabyBathComponent;
  let fixture: ComponentFixture<BabyBathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabyBathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyBathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
