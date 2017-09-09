import { Component, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import contacts from '../../mock/contacts';

@Component({
  selector: 'contacts-table',
  styleUrls: ['contactsTable.component.scss'],
  templateUrl: 'contactsTable.component.html',
})
export class ContatosComponent {
  displayedColumns = ['Foto', 'Nome','Email', 'Endereco', 'Telefone', 'Nascimento','Cadastro'];
  dataSource: ExampleDataSource | null;
  contacts = contacts;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.paginator);
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _paginator: MdPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      contacts,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      const data = contacts.map(x => {
        return {
          foto: x.picture.thumbnail,
          nome: `${x.name.title} ${x.name.first} ${x.name.last}`,
          endereco: `${x.location.city} ${x.location.state.toUpperCase()}`,
          telefone: x.phone,
          nascimento: new Date(x.dob).toLocaleDateString(),
          email: x.email,
          cadastrado: new Date(x.registered).toLocaleDateString()
        }
      }).slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }
}