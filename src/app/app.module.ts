import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { BlogsModule } from './blogs/blogs.module';
import { MessagesModule } from './messages/messages.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    UserModule,
    ProductsModule,
    BlogsModule,
    MessagesModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
