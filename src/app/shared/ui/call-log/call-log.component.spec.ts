import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogComponent } from './call-log.component';

describe('CallLogComponent', () => {
  let component: CallLogComponent;
  let fixture: ComponentFixture<CallLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
