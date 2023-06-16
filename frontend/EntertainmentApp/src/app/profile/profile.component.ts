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
    ErrorMsg ='';
    generalErrorMsg = '';

    public fullName = '';
    public  nickName = '';
    public pNumber = '';
    public email = '';

    public emailControl:any;
    public emailErr = '';
    public initial = false;
    public progressBar = false;
    public dialogOpen = false
    public pasWord = '';
    public confirmPasWord = '';
    public user:any;
    public password:any;


    ngOnInit(): void {
        this.progressBar = true;
        this.e_service.MusicianGetInfo().subscribe((data:any)=>{
            this.e_service.user.next(data[0]);
            this.user = data[0];
            console.log(this.user);
            this.progressBar = false; 
        })
    }

    getErrMessage() {
        this.emailErr=this.e_service.getErrorMessage()
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

    changePassword(){
        if(this.pasWord == this.confirmPasWord){
            this.password = this.pasWord;
            alert("Password changed successfully");
            // this.e_service.MusicianChangePassword(this.password).subscribe((data:string)=>{
            //     console.log(data);
            //     this.initial = false;
            // })
        }
        else{
            alert("Password does not match");
        }
    }
    showProfile(){
        this.dialogOpen = true;
    }
    saveEditedProfile(){
        this.emailControl = this.e_service.emailFormControl;
        this.getErrMessage()
        if(this.fullName==''|| this.pNumber=='' || this.email==''){
            this.generalErrorMsg = 'There is an Empty field, Kindly fill!'
        }
        else{
            let eachDetails = {full_name: this.fullName, nick_name:this.nickName,  e_mail: this.email, p_Number: this.pNumber};
        //     this.e_service.MusicianEditProfile(eachDetails).subscribe(data=>{
        //         console.log(data);
        //         if(data.success == true){
        //             this.dialogOpen = false;
        //             console.log(data);
        //             this.ngOnInit();
        //         }else{
        //             console.log(data.success);
        //         }
        //     })
        // }
    }
    
    }
}
    
// Compare this snippet from frontend\EntertainmentApp\src\app\services\entertainment-service.service.ts:
