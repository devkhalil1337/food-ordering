import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from './user/auth/authguard';
const routes: Routes = [{
	path: "",
	redirectTo: "home",
	pathMatch: "full"
}, {
	path: 'home',
	component: HomeComponent
}, {
	path: '',
	canActivate: [AuthGuard],
	loadChildren: () =>
		import('./user/user.module').then(
			(m) => m.UserModule),
}, {
	path: '',
	loadChildren: () =>
		import('./modules/core/core.module').then(
			(m) => m.CoreModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
