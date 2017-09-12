import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdToolbarModule, MdTableModule, MdPaginatorModule, MdSortModule, MaterialModule,
  MdButtonModule, MdDialogModule, MdInputModule, MdDatepickerModule, MdNativeDateModule
} from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { ContatosComponent } from './table-contacts/contactsTable.component';
import { ContatoDialogComponent } from './dialog-contact/contactDialog.component';
import { ContactService } from './contact.service.service';
import { RoutesApp, LoginGuard } from './app.routes';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MdSlideToggleModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { DetailContactComponent } from './detail-contact/detail-contact.component';

export const DECLARATIONS = [
  AppComponent,
  ContatosComponent,
  ContatoDialogComponent,
  ContactComponent,
  LoginComponent,
  DetailContactComponent
];

export const IMPORTS = [
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
  MdSlideToggleModule, MdMenuModule,MaterialModule
];

export const PROVIDERS = [ContactService, LoginGuard, 
  { provide: LOCALE_ID, useValue: 'pt-BR' },{ provide: APP_BASE_HREF, useValue: '/' }];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: PROVIDERS,
  entryComponents: [ContatoDialogComponent],  
  bootstrap: [AppComponent]
})
export class AppModule { }
