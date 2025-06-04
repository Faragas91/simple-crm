import { Component, Inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule, 
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent implements OnInit {

  name: string = '';
  user = new User();
  allUsers: any[] = [];

  form = new FormGroup({
    users: new FormControl('')
  });

  constructor(
    public dialog: MatDialog,
    private firestore: Firestore,
    private router: Router) 
   {}

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');
    collectionData(usersCollection, { idField: 'id' }).subscribe((users: any[]) => {
      this.allUsers = users;
      console.log('Users from Firestore:', this.allUsers);
    });
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }

  navigateToUser(user: User): void {
    this.router.navigate(['/user', user] );
  }
}
