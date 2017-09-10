import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdToolbarModule, MdTableModule, MdPaginatorModule, MdSortModule,
  MdButtonModule, MdDialogModule, MdInputModule, MdDatepickerModule, MdNativeDateModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { ContatosComponent } from './table-contacts/contactsTable.component';
import { ContatoDialogComponent } from './dialog-contact/contactDialog.component';
import { ContactService } from './contact.service.service';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    ContatoDialogComponent
  ],
  entryComponents: [ContatoDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdTableModule,
    MdPaginatorModule,
    MdSortModule,
    MdButtonModule,
    MdDialogModule,
    FormsModule,
    ReactiveFormsModule, MdInputModule, MdDatepickerModule, MdNativeDateModule
  ],
  providers: [ContactService, { provide: LOCALE_ID, useValue: 'pt-BR' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
