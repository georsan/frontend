import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarDesactivadarAlertasComponent } from './activar-desactivadar-alertas.component';

describe('ActivarDesactivadarAlertasComponent', () => {
  let component: ActivarDesactivadarAlertasComponent;
  let fixture: ComponentFixture<ActivarDesactivadarAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivarDesactivadarAlertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivarDesactivadarAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
