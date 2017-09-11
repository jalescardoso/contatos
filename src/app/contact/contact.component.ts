import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ContatoDialogComponent } from '../dialog-contact/contactDialog.component';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  localStorage = localStorage;
  constructor(public dialog: MdDialog, private router: Router, public contactService: ContactService) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(ContatoDialogComponent);
  }

  sair() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
