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
import { RoutesApp, LoginGuard } from './app.routes';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MdSlideToggleModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    ContatoDialogComponent,
    ContactComponent,
    LoginComponent
  ],
  entryComponents: [ContatoDialogComponent],
  imports: [
    RoutesApp,
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdTableModule,
    MdPaginatorModule,
    MdSortModule,
    MdButtonModule,
    MdDialogModule,
    FormsModule,
    ReactiveFormsModule, MdInputModule, MdDatepickerModule, MdNativeDateModule,
    MdSlideToggleModule, MdMenuModule
  ],
  providers: [ContactService, LoginGuard, { provide: LOCALE_ID, useValue: 'pt-BR' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
