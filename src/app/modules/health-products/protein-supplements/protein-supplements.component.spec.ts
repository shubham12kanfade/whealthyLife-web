import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinSupplementsComponent } from './protein-supplements.component';

describe('ProteinSupplementsComponent', () => {
  let component: ProteinSupplementsComponent;
  let fixture: ComponentFixture<ProteinSupplementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProteinSupplementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProteinSupplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
