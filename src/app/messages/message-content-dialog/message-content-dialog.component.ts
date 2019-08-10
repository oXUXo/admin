import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Message } from 'src/app/modals/message';

@Component({
  selector: 'app-message-content-dialog',
  templateUrl: './message-content-dialog.component.html',
  styleUrls: ['./message-content-dialog.component.scss']
})
export class MessageContentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MessageContentDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Message) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
