import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContainerComponent } from './container/container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';




@NgModule({
  declarations: [StatisticsComponent, ContainerComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
