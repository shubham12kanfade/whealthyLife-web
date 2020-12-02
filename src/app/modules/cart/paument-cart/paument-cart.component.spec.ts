import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaumentCartComponent } from './paument-cart.component';

describe('PaumentCartComponent', () => {
  let component: PaumentCartComponent;
  let fixture: ComponentFixture<PaumentCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaumentCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaumentCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
