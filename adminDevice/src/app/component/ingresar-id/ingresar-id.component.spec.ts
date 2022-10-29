import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarIdComponent } from './ingresar-id.component';

describe('IngresarIdComponent', () => {
  let component: IngresarIdComponent;
  let fixture: ComponentFixture<IngresarIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
