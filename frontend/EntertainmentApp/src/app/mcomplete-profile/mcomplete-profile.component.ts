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
    isChecked = false;
    public fullName:string = '';
    public nickName = '';
    public pNumber = '';
    public email = '';

    public ErrorMsg = '';
    public emailControl:any;
    public emailErr = '';
    public fetchedprofile:any;
    public profile = false;
    public country = ''
    public town = '';
    public priceRange ='';
    public image =''
    public musicianInfo = {};

    ngOnInit():void{
        
    }
    getErrMessage() {
        this.emailErr=this.e_service.getErrorMessage()
    }

    fileUpload(event:any){
        // console.log(event)
        this.image = event.target.files[0];
    }
    
    submit(){
        // let musicianInfo = {selected:this.selected,country:this.country,town:this.town,priceRange:this.priceRange,imageFile:this.image}
        let musicianInfo = new FormData();
        musicianInfo.append("selected", this.selected)
        musicianInfo.append("country", this.country)
        musicianInfo.append("town", this.town)
        musicianInfo.append("priceRange", this.priceRange)
        musicianInfo.append("imageFile", this.image)

        this.e_service.MusicianInsertInfo(musicianInfo).subscribe((data:any) =>{
            console.log(data);
            if(data.success==true){
                this.profile = true;
            }
        })
        // console.log(Info);
        
        
    }
}
