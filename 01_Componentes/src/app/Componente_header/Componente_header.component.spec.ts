/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Componente_headerComponent } from './Componente_header.component';

describe('Componente_headerComponent', () => {
  let component: Componente_headerComponent;
  let fixture: ComponentFixture<Componente_headerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente_headerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente_headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
