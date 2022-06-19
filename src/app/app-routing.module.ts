import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAddressComponent } from './modules/add-edit-address/add-edit-address.component';
import { AddressesComponent } from './modules/addresses/addresses.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { OrderDetailsComponent } from './modules/order-details/order-details.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { ProductsComponent } from './modules/products/products.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { RegisterComponent } from './modules/register/register.component';
import { UserComponent } from './modules/user/user.component';
const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'products',
  component: ProductsComponent
},
{
  path: 'contact-us',
  component: ContactComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'user/orders',
  component: OrdersComponent
},
{
  path: 'user/orders/:id',
  component: OrderDetailsComponent
},
{
  path: 'user/profile',
  component: ProfileComponent
},
{
  path: 'user/addresses',
  component: AddressesComponent
},
{
  path: 'user/address/add',
  component: AddEditAddressComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
