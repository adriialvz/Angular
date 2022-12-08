/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Componente_navComponent } from './Componente_nav.component';

describe('Componente_navComponent', () => {
  let component: Componente_navComponent;
  let fixture: ComponentFixture<Componente_navComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente_navComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente_navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
