import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import contacts from '../../mock/contacts';
import { MdDialogRef } from '@angular/material';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'contact-dialog',
  styleUrls: ['contactDialog.component.scss'],
  templateUrl: 'contactDialog.component.html',
})
export class ContatoDialogComponent {
  constructor(public dialogRef: MdDialogRef<ContatoDialogComponent>) { }
  emailFC = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  nomeFC = new FormControl('', Validators.required);
  telefoneFC = new FormControl('', Validators.required);
  enderecoFC = new FormControl('', Validators.required);

  data: any = {};
  @ViewChild('imageInput') inputFile: ElementRef;

  onNoClick(): void {
    this.dialogRef.close();
  }

  async changeImage(e) {
    let fr = new FileReader();
    new Promise(resolve => fr.onload = resolve)
      .then(() => {
        this.data.picture = fr.result;
      });
    fr.readAsDataURL(e.target.files[0]);
  }
}