import { Component } from '@angular/core';
import { AnnonceService } from '../../services/annonce.service';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { FormsModule } from '@angular/forms';     // Import FormsModule
import { IonicModule } from '@ionic/angular';
import { AnnonceLocalService } from 'src/app/annonce-local.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mes-annonces',
  templateUrl: './mes-annonces.page.html',
  styleUrls: ['./mes-annonces.page.scss'],
})
export class MesAnnoncesPage {
  mesAnnonces: any[] = [];
  current:any
  constructor(private router:Router,private annonceService: AnnonceLocalService,private auth: AngularFireAuth, private fb :AuthService

    ) {

          // Si un utilisateur est connecté, mettre à jour les données utilisateur et les stocker localement
          this.current = JSON.parse(localStorage.getItem('user'))

    }

  ionViewDidEnter() {
    if(this.current){
      this.loadMesAnnonces();

    }
  }

  loadMesAnnonces() {
    console.log("--------",this.current.uid);
    this.fb.getPostsByUser(this.current.uid).subscribe(
      (result) => {
        console.log(result);
        this.mesAnnonces = result;

      },
      (error) => {
        console.error('Erreur lors du chargement des annonces:', error);
      }
    );
  }

}
