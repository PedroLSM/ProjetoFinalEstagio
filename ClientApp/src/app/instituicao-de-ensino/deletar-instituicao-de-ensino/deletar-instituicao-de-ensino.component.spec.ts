import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarInstituicaoDeEnsinoComponent } from './deletar-instituicao-de-ensino.component';

describe('DeletarInstituicaoDeEnsinoComponent', () => {
  let component: DeletarInstituicaoDeEnsinoComponent;
  let fixture: ComponentFixture<DeletarInstituicaoDeEnsinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarInstituicaoDeEnsinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarInstituicaoDeEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
