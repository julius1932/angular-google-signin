import { Component } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-signup',
  template: `
    <button (click)="signUpWithGoogle()">Sign up with Google</button>
  `
})
export class SignupComponent {
  constructor(private authService: SocialAuthService) {}

  signUpWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user: SocialUser) => {
        // Handle the successful sign-up with Google
        console.log(user);
      })
      .catch((error: any) => {
        // Handle the error
        console.error(error);
      });
  }
}