import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaSacadosComponent } from './tabela-sacados.component';

describe('TabelaSacadosComponent', () => {
  let component: TabelaSacadosComponent;
  let fixture: ComponentFixture<TabelaSacadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaSacadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaSacadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
