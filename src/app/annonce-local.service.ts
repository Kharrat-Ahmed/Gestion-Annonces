// annonce-local.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnonceLocalService {
  private mesAnnonces: any[] = []; // Your local data structure

  constructor() {}

  ajouterAnnonce(annonce: any): Observable<any> {
    // Assuming you're adding the announcement to mesAnnonces
    this.mesAnnonces.push(annonce);

    // You can return some data or an indication of success
    return of({ success: true, message: 'Annonce ajoutée avec succès' });
  }

  getMesAnnonces(): Observable<any[]> {
    // Return the mesAnnonces array as an observable
    return of(this.mesAnnonces);
  }
}
