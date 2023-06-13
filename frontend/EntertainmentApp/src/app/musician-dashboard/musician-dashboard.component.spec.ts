import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianDashboardComponent } from './musician-dashboard.component';

describe('MusicianDashboardComponent', () => {
  let component: MusicianDashboardComponent;
  let fixture: ComponentFixture<MusicianDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicianDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicianDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
