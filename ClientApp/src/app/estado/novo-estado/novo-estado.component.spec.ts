import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoEstadoComponent } from './novo-estado.component';

describe('NovoEstadoComponent', () => {
  let component: NovoEstadoComponent;
  let fixture: ComponentFixture<NovoEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
