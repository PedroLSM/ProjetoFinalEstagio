import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarCidadeComponent } from './atualizar-cidade.component';

describe('AtualizarCidadeComponent', () => {
  let component: AtualizarCidadeComponent;
  let fixture: ComponentFixture<AtualizarCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
