import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyCareComponent } from './family-care.component';

describe('FamilyCareComponent', () => {
  let component: FamilyCareComponent;
  let fixture: ComponentFixture<FamilyCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
