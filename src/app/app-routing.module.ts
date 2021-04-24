import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FacturaComponent } from './components/factura/factura.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';
import { ListarComponent } from './components/listar/listar.component';
 

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'mis-compras', component: MisComprasComponent },
  { path: 'listar', component: ListarComponent },
  { path: '**',pathMatch: 'full', redirectTo: 'mis-compras'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
