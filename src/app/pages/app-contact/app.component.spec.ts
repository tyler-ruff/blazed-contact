import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactComponent } from './app.component';

describe('AppContactComponent', () => {
  let component: AppContactComponent;
  let fixture: ComponentFixture<AppContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
