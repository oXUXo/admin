import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageContentDialogComponent } from './message-content-dialog/message-content-dialog.component';



@NgModule({
  declarations: [MessageListComponent, MessageContentDialogComponent],
  imports: [
    SharedModule,
    MessagesRoutingModule
  ],
  entryComponents: [MessageContentDialogComponent]
})
export class MessagesModule { }
