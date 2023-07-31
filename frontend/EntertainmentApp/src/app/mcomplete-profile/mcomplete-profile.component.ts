import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mcomplete-profile',
  templateUrl: './mcomplete-profile.component.html',
  styleUrls: ['./mcomplete-profile.component.css']
})
export class McompleteProfileComponent {
    constructor(public e_service : EntertainmentServiceService, public dialogRef: MatDialogRef<McompleteProfileComponent>){}
    
    selected = 'None';
    disabled = true;
    max = 10;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 5;
    initial = false;
    isChecked = false;

    
    public fetchedprofile:any;
    public profile = false;
    public country = '';
    public town = '';
    public priceRange ='';
    public image ='';
    public musicStyle = '';
    public eventStyle = '';
    public musician_email = localStorage['musicianEmail'];
    public musicianInfo = {};

    ngOnInit():void{
        
    }
    

    fileUpload(event:any){
        this.image = event.target.files[0];
    }
    
    submit(){
        let musicianInfo = new FormData();
        musicianInfo.append("selected", this.selected)
        musicianInfo.append("country", this.country)
        musicianInfo.append("town", this.town)
        musicianInfo.append("musicStyle", this.musicStyle)
        musicianInfo.append("eventStyle", this.eventStyle)
        musicianInfo.append("priceRange", this.priceRange)
        musicianInfo.append("email", this.musician_email)
        musicianInfo.append("imageFile", this.image)

        this.e_service.MusicianInsertInfo(musicianInfo).subscribe((data:any) =>{
            console.log(data);
            if(data.success==true){
                this.profile = true;
            }
        })
        
        
    }
}
