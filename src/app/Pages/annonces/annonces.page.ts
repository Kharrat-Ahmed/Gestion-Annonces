// annonces.page.ts

import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../../services/annonce.service'; // Adjust the path based on your actual service location

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {
  annonces: any[] = [];

  constructor(private annonceService: AnnonceService) {}

  ngOnInit() {
    this.loadAnnonces();
  }

  private loadAnnonces() {
    // Assuming AnnonceService has a method to fetch annonces, adjust accordingly
    this.annonceService.getAnnonces().subscribe(
      (data) => {
        this.annonces = data; // Assuming data is an array of annonce objects
      },
      (error) => {
        console.error('Error fetching annonces:', error);
      }
    );
  }
}
