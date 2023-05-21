import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'shoppinglist', component: ShoppinglistComponent },
  { path: 'stocks', component: StocksComponent },

  {
    path: 'home',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
