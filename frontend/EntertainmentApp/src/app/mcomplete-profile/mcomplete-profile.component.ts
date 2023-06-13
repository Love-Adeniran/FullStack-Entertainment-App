import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';

@Component({
  selector: 'app-mcomplete-profile',
  templateUrl: './mcomplete-profile.component.html',
  styleUrls: ['./mcomplete-profile.component.css']
})
export class McompleteProfileComponent {
    constructor(public e_service : EntertainmentServiceService){}
    
    selected = 'None';
    disabled = true;
    max = 10;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 5;
    // public profile = '';
    public country = ''
    public town = '';
    public priceRange ='';
    public image =''
    public imagefile = new FormData;
    public musicianInfo = {};

    ngOnInit():void{

    }
    next(){
        // let ew= this.imagefile.append('image',this.image)
        let ew= this.imagefile.append('image',this.image)
        let musicianInfo = {selected:this.selected,country:this.country,town:this.town,priceRange:this.priceRange,imageFile:this.image}
        this.e_service.MusicianInsertInfo(musicianInfo).subscribe((data:any) =>{
            console.log(data);
            // console.log(data.success)
            if(data.success==true){
                localStorage['profile'] = 'hiiiiiii';
                
            }
        })
        // console.log(Info);
        
        
    }
}
