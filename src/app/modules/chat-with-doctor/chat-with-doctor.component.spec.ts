import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWithDoctorComponent } from './chat-with-doctor.component';

describe('ChatWithDoctorComponent', () => {
  let component: ChatWithDoctorComponent;
  let fixture: ComponentFixture<ChatWithDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWithDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWithDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
