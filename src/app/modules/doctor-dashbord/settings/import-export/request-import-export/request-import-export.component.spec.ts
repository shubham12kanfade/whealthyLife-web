import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestImportExportComponent } from './request-import-export.component';

describe('RequestImportExportComponent', () => {
  let component: RequestImportExportComponent;
  let fixture: ComponentFixture<RequestImportExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestImportExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestImportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
