import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/modals/message';
import { MESSAGES } from 'src/app/mock/mock-messages';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageContentDialogComponent } from '../message-content-dialog/message-content-dialog.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = MESSAGES;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showDetail(message: Message): void {
    this.dialog.open(MessageContentDialogComponent, {
      width: '250px',
      data: {name: message.name, email: message.email, content: message.content, createdAt: message.createdAt}
    });
  }

  delete(message: Message): void {
    console.log('deleted');
  }

}
