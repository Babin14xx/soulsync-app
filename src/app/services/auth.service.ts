import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    // Auth state as Observable
    this.user$ = new Observable(subscriber => {
      return onAuthStateChanged(this.auth, user => subscriber.next(user));
    });
  }

  // ✅ Register new user
  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // ✅ Login existing user
  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // ✅ Logout
  signOut() {
    return signOut(this.auth);
  }

  // ✅ Get current user as Observable
  getCurrentUser() {
    return this.user$;
  }
}
