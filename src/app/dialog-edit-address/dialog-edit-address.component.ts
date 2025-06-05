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
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
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
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  user: User;
  userId: any;
  loading = false;

  constructor(
    public dialog: MatDialog,
    private firestore: Firestore) {
      this.user = new User();
  }

  saveEditedAddress() {
    const userId = this.userId;
    const userRef = doc(this.firestore, `users/${userId}`);
    this.loading = true;

    updateDoc(userRef, this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialog.closeAll();
      })
      .catch((error) => {
        console.error('Error updating address:', error);
        this.loading = false;
      });
  }

}
