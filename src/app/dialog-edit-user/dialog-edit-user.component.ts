import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user: User;
  userId: any;
  birthDate = new Date();
  loading = false;

  constructor(
    public dialog: MatDialog,
    private firestore: Firestore) {
      this.user = new User();
    }

  saveEditedUser() {
    const userId = this.userId;
    const userRef = doc(this.firestore, `users/${userId}`);
    this.loading = true;
    
    updateDoc(userRef, this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialog.closeAll();
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        this.loading = false;
    });
  }
}
