import { Component } from '@angular/core';
import { GoogleSigninService } from './google-signin.service';
import { FacebookSigninService } from './facebook-signin.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="signIn()" *ngIf="!isLoggedIn">Sign in with Googlle</button>
    <button (click)="signOut()" *ngIf="isLoggedIn">Sign out</button>
    <button (click)="signInWithFacebook()" >Sign in with Facebook</button>
  `
})
export class AppComponent {
  isLoggedIn = false;

  constructor(private googleSigninService: GoogleSigninService,private facebookSigninService: FacebookSigninService) {}
  
  signInWithFacebook(): void {
    this.facebookSigninService.signIn();
  }
  signIn(): void {
    this.googleSigninService.signIn();
  }

  signOut(): void {
    this.googleSigninService.signOut();
  }

  ngOnInit(): void {
    this.isLoggedIn = this.googleSigninService.isLoggedIn;
  }
}