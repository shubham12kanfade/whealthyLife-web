import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ISOComponent } from './iso.component';

describe('ISOComponent', () => {
  let component: ISOComponent;
  let fixture: ComponentFixture<ISOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ISOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ISOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
