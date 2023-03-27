import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrexComponent } from './trex.component';

describe('TrexComponent', () => {
  let component: TrexComponent;
  let fixture: ComponentFixture<TrexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
