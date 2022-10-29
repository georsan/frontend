import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdIncorrectoComponent } from './id-incorrecto.component';

describe('IdIncorrectoComponent', () => {
  let component: IdIncorrectoComponent;
  let fixture: ComponentFixture<IdIncorrectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdIncorrectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdIncorrectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
