import { Injectable, EventEmitter } from '@angular/core';
import contacts from '../mock/contacts';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ContactService {
  constructor() { }
  public contact;

  public selectContact = (contact) => {
    if (contact.nascimento)
      contact.nascimento = new Date(contact.nascimento);
    this.contact = contact || {};
  }

}
