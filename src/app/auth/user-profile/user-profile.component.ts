import { Component } from '@angular/core';
import { UserProfileButtonComponent } from '../user-profile-button/user-profile-button.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  constructor(private parent: UserProfileButtonComponent) { }
  goTo(view: 'signin' | 'signup' | 'profile') {
    this.parent.goTo(view);
  }
  user = {
    name: 'John Doe',
    username: 'johndoe',
    avatar: 'assets/images/default-avatar.png',
    bookings: 12,
    reviews: 5,
    wishlist: 3
  };

  logout() {
    console.log('Logging out...');
  }

  editProfile() {
    console.log('Edit profile clicked');
  }
}
