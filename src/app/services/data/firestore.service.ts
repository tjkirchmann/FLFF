import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

    constructor(
        public firestore: AngularFirestore,
    ) { }

    createProfile(
        email: string,
        fullName: string,
        age: number,
        username: string,

    ): Promise<void> {
        const profileId = this.firestore.createId();

        return this.firestore.doc('users/${id}').set({
            profileId,
            email,
            fullName,
            age,
            username,
        });
    }

}
