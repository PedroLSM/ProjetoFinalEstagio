import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstagiarioComponent } from './estagiario.component';

describe('EstagiarioComponent', () => {
  let component: EstagiarioComponent;
  let fixture: ComponentFixture<EstagiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstagiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstagiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
