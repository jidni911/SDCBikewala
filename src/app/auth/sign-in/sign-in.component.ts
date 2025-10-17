import { Component } from '@angular/core';
import { UserProfileButtonComponent } from '../user-profile-button/user-profile-button.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private parent: UserProfileButtonComponent) { }
  goTo(view: 'signin' | 'signup' | 'profile') {
    this.parent.goTo(view);
  }
  onSubmit() {
    this.parent.goTo('profile')
  }
}
