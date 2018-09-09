import {Component, ElementRef, OnInit} from '@angular/core';
declare const gapi: any;

@Component({
  selector: 'app-g-signin',
  template: `
    <div *ngIf="!isSignInSuccessful" id="signInBtn" class="g-signin2"></div>
  `
})
export class GoogleSignInComponent implements OnInit {

  private clientId = '143513081999-fg4liad58qlqle84kd1ogs6o3nuieuh6.apps.googleusercontent.com';
  public isSignInSuccessful = false;

  public signedInUser = {
    imageUrl: ''
  };

  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');

  public auth2: any;
  public googleInit() {
    const that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: 'single_host_origin',
        scope: that.scope
      });
      that.attachSignin(document.getElementById("signInBtn"));
    });
  }
  public attachSignin(element) {

    console.log('Element:', element);
    const that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {

        const profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        that.signedInUser.imageUrl = profile.getImageUrl();
        console.log('Image URL: ' + that.signedInUser.imageUrl);
        console.log('Email: ' + profile.getEmail());
        that.isSignInSuccessful = true;
        element.hidden = true;
      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
        that.isSignInSuccessful = false;
        element.hidden = false;
      });
  }

  constructor(private element: ElementRef) {
    console.log('ElementRef: ', this.element);
  }

  ngOnInit() {
    this.googleInit();
  }

}
