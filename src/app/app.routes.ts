import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs/Observable';

import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

@Injectable()
export class LoginGuard implements CanActivate {
	constructor(private router: Router) { }
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		if (!localStorage.getItem('token'))
			this.router.navigate(['/login']);
		return true;
	}
}

const appRoutes: Routes = [
	{
		path: 'contacts',
		component: ContactComponent,
		canActivate: [LoginGuard]
	}, {
		path: 'login',
		component: LoginComponent
	},
	{ path: '', redirectTo: 'contacts', pathMatch: 'full' }
];

export const RoutesApp: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });