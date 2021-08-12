import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaHeatComponent } from './mapa-heat.component';

describe('MapaHeatComponent', () => {
  let component: MapaHeatComponent;
  let fixture: ComponentFixture<MapaHeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaHeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaHeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
