import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { BookingFormComponent } from './booking-form/booking-form.component';

const routes: Routes = [
  {
    path: '',
    component: AllBookingComponent
  },
  {
    path: 'manage-booking',
    component: BookingFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
