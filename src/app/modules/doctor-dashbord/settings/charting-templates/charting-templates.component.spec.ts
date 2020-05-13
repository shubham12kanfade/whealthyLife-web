import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartingTemplatesComponent } from './charting-templates.component';

describe('ChartingTemplatesComponent', () => {
  let component: ChartingTemplatesComponent;
  let fixture: ComponentFixture<ChartingTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartingTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartingTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
