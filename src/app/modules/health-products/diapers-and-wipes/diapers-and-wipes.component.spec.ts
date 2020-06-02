import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiapersAndWipesComponent } from './diapers-and-wipes.component';

describe('DiapersAndWipesComponent', () => {
  let component: DiapersAndWipesComponent;
  let fixture: ComponentFixture<DiapersAndWipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiapersAndWipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiapersAndWipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
