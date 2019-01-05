import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarEstadoComponent } from './deletar-estado.component';

describe('DeletarEstadoComponent', () => {
  let component: DeletarEstadoComponent;
  let fixture: ComponentFixture<DeletarEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
