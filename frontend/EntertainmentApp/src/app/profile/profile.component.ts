import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    constructor(public e_service: EntertainmentServiceService){}
    public user:any;
    ngOnInit(): void {
        this.e_service.MusicianGetInfo().subscribe((data:any)=>{
            console.log(data);
            console.log(data[0].full_name);
            this.e_service.user.next(data[0].full_name);
            this.user = data[0];
            console.log(this.user); 
        })
    }
}
