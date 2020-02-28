import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTrabajoFormComponent } from './crear-trabajo-form.component';

describe('CrearTrabajoFormComponent', () => {
  let component: CrearTrabajoFormComponent;
  let fixture: ComponentFixture<CrearTrabajoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearTrabajoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTrabajoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
