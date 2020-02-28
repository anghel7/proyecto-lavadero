import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEgresoFormComponent } from './crear-egreso-form.component';

describe('CrearEgresoFormComponent', () => {
  let component: CrearEgresoFormComponent;
  let fixture: ComponentFixture<CrearEgresoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEgresoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEgresoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
