import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  user = new User();

  constructor(private firestore: Firestore) {} 
  
}
