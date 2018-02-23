import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA_hVARstkSNIlydErC3txVq3r1zYHsObw',
      authDomain: 'angularfb-a3ba7.firebaseapp.com'
    });
  }
}
