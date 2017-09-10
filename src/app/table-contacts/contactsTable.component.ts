import { Component, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdPaginator, MdSort, MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import contacts from '../../mock/contacts';
import { ContatoDialogComponent } from '../dialog-contact/contactDialog.component';
import { ContactService } from '../contact.service.service';

@Component({
  selector: 'contacts-table',
  styleUrls: ['contactsTable.component.scss'],
  templateUrl: 'contactsTable.component.html',
})
export class ContatosComponent {
  constructor(public dialog: MdDialog, public contactService: ContactService) { }
  displayedColumns = ['Foto', 'Nome', 'Email', 'Endereco', 'Telefone', 'Nascimento', 'Cadastrado', 'Acoes'];
  dataSource: myDataSource | null;
  contacts = contacts;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;
  ngOnInit() {
    this.dataSource = new myDataSource(this.paginator, this.sort, this.contactService);
  }

  openDialog() {
    this.dialog.open(ContatoDialogComponent);
  }

  remove(el) {
    let index = contacts.indexOf(el);
    if (index > -1) {
      contacts.splice(index, 1);
      this.contactService.updateTable.emit();
    }
  }
}

export class myDataSource extends DataSource<any> {
  constructor(private _paginator: MdPaginator, private _sort: MdSort, public contactService: ContactService) {
    super();
  }

  connect(): Observable<any[]> {
    const displayDataChanges = [
      this.contactService.updateTable,
      contacts,
      this._paginator.page,
      this._sort.mdSortChange,
    ];
    return Observable.merge(...displayDataChanges).map(() => {
      let compare = (a, b, isAsc) => {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
      }
      let data = contacts.slice();
      if (this._sort.active && this._sort.direction !== '') {
        data = data.sort((a, b) => {
          let isAsc = this._sort.direction == 'asc';
          switch (this._sort.active) {
            case 'Nome': return compare(a.nome.toLocaleLowerCase(), b.nome.toLocaleLowerCase(), isAsc);
            case 'Endereco': return compare(a.endereco.toLocaleLowerCase(), b.endereco.toLocaleLowerCase(), isAsc);
            case 'Telefone': return compare(a.telefone, b.telefone, isAsc);
            case 'Nascimento': return compare(new Date(a.nascimento), new Date(b.nascimento), isAsc);
            case 'Email': return compare(a.email.toLocaleLowerCase(), b.email.toLocaleLowerCase(), isAsc);
            case 'Cadastrado': return compare(new Date(a.cadastrado), new Date(b.cadastrado), isAsc);
            default: return 0;
          }
        });
      }
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }
}