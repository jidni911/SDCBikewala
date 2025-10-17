import { Component } from '@angular/core';
import { UserProfileButtonComponent } from '../user-profile-button/user-profile-button.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  constructor(private parent: UserProfileButtonComponent) { }
  goTo(view: 'signin' | 'signup' | 'profile') {
    this.parent.goTo(view);
  }
  onSubmit() {
    this.parent.goTo('signin')
  }
}
