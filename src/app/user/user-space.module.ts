import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserSpaceRoutingModule} from './user-space-routing.module';
import {UserSpaceComponent} from './pages/user-space/user-space.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PersonalInfoComponent} from './components/personal-info/personal-info.component';
import {RealEstateModule} from '../real-estate/real-estate.module';
import {ReservationsHistoryComponent} from './components/reservations-history/reservations-history.component';
import {CurrentReservationComponent} from './components/current-reservation/current-reservation.component';
import { UserRealEstatesListComponent } from './components/user-real-estates-list/user-real-estates-list.component';
import { UserRealEstateComponent } from './components/user-real-estate/user-real-estate.component';
import { RealEstateComponent } from './pages/real-estate/real-estate.component';
import { UserComponent } from './pages/user/user.component';
import {SharedModule} from '../shared/shared.module';
import { AccountComponent } from './pages/account/account.component';
import { NewRealEstateComponent } from './pages/new-real-estate/new-real-estate.component';
//import { UserFormComponent } from './components/user-form/user-form.component';


@NgModule({
  declarations: [
    UserSpaceComponent,
    PersonalInfoComponent,
    ReservationsHistoryComponent,
    CurrentReservationComponent,
    UserRealEstatesListComponent,
    UserRealEstateComponent,
    RealEstateComponent,
    UserComponent,
    AccountComponent,
    NewRealEstateComponent,
    //UserFormComponent,
  ],
  imports: [
    CommonModule,
    UserSpaceRoutingModule,
    ReactiveFormsModule,
    RealEstateModule,
    SharedModule
  ]
})
export class UserSpaceModule {
}
