import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Params } from '@angular/router';
import { FirestoreService } from '../services/data/firestore.service';
import { LoadingController, AlertController } from '@ionic/angular';

interface User {
    email?: string;
    password?: string;
    name?: string;
    age?: number;
    username?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    user: User = {
        email: '',
        password: '',
        name: '',
        age: 0,
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
        public firestoreService: FirestoreService,
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

                const email = this.user.email;
                const fullName = this.user.name;
                const age = this.user.age;
                const username = this.user.username;

                this.firestoreService
                    .createProfile(email, fullName, age, username)
                    .then(
                        () => {

                        },
                        error => {
                            console.error(error);
                        }
                    )
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
}
