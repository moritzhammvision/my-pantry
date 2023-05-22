import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { shoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'shoppinglist', component: shoppinglistComponent },
  { path: 'stocks', component: StocksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}