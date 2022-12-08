import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Componente_header',
  templateUrl: './Componente_header.component.html',
  styleUrls: ['./Componente_header.component.css']
})
export class Componente_headerComponent implements OnInit {
  title = 'PrimerProyecto';
  constructor() { }

  ngOnInit() {
  }

}
