import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface UserData {
  firstName: string;
  secondName: string;
  displayName: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  standalone: true,  // Add this if you want the component to be standalone
  imports: [CommonModule, FormsModule]  // Include FormsModule here
})
export class UserFormComponent {
  userData: UserData = {
    firstName: '',
    secondName: '',
    displayName: ''
  };

  private displayNameEdited = false;

  get userJson() {
    // Only include displayName in JSON if it was edited directly
    if (this.displayNameEdited) {
      return JSON.stringify(this.userData, null, 2);
    } else {
      // Exclude displayName from JSON if not edited
      const { displayName, ...rest } = this.userData;
      return JSON.stringify({ ...rest }, null, 2);
    }
  }

  updateField(fieldName: keyof UserData, value: string) {
    if (fieldName === 'firstName') {
      this.userData.firstName = value;
      this.displayNameEdited = false;
      this.userData.displayName = value;
    } else if (fieldName === 'displayName') {
      if (this.displayNameEdited) {
        this.userData.displayName = value;
      }
    } else {
      this.userData[fieldName] = value;
    }
  }

  onDisplayNameFocus() {
    this.displayNameEdited = true;
  }
}
