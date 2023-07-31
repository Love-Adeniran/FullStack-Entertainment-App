import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { environment } from '../environment/environment';
import { Router } from '@angular/router';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
    selector: 'app-songlist',
    templateUrl: './songlist.component.html',
    styleUrls: ['./songlist.component.css']
})
export class SonglistComponent {
constructor(public e_service : EntertainmentServiceService, public router: Router){}
    public songPath = environment.fileUrl;
    initial = false;
    public message1 = '';
    public message2 = '';
    public audio:any;
    // public Audio:any;
    public audioTitle= '';
    public audioType:any;
    public audioName = '';
    public userInfo:any;
    public category='';
    public musician_id:any;
    public displayedColumns: string[] = ['audio','title', 'name', 'action'];
    public songList:any=[];

    ngOnInit():void{
        this.musician_id = {id:localStorage['id']};
        this.e_service.MusicianGetAudio(this.musician_id).subscribe((data:any)=>{
                    if(data.success){
                        console.log(data);
                        this.songList =data.songs;
                        // console.log(this.songList);
                            
                    }else{
                        this.message1 = data.message;
                    }
        })
        
    }

    isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }

    open() {
        this.initial = true;
    }
    close(){
        this.initial = false;
    }
    fileUpload(event:any) {
        // console.log(event.target.files[0]);
        this.audio = event.target.files[0];
        }

        deleteAudio(id:any){
            // console.log(id);
            let audio_id = {id:id}
            this.e_service.MusicianDeleteAudio(audio_id).subscribe((data:any)=>{
                // console.log(data);
                this.ngOnInit();
            })
        }
    
    uploadAudio(){
        if(this.audio==null){
            this.message2 = "No file selected";
            // console.log("No file selected");
        }else if(this.audio){
            // console.log(this.audio.type);
            this.audioType =  this.audio.type;
            this.audioName = this.audio.name
            let Audio = new FormData()
            Audio.append('title', this.audioTitle)
            Audio.append('type', this.audioType)
            Audio.append('name', this.audioName);
            Audio.append('id', localStorage['id']);
            Audio.append('audio', this.audio);
            this.e_service.MusicianUploadAudio(Audio).subscribe((data:any)=>{
                if(data.success==true){
                    console.log('Audio Uploaded Successfully!');
                    this.ngOnInit();
                    this.initial = false;
                }
                else{
                    console.log('Audio Upload Failed!');
                }
            })
                    
                // }else{
                //     console.log('No Song Available!, Complete your Profile, and upload your Songs!');
                // }
                
        }
        
    }

}
