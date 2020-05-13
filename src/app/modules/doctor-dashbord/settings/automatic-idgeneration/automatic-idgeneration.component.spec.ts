import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticIDGenerationComponent } from './automatic-idgeneration.component';

describe('AutomaticIDGenerationComponent', () => {
  let component: AutomaticIDGenerationComponent;
  let fixture: ComponentFixture<AutomaticIDGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticIDGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticIDGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
