import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCasePageComponent } from './show-case-page.component';

describe('ShowCasePageComponent', () => {
  let component: ShowCasePageComponent;
  let fixture: ComponentFixture<ShowCasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCasePageComponent]
    });
    fixture = TestBed.createComponent(ShowCasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
