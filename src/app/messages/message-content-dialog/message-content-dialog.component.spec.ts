import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageContentDialogComponent } from './message-content-dialog.component';

describe('MessageContentDialogComponent', () => {
  let component: MessageContentDialogComponent;
  let fixture: ComponentFixture<MessageContentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageContentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
