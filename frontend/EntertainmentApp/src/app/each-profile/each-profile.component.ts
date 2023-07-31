import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environment/environment';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-each-profile',
  templateUrl: './each-profile.component.html',
  styleUrls: ['./each-profile.component.css']
})
export class EachProfileComponent {
    constructor(public e_service:EntertainmentServiceService, public actRoute:ActivatedRoute){}
    public songPath = environment.baseUrl;
    public ImagePath = environment.fileUrl;
    public musician: any[] = [];
    public eachMusician:any={};
        public displayedColumns: string[] = ['audio','title','name'];
    public Songs:any[] = [];
    // public index = '';

    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }

    ngOnInit():void{
        // console.log(this.actRoute.snapshot.params['id']);
        let index = this.actRoute.snapshot.params['id'];
        this.e_service.MusicianGetAll().subscribe((data:any)=>{
            if(data.success){
                this.musician = data.message;
                this.eachMusician = this.musician[index];
                console.log(this.eachMusician.image);
            }
            
        })
        this.e_service.MusicianGetAudio(index).subscribe((data:any)=>{
            if(data.success){
                console.log(data.songs);
                this.Songs = data.songs;
            }
        })
    }

}
