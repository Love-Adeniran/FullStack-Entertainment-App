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
    changePic = false;

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
    public m_id:any;
    // public password:any;

    public edit = false;
    public country = '';



    ngOnInit(): void {
        this.progressBar = true;
        this.m_id =  localStorage['id'];
        let id = {musician_id: this.m_id};
        this.e_service.MusicianGetInfo(id).subscribe((data:any)=>{
            console.log(data[0]);
                this.user = data[0];
                this.e_service.user.next(data[0]);
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
        this.edit = false;
    }

    DialogChangePassword(){
        // console.log(this.user.email);
        this.initial = true;
    }
    changePassword(){
        if(this.pasWord == this.confirmPasWord){

            let password = {pass:this.pasWord, id : this.user.musician_id}
            alert("Password changed successfully");
            this.e_service.MusicianchangePassword(password).subscribe((data)=>{
                // console.log(data);
                this.initial = false;
            })
        }
        else{
            alert("Password does not match");
        }
    }
    changePicture(){
        this.changePic = true;
    }
    fileUpload(event:any){
        let file = event.target.files[0];
        let email = this.user.email;
        let formData = new FormData();
        formData.append('file', file);
        formData.append('email', email);
        this.e_service.MusicianUploadImage(formData).subscribe((data:any)=>{
            if(data.success == true){
                console.log(data);
                this.ngOnInit();
                this.changePic = true;
            }else{
                console.log(data.message);
                
            }
        })
    }


    showProfile(){
        // this.dialogOpen = true;
        this.edit =true;
    }
    saveEditedProfile(){
        this.emailControl = this.e_service.emailFormControl;
        this.getErrMessage()
        if(this.nickName==''|| this.pNumber=='' || this.country==''){
            this.generalErrorMsg = 'There is an Empty field, Kindly fill!'
        }
        else{
            let eachDetails = { nick_name:this.nickName, p_Number: this.pNumber,musician_id:this.user.musician_id, country:this.country};
            this.e_service.MusicianEditProfile(eachDetails).subscribe((data:any)=>{
                console.log(data);
                if(data.success == true){
                    this.edit= false;
                    this.ngOnInit();
                }else{
                    console.log(data.success);
                }
            })
        }
    }
    
}

    
// Compare this snippet from frontend\EntertainmentApp\src\app\services\entertainment-service.service.ts:
