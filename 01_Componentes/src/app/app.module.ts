import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Componente_headerComponent } from './Componente_header/Componente_header.component';
import { Componente_navComponent } from './Componente_nav/Componente_nav.component';
import { Componente_pieComponent } from './Componente_pie/Componente_pie.component';
import { Componente_sectionComponent } from './Componente_section/Componente_section.component';


@NgModule({
  declarations: [					
    AppComponent,
      Componente_headerComponent,
      Componente_navComponent,
      Componente_pieComponent,
      Componente_sectionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule       //Este modulo debemos de importarlo para hacer Two Way Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
