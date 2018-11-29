import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMinhaAcoesComponent } from './grafico-minha-acoes.component';

describe('GraficoMinhaAcoesComponent', () => {
  let component: GraficoMinhaAcoesComponent;
  let fixture: ComponentFixture<GraficoMinhaAcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoMinhaAcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoMinhaAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
