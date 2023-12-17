import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth,

  ) { }

// Fonction de connexion avec l'email et le mot de passe
loginWithEmail(login: any,pass : any): Promise<any> {
  return this.auth.signInWithEmailAndPassword(login,pass);
}
// Fonction de connexion avec l'email et le mot de passe
signout(): Promise<any> {
  return this.auth.signOut();
}

addPost(postData: any): Promise<any> {

  return this.firestore.collection('annonces').add(postData);
}

deletePost(postId: string): Promise<void> {
  return this.firestore.collection('annonces').doc(postId).delete();
}

// Mettre à jour une publication
updatePost(postData: any): Promise<void> {
  console.log(postData.id);
  return this.firestore.collection('annonces').doc(postData.id).update(postData);
}
// Fonction privée pour mapper un changement de document (DocumentChangeAction) à un objet
private mapDocumentChange(action: DocumentChangeAction<any>): any {
  const data = action.payload.doc.data() as any;
  const id = action.payload.doc.id;
  return { id, ...data };
}

// Récupérer une publication par ID
getPostById(postId: string): Observable<any> {
  return this.firestore.collection('annonces').doc(postId).snapshotChanges().pipe(
    map(action => this.formatResult(action.payload))
  );
}

  // Fonction privée pour mapper un instantané de document (DocumentSnapshot) à un objet
  private formatResult(snapshot: DocumentSnapshot<any>): any {
    const data = snapshot.data() as any;
    const id = snapshot.id;
    return { id, ...data };
  }
  getPosts(): Observable<any[]> {
    return this.firestore.collection('posts').snapshotChanges().pipe(
      map(actions => actions.map(action => this.mapDocumentChange(action)))
    );
  }
}
