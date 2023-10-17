import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {
  private loggedInUser: SocialUser | null = null;

  constructor(private authService: SocialAuthService) {}

  signIn(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user) => {
        this.loggedInUser = user;
      })
      .catch((error) => {
        console.error('Error occurred during sign in:', error);
      });
  }

  signOut(): void {
    this.authService.signOut()
      .then(() => {
        this.loggedInUser = null;
      })
      .catch((error) => {
        console.error('Error occurred during sign out:', error);
      });
  }

  get isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }
}