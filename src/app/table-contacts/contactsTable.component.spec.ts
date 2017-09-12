import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosComponent } from './contactsTable.component';
import { DECLARATIONS, IMPORTS, PROVIDERS } from '../app.module';

describe('ContatosComponent', () => {
  let component: ContatosComponent;
  let fixture: ComponentFixture<ContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS,
      imports: IMPORTS,
      providers: PROVIDERS,
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
