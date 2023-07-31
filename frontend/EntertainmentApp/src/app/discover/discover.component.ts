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
    public artists:any;
    public allMsg = '';
    public artistMsg = '';
    public bandMsg = '';
    public DJMsg = '';


    ngOnInit():void{
        this.e_service.MusicianGetAll().subscribe((data:any)=>{
            if(data.success){
                this.Info = data.message;
                console.log(this.Info);

            }

            if(this.Info.length == 0){
                this.allMsg= 'No Musician Found'
                this.artists = 'No Artists Found';
            }

        })
    }

    // sayHi(){
    //     alert('hi');
    //     this.discover = false;
    // }
}
