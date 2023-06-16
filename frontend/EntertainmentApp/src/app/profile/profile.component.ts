import { Component } from '@angular/core';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { MatDialog} from '@angular/material/dialog';
import { McompleteProfileComponent } from '../mcomplete-profile/mcomplete-profile.component';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    constructor(public e_service: EntertainmentServiceService, public dialog: MatDialog){}
    imagePath = environment.fileUrl;
    hide = true;
    public pasWord = '';
    public confirmPasWord = '';
    public user:any;
    public initial = false;
    public password:any;

    ngOnInit(): void {
        this.e_service.MusicianGetInfo().subscribe((data:any)=>{
            this.e_service.user.next(data[0]);
            this.user = data[0];
            console.log(this.user); 
        })
    }
    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(McompleteProfileComponent, {
            width: '70%',
            enterAnimationDuration,exitAnimationDuration,
        });
    }
    cancel(){
        this.initial = false;
    }
    DialogChangePassword(){
        this.initial = true;

    }
    
    }

    
// Compare this snippet from frontend\EntertainmentApp\src\app\services\entertainment-service.service.ts:
