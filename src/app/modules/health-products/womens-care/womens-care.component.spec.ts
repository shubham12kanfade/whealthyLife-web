import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensCareComponent } from './womens-care.component';

describe('WomensCareComponent', () => {
  let component: WomensCareComponent;
  let fixture: ComponentFixture<WomensCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomensCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomensCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
