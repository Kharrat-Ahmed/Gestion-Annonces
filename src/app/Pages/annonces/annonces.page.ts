// annonces.page.ts

import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../../services/annonce.service'; // Adjust the path based on your actual service location
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncesPage implements OnInit {
  annonces: any[] = [];

  constructor(private annonceService: AnnonceService,private fb : AuthService) {}

  ngOnInit() {
    this.loadAnnonces();
  }

  private loadAnnonces() {
    // Assuming AnnonceService has a method to fetch annonces, adjust accordingly
    this.fb.getPosts().subscribe(
      (data) => {
        this.annonces = data; // Assuming data is an array of annonce objects
      },
      (error) => {
        console.error('Error fetching annonces:', error);
      }
    );
  }
}
