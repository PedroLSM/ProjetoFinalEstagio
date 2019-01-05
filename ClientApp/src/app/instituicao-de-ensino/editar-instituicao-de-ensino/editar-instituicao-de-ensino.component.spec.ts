import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInstituicaoDeEnsinoComponent } from './editar-instituicao-de-ensino.component';

describe('EditarInstituicaoDeEnsinoComponent', () => {
  let component: EditarInstituicaoDeEnsinoComponent;
  let fixture: ComponentFixture<EditarInstituicaoDeEnsinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarInstituicaoDeEnsinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInstituicaoDeEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
