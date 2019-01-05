import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstadoComponent } from './update-estado.component';

describe('UpdateEstadoComponent', () => {
  let component: UpdateEstadoComponent;
  let fixture: ComponentFixture<UpdateEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
