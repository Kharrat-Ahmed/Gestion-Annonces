// details-annonce.page.ts

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from '../../services/annonce.service'; // Assurez-vous d'importer correctement votre service d'annonces
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-details-annonce',
  templateUrl: './details-annonce.page.html',
  styleUrls: ['./details-annonce.page.scss'],
})
export class DetailsAnnoncePage {
  annonce: any; // Assurez-vous que le type correspond à la structure de vos annonces

  constructor(
    private route: ActivatedRoute,
    private annonceService: AnnonceService
  ) {}

  ionViewWillEnter() {
    // Récupérez l'ID de l'annonce à partir des paramètres de l'URL
    const annonceId = this.route.snapshot.paramMap.get('id');

    // Utilisez le service d'annonces pour récupérer les détails de l'annonce
    this.annonceService.getDetailsAnnonce(annonceId).subscribe(
      (data) => {
        this.annonce = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de l\'annonce :', error);
      }
    );
  }
}
