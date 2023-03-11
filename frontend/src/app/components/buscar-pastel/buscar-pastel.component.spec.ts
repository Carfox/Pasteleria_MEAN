import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPastelComponent } from './buscar-pastel.component';

describe('BuscarPastelComponent', () => {
  let component: BuscarPastelComponent;
  let fixture: ComponentFixture<BuscarPastelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPastelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
