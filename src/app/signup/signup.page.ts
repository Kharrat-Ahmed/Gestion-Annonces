import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  userData = {
    email: '',
    password: '',
    username: '',
    // Add other user properties if necessary
  };

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router,
    private toastController: ToastController
  ) {}

  async signup() {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.userData.email,
        this.userData.password
      );

      // Add additional user data to Firestore
      await this.firestore.collection('users').doc(userCredential.user.uid).set({
        email: this.userData.email,
        username: this.userData.username,
        // Add other user properties if necessary
      });

      // Show a success message
      this.presentToast('Account created successfully');

      // Navigate to the home page or another appropriate page
      this.router.navigate(['/home']);
    } catch (error) {
      // Show an error message
      this.presentToast('Error creating account. Please try again.');

      console.error('Error creating account:', error);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success', // Adjust the color as needed
    });
    toast.present();
  }
}
