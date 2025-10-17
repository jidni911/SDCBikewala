import { Component, OnInit } from '@angular/core';

interface Booking {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  date: string;
  time: string;
  issue: string;
  status: string;
}

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  bookings: Booking[] = [];
  filteredBookings: Booking[] = [];
  pagedBookings: Booking[] = [];

  searchTerm = '';
  editIndex: number | null = null;

  currentPage = 1;
  pageSize = 5;
  totalPages = 1;

  newBooking: Booking = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    issue: '',
    status: 'Pending'
  };

  ngOnInit(): void {
    this.bookings = [
      { id: 1, name: 'John Doe', email: 'jdoe@sdcbikewala.com', phone: '1234567890', address: '123 Main St', date: '2025-10-15', time: '10:00 AM', issue: 'Flat Tire', status: 'Pending' },
      { id: 2, name: 'Jane Smith', email: 'janesmith@sdcbikewala.com', phone: '9876543210', address: '456 Elm St', date: '2025-10-16', time: '2:00 PM', issue: 'Brake Issue', status: 'Completed' },
      { id: 3, name: 'Michael Lee', email: 'mlee@sdcbikewala.com', phone: '1112223333', address: '789 Pine St', date: '2025-10-17', time: '11:00 AM', issue: 'Gear Adjustment', status: 'Pending' },
      { id: 4, name: 'Sara Connor', email: 'sara@sdcbikewala.com', phone: '2223334444', address: '147 Hill St', date: '2025-10-18', time: '03:00 PM', issue: 'Broken Pedal', status: 'Completed' },
      { id: 5, name: 'Chris Evans', email: 'cevans@sdcbikewala.com', phone: '3334445555', address: '258 Green Rd', date: '2025-10-19', time: '09:30 AM', issue: 'Chain Problem', status: 'Pending' },
      { id: 6, name: 'Robert Brown', email: 'robert@sdcbikewala.com', phone: '4445556666', address: '369 Blue St', date: '2025-10-20', time: '04:00 PM', issue: 'Brake Pad', status: 'Completed' },
    ];

    this.filterBookings();
  }

  addBooking() {
    if (this.editIndex !== null) {
      this.bookings[this.editIndex] = { ...this.newBooking };
      this.editIndex = null;
    } else {
      this.newBooking.id = Date.now();
      this.bookings.push({ ...this.newBooking });
    }
    this.newBooking = { id: 0, name: '', email: '', phone: '', address: '', date: '', time: '', issue: '', status: 'Pending' };
    this.filterBookings();
  }

  editBooking(index: number) {
    const globalIndex = (this.currentPage - 1) * this.pageSize + index;
    this.newBooking = { ...this.filteredBookings[globalIndex] };
    this.editIndex = this.bookings.findIndex(b => b.id === this.newBooking.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteBooking(index: number) {
    const globalIndex = (this.currentPage - 1) * this.pageSize + index;
    this.bookings.splice(this.bookings.findIndex(b => b.id === this.filteredBookings[globalIndex].id), 1);
    this.filterBookings();
  }

  filterBookings() {
    const term = this.searchTerm.toLowerCase();
    this.filteredBookings = this.bookings.filter(b =>
      b.name.toLowerCase().includes(term) ||
      b.email.toLowerCase().includes(term) ||
      b.issue.toLowerCase().includes(term) ||
      b.status.toLowerCase().includes(term)
    );
    this.totalPages = Math.ceil(this.filteredBookings.length / this.pageSize);
    this.currentPage = 1;
    this.updatePagedBookings();
  }

  updatePagedBookings() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedBookings = this.filteredBookings.slice(start, end);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedBookings();
  }
}
