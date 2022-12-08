import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/03_bienvenida/bienvenida.component';
import { CabeceraComponent } from './componentes/01_cabecera/cabecera.component';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { MenuComponent } from './componentes/02_menu/menu.component';
import { PieDePaginaComponent } from './componentes/04_pie-de-pagina/pie-de-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieDePaginaComponent,
    BienvenidaComponent,
    Componente1Component,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
