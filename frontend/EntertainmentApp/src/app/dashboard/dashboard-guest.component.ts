import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-guest.component.html',
    styleUrls: ['./dashboard-guest.component.css']
})
export class GuestDashboardComponent {
    constructor(public e_service : EntertainmentServiceService){}

    ngOnInit():void{
        this.e_service.GuestDashBoard()
            
        
    }
}
