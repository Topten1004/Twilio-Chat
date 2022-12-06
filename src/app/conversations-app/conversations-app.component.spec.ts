import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationsAppComponent } from './conversations-app.component';

describe('ConversationsAppComponent', () => {
  let component: ConversationsAppComponent;
  let fixture: ComponentFixture<ConversationsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversationsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
