import { Component } from '@angular/core';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent {

    initial = false;
    public audio:any;
    // public Audio:any;
    public audioTitle= '';
    public audioType:any;
    public audioName = '';

    open() {
        this.initial = true;
    }
    close(){
        this.initial = false;
    }
    fileUpload(event:any) {
        console.log(event.target.files[0]);
        this.audio = event.target.files[0];
        
        }
    
    uploadAudio(){
        if(this.audio==null){
            console.log("No file selected");
        }else{
            
        }
        
    }

}
