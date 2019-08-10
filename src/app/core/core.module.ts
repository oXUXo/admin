import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [
    SharedModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
