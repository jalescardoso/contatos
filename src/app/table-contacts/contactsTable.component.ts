import { Component, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdPaginator, MdSort } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import contacts from '../../mock/contacts';

@Component({
  selector: 'contacts-table',
  styleUrls: ['contactsTable.component.scss'],
  templateUrl: 'contactsTable.component.html',
})
export class ContatosComponent {
  displayedColumns = ['Foto', 'Nome', 'Email', 'Endereco', 'Telefone', 'Nascimento', 'Cadastrado', 'Acoes'];
  dataSource: ExampleDataSource | null;
  contacts = contacts;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;
  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.paginator, this.sort);
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _paginator: MdPaginator, private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      contacts,
      this._paginator.page,
      this._sort.mdSortChange,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      let data = contacts.map(x => {
        return {
          foto: x.picture.thumbnail,
          nome: `${x.name.first} ${x.name.last}`,
          endereco: `${x.location.city} ${x.location.state.toUpperCase()}`,
          telefone: x.phone,
          nascimento: x.dob,
          email: x.email,
          cadastrado: x.registered
        }
      }).slice();

      let compare = (a, b, isAsc) => {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
      }
      if (this._sort.active && this._sort.direction !== '') {
        let teste = data.sort((a, b) => {
          let isAsc = this._sort.direction == 'asc';
          switch (this._sort.active) {
            case 'Nome': return compare(a.nome, b.nome, isAsc);
            case 'Endereco': return compare(a.endereco, b.endereco, isAsc);
            case 'Telefone': return compare(a.telefone, b.telefone, isAsc);
            case 'Nascimento': return compare(new Date(a.nascimento), new Date(b.nascimento), isAsc);
            case 'Email': return compare(a.email, b.email, isAsc);
            case 'Cadastrado': return compare(new Date(a.cadastrado), new Date(b.cadastrado), isAsc);
            default: return 0;
          }
        });

        data = teste;
      }

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() { }
}