/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Componente_pieComponent } from './Componente_pie.component';

describe('Componente_pieComponent', () => {
  let component: Componente_pieComponent;
  let fixture: ComponentFixture<Componente_pieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente_pieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente_pieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
