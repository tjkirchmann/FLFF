import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {


  constructor(
      public af: AngularFireAuth,
      private router: Router,
  ) {}

signOut () {
  this.af.auth.signOut();
  this.router.navigate(['/home'])
}

  ngOnInit() {
  }

}
