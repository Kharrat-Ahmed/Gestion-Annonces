import { Component } from '@angular/core';
import { AnnonceService } from '../../services/annonce.service';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';     // Import FormsModule
import { IonicModule } from '@ionic/angular';
import { AnnonceLocalService } from 'src/app/annonce-local.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mes-annonces',
  templateUrl: './mes-annonces.page.html',
  styleUrls: ['./mes-annonces.page.scss'],
})
export class MesAnnoncesPage {
  mesAnnonces: any[] = [];

  constructor(private annonceService: AnnonceLocalService, private fb :AuthService

    ) {}

  ionViewDidEnter() {
    this.loadMesAnnonces();
  }

  loadMesAnnonces() {
    this.fb.getPosts().subscribe(
      (mesannonces) => {
        this.mesAnnonces = mesannonces;
        console.log('Publications par catégorie "moto":', this.mesAnnonces);

      },
      (error) => {
        console.error('Erreur lors du chargement des annonces:', error);
      }
    );
  }

}
