import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalNotesCatalogComponent } from './clinical-notes-catalog.component';

describe('ClinicalNotesCatalogComponent', () => {
  let component: ClinicalNotesCatalogComponent;
  let fixture: ComponentFixture<ClinicalNotesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalNotesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalNotesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
