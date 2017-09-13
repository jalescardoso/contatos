import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import contacts from '../../mock/contacts';
import { MdDialogRef } from '@angular/material';
import { ContactService } from '../contact.service.service';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'contact-dialog',
  styleUrls: ['contactDialog.component.scss'],
  templateUrl: 'contactDialog.component.html',
})
export class ContatoDialogComponent {
  public dialogRef: MdDialogRef<any>;
  constructor(public dialog: MdDialogRef<any>, public contactService: ContactService) { }

  emailFC = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  nomeFC = new FormControl('', Validators.required);
  telefoneFC = new FormControl('', Validators.required);
  enderecoFC = new FormControl('', Validators.required);
  DNFC = new FormControl(new Date(), Validators.required);

  @ViewChild('imageInput') inputFile: ElementRef;

  cancel = () => this.dialog.close();
  isNew = false;

  ngOnInit() {
    if (!this.contactService.contact.nome) this.isNew = true;
  }

  changeImage(e) {
    let fr = new FileReader();
    new Promise(resolve => fr.onload = resolve)
      .then(() => {
        this.contactService.contact.foto = fr.result;
      });
    fr.readAsDataURL(e.target.files[0]);
  }

  salvar(contact) {
    if (this.isNew) {
      contact.cadastrado = new Date();
      contacts.unshift(contact);
      this.contactService.updateTable.emit();
    }
    this.dialog.close();
  }

  isValidForm() {
    let contact = this.contactService.contact;
    if (!contact) return false;
    let retorno = true;
    Object.keys(contact).forEach(function (objectKey, index) {
      var value = contact[objectKey];
      if (!value || value == '') retorno = false;
    });
    return retorno;
  }

}