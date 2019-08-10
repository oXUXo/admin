import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ContainerComponent } from './container/container.component';




@NgModule({
  declarations: [StatisticsComponent, ContainerComponent],
  imports: [
    SharedModule
  ]
})
export class DashboardModule { }
