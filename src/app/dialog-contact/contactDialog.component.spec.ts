import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ContatoDialogComponent } from './contactDialog.component';
import { DECLARATIONS, IMPORTS, PROVIDERS } from '../app.module';

describe('ContatoDialogComponent', () => {
  let component: ContatoDialogComponent;
  let fixture: ComponentFixture<ContatoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: DECLARATIONS,
      imports: IMPORTS,
      providers: PROVIDERS
    })
    .overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ContatoDialogComponent]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
