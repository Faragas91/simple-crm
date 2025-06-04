import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Firestore, doc, docData} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  user:any = {};

  constructor(
    private firestore: Firestore, 
    private route: ActivatedRoute
  ) {} 
  
  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    console.log('User ID from route:', userId);
    if (userId) {
      this.getUser(userId); // <-- userId wird korrekt übergeben
    }
  }

  getUser(userId?: string): void {
      const userDocRef = doc(this.firestore, `users/${userId}`);
      docData(userDocRef, { idField: 'id' })
      .subscribe((userData) => {
        this.user = userData;
        console.log('User data:', this.user);
      }, error => {
        console.error('Error fetching user data:', error);
      });
    };

  openAddressDialog(): void {
    // Implementieren Sie hier die Logik zum Öffnen des Adressdialogs
    console.log('Open address dialog for user:', this.user);
  }
}
