import { Component } from '@angular/core';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-auth',
  template: `
    <button (click)="signInWithFacebook()">Sign in with Facebook</button>
  `
})
export class AuthComponent {
  constructor(private authService: SocialAuthService) {}

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((user: SocialUser) => {
        // Handle the successful sign-in with Facebook
        console.log(user);
      })
      .catch((error: any) => {
        // Handle the error
        console.error(error);
      });
  }
}