import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-user-profile-button',
  templateUrl: './user-profile-button.component.html',
  styleUrls: ['./user-profile-button.component.scss']
})
export class UserProfileButtonComponent {
  isOpen = false;
  // position: 'right' | 'center' = 'right';

  constructor() {
    // this.updatePosition();
  }

  toggleProfile() {
    this.isOpen = !this.isOpen;
  }

  currentSlide = 1; // 0 = profile, 1 = login, 2 = signup

  updateSlide() {
    const slider = document.querySelector('.slider') as HTMLElement;
    slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }

  goTo(view: 'signin' | 'signup' | 'profile') {
    if (view === 'signup') {
      this.currentSlide = 2;
    } else if (view === 'signin') {
      this.currentSlide = 1;
    } else {
      this.currentSlide = 0;
    }
    this.updateSlide();
  }

}
