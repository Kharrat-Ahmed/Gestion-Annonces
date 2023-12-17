// annonce.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnonceService {
  private apiUrl = 'https://your-api-url'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Example: Get all annonces
  getAnnonces(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/annonces`);
  }

  // Example: Add a new annonce
  ajouterAnnonce(annonce: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/annonces`, annonce);
  }

  // Example: Get annonces for a specific user (replace 'userId' with actual user ID)
  getMesAnnonces(): Observable<any[]> {
    const userId = 'replace-with-user-id';
    return this.http.get<any[]>(`${this.apiUrl}/annonces/user/${userId}`);
  }

  // Example: Get details of a specific annonce
  getDetailsAnnonce(annonceId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/annonces/${annonceId}`);
  }

  // Add more methods as needed based on your backend API
}
