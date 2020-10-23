import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReciptLookupComponent } from './recipt-lookup/recipt-lookup.component';

@NgModule({
  declarations: [ManagerHomeComponent, ManagerComponent, UserManagementComponent, ReciptLookupComponent],
  imports: [CommonModule, ManagerRoutingModule, MaterialModule],
})
export class ManagerModule {}
