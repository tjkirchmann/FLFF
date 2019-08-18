import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Params } from '@angular/router';
import { User } from 'src/app/services/register-profile.service';
import { registerProfileService } from 'src/app/services/register-profile.service';
import { LoadingController, AlertController } from '@ionic/angular';

export interface User {
    email: string;
    password: string;
    age: number;
    username: string;
    weekendPoints: number = 0;
    seasonPoints: number = 0;
    allPoints: number = 0;
    favDriver: string = '';
    favTeam: string = '';
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    user: User = {
        email: '',
        age: '',
        username: '',
    }

    wantRegister: boolean = false
    errorTrigger: boolean = false
    errorMessage: string = '';
    successMessage: string = '';

    constructor(
        public afAuth: AngularFireAuth,
        private router: Router,
        public loadingCtrl: LoadingController,
    ) { }

    async registerField() {
        this.wantRegister = true;
    }

    async backToLogin() {
        this.wantRegister = false;
    }

  async createAccount() {
        const user = await this.afAuth.auth.createUserWithEmailAndPassword(
            this.user.email,
            this.user.password,
      )
            .then(res => {
                console.log(res);
                this.errorMessage = "";
                this.successMessage = "Your account has been created, please login";
                this.wantRegister = false;
                this.errorTrigger = false;
                this.registerProfileService.addUser(this.User);
            }, err => {
                    console.log(err);
                    this.errorMessage = err.message;
                    this.successMessage = "";
                    this.errorTrigger = true;
            })

    }

    login() {
        this.afAuth.auth.signInWithEmailAndPassword(
            this.user.email,
            this.user.password,
        )
            .then(res => {
                this.router.navigate(['/tabs']);
                this.errorTrigger = false;
            }, err => {
                    console.log(err);
                    this.errorMessage = err.message
                    this.errorTrigger = true;
            }
            )
    }

    ngOnInit() {
      this.registerProfileService.getUsers()
      .subscribe(users => this.users = users)
    }
}
