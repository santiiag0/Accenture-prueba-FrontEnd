import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { FacturaComponent } from './components/factura/factura.component';
import { MisComprasComponent } from './components/mis-compras/mis-compras.component';
import { ListarComponent } from './components/listar/listar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FacturaComponent,
    MisComprasComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
