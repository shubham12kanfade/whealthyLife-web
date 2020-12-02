import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinCareSupplimentsComponent } from './skin-care-suppliments.component';

describe('SkinCareSupplimentsComponent', () => {
  let component: SkinCareSupplimentsComponent;
  let fixture: ComponentFixture<SkinCareSupplimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinCareSupplimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinCareSupplimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
