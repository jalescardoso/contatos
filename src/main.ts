import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

declare global {
  interface String {
    upFirstLetter: () => any;
  }
}
if (!String.prototype.upFirstLetter) {
  String.prototype.upFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
  }
}