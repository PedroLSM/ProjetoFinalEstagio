import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstagiarioComponent } from './editar-estagiario.component';

describe('EditarEstagiarioComponent', () => {
  let component: EditarEstagiarioComponent;
  let fixture: ComponentFixture<EditarEstagiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEstagiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstagiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
