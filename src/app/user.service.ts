// user.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersMap: Map<string, User> = new Map([
    ['ahmed', { username: 'ahmed', password: '123' }],
    ['x', { username: 'x', password: '1234' }],
    ['alex', { username: 'alex', password: '12345' }],
    // Add more users as needed
  ]);

  private currentUser: User | null = null;

  constructor() {}

  authenticate(username: string, password: string): Observable<boolean> {
    const user = this.usersMap.get(username);

    if (user && user.password === password) {
      this.currentUser = user;
      return of(true);
    } else {
      return of(false);
    }
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
  }
}
