import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {
    constructor(public e_service : EntertainmentServiceService){}
    public Info:any;
    ngOnInit():void{
        this.e_service.GetUser().subscribe((data:any)=>{
            console.log(data.info);
            this.Info = data;
        })
    }
}
