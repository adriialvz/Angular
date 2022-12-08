/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Componente_sectionComponent } from './Componente_section.component';

describe('Componente_sectionComponent', () => {
  let component: Componente_sectionComponent;
  let fixture: ComponentFixture<Componente_sectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componente_sectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente_sectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
