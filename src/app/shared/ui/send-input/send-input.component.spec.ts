import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendInputComponent } from './send-input.component';

describe('SendInputComponent', () => {
  let component: SendInputComponent;
  let fixture: ComponentFixture<SendInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
