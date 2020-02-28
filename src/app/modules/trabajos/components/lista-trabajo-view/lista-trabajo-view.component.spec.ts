import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTrabajoViewComponent } from './lista-trabajo-view.component';

describe('ListaTrabajoViewComponent', () => {
  let component: ListaTrabajoViewComponent;
  let fixture: ComponentFixture<ListaTrabajoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTrabajoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTrabajoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
