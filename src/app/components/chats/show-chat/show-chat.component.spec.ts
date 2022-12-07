import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChatComponent } from './show-chat.component';

describe('ShowChatComponent', () => {
  let component: ShowChatComponent;
  let fixture: ComponentFixture<ShowChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
