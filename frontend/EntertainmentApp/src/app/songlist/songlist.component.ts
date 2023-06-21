import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { environment } from '../environment/environment';

@Component({
    selector: 'app-songlist',
    templateUrl: './songlist.component.html',
    styleUrls: ['./songlist.component.css']
})
export class SonglistComponent {
constructor(public e_service : EntertainmentServiceService){}
    public songPath = environment.fileUrl;
    initial = false;
    public audio:any;
    // public Audio:any;
    public audioTitle= '';
    public audioType:any;
    public audioName = '';
    public userInfo:any;
    public category='';
    public musician_id='';
    public songList:any

    ngOnInit():void{
        this.e_service.MusicianGetInfo().subscribe((data:any)=>{
            console.log(data[0].musician_id);
            this.musician_id = data[0].musician_id;
            let User_id = {id:this.musician_id}
            this.e_service.MusicianGetAudio(User_id).subscribe((data:any)=>{
                console.log(data);
                this.songList =data;
                
            })
            
        })

        
            // this.e_service.user.subscribe((data:any)=>{
            //     console.log(data);
                
            //     this.userInfo = data;

            //     console.log(this.musician_id);
                
        // })
        
    }

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

        deleteAudio(id:any){
            console.log(id);
            let audio_id = {id:id}
            this.e_service.MusicianDeleteAudio(audio_id).subscribe((data:any)=>{
                console.log(data);
                this.ngOnInit();
            })
        }
    
    uploadAudio(){
        if(this.audio==null){
            console.log("No file selected");
        }else if(this.audio){
            console.log(this.audio.type);
            this.audioType =  this.audio.type;
            this.audioName = this.audio.name
            let Audio = new FormData()
            Audio.append('title', this.audioTitle)
            Audio.append('type', this.audioType)
            Audio.append('audio', this.audio);
            this.e_service.MusicianUploadAudio(Audio).subscribe((data:any)=>{
                console.log(data[0]);
                if(data[0].status == 'success'){
                    console.log('Audio Uploaded Successfully!');
                    this.ngOnInit();
                }else{
                    console.log('Audio Upload Failed!');
                }
            })
                    
                // }else{
                //     console.log('No Song Available!, Complete your Profile, and upload your Songs!');
                // }
                
        }
        
    }

}
