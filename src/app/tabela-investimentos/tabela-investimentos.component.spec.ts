import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaInvestimentosComponent } from './tabela-investimentos.component';

describe('TabelaInvestimentosComponent', () => {
  let component: TabelaInvestimentosComponent;
  let fixture: ComponentFixture<TabelaInvestimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaInvestimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaInvestimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
