import { Component } from '@angular/core';
import { ContactService } from './contact.service.service';
import { MdPaginator, MdSort, MdDialog } from '@angular/material';
import { ContatoDialogComponent } from './dialog-contact/contactDialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MdDialog, public contactService: ContactService) { }
  
  openDialog() {
    this.dialog.open(ContatoDialogComponent);
  }

}
