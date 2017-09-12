import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContactComponent } from './detail-contact.component';
import { DECLARATIONS, IMPORTS, PROVIDERS } from '../app.module';

describe('DetailContactComponent', () => {
  let component: DetailContactComponent;
  let fixture: ComponentFixture<DetailContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS,
      imports: IMPORTS,
      providers: PROVIDERS,
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
