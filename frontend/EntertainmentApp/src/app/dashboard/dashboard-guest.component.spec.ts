import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestDashboardComponent } from './dashboard-guest.component';

describe('DashboardComponent', () => {
    let component: GuestDashboardComponent;
    let fixture: ComponentFixture<GuestDashboardComponent>;

    beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ GuestDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
