import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent {
    constructor(public e_service : EntertainmentServiceService){}
    public ImagePath = environment.fileUrl;
    public Info:any;
    ngOnInit():void{
        this.e_service.MusicianGetInfo().subscribe((data:any)=>{
            console.log(data);
            this.Info = data;
            console.log(this.Info);
            
        })
    }
}
