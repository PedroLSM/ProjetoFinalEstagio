import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAlunosComponent } from './mostrar-alunos.component';

describe('MostrarAlunosComponent', () => {
  let component: MostrarAlunosComponent;
  let fixture: ComponentFixture<MostrarAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
