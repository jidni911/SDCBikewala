import { Component, OnInit } from '@angular/core';
import { Booking } from 'models/Booking';
import * as AOS from 'aos';

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.scss']
})
export class AllBookingComponent implements OnInit {
  bookings: Booking[] = [];
  searchText: string = '';
  page: number = 1;
  pageSize: number = 4;
  totalPages: number = 1;
  selectedBooking: Booking | null = null;
  Math = Math;

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
    this.bookings = [
      { id: 1, name: 'John Doe', email: 'jdoe@sdcbikewala.com', phone: '1234567890', address: '123 Main St', date: '2023-08-15', time: '10:00 AM', issue: 'Broken Frame', eta: '3 hours', status: 'Pending' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@sdcbikewala.com', phone: '9876543210', address: '456 Elm St', date: '2023-08-16', time: '12:00 PM', issue: 'Flat Tire', eta: '2 hours', status: 'Completed' },
      { id: 3, name: 'Bob Johnson', email: 'bobjohnson@sdcbikewala.com', phone: '5555555555', address: '789 Oak St', date: '2023-08-17', time: '2:00 PM', issue: 'Broken Chain', eta: '4 hours', status: 'Pending' },
      { id: 4, name: 'Alice Brown', email: 'alicebrown@sdcbikewala.com', phone: '1111111111', address: '321 Pine St', date: '2023-08-18', time: '5:00 PM', issue: 'Flat Tire', eta: '1 hour', status: 'Completed' },
      { id: 5, name: 'Charlie Davis', email: 'charliedavis@sdcbikewala.com', phone: '2222222222', address: '654 Cedar St', date: '2023-08-19', time: '8:00 AM', issue: 'Broken Frame', eta: '3 hours', status: 'Pending' },
      { id: 6, name: 'Eva Wilson', email: 'evawilson@sdcbikewala.com', phone: '3333333333', address: '987 Maple St', date: '2023-08-20', time: '11:00 AM', issue: 'Flat Tire', eta: '2 hours', status: 'Completed' },
      { id: 7, name: 'Frank Wilson', email: 'frankwilson@sdcbikewala.com', phone: '4444444444', address: '543 Oak St', date: '2023-08-21', time: '1:00 PM', issue: 'Broken Chain', eta: '4 hours', status: 'Pending' }
    ];

    this.totalPages = Math.ceil(this.bookings.length / this.pageSize);
  }

  get filteredBookings() {
    const lower = this.searchText.toLowerCase();
    return this.bookings.filter(
      b =>
        b.name.toLowerCase().includes(lower) ||
        b.issue.toLowerCase().includes(lower) ||
        b.status.toLowerCase().includes(lower)
    );
  }

  openBooking(booking: Booking) {
    this.selectedBooking = booking;
  }

  setPage(p: number) {
    this.page = p;
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }

  previousPage() {
    if (this.page > 1) this.page--;
  }
}
