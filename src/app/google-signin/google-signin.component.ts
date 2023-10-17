import { Component, OnInit } from '@angular/core';
import { GoogleSigninService } from '../google-signin.service';

@Component({
  selector: 'app-google-signin',
  template: `
    <button (click)="signIn()" *ngIf="!isLoggedIn">Sign in with Googlle</button>
    <button (click)="signOut()" *ngIf="isLoggedIn">Sign out</button>
  `
})
export class GoogleSigninComponent implements OnInit {
  isLoggedIn = false;

  constructor(private googleSigninService: GoogleSigninService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.googleSigninService.isLoggedIn;
  }

  signIn(): void {
    this.googleSigninService.signIn();
  }

  signOut(): void {
    this.googleSigninService.signOut();
  }
}