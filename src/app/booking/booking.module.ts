import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { AllBookingComponent } from './all-booking/all-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingFormComponent } from './booking-form/booking-form.component';


@NgModule({
  declarations: [
    AllBookingComponent,
    BookingFormComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BookingModule { }
