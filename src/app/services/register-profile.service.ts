import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface User {
  id?: string;
  email: string;
  age: string;
  username: string;
  
  weekendPoints: number;
  seasonPoints: number;
  allPoints: number;

  favDriver: string;
  favTeam: string;
}

@Injectable({
  providedIn: 'root'
})

export class registerProfileService {
  private users: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection<User>('users');
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

getUsers(): Observable<User[]> {
  return this.users;
}

getUser(id: string): Observable<User> {
  return this.usersCollection.doc<User>(id).valueChanges().pipe(
    take(1),
    map(users => {
      users.id = id;
      return idea
    })
  );
}

addUser(users: User): Promise<DocumentReference> {
  return this.usersCollection.add(users);
}



}
