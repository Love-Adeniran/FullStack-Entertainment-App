import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntertainmentServiceService } from '../services/entertainment-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
constructor(public router: Router, public e_Service:EntertainmentServiceService, private _snackBar : MatSnackBar){}
    public message= '';
    public action = 'dismiss'
    public duration:any= 2;
    hide =true;
    public isChecked= false;
    public email ='';
    public pasWord = '';
    public ErrorMsg = '';
    public ResponseErrorMsg = '';
    public Response :boolean =true ;
    public emailControl:any = '';
    public emailErr = '';
    public Users:object = {}


    ngOnInit():void {
        this.emailControl = this.e_Service.emailFormControl;
        console.log(this.email,this.pasWord);
        this.getErrMessage();
    }

    getErrMessage() {
        this.emailErr = this.e_Service.getErrorMessage();
        console.log(this.emailErr);
    }
    openSnackBar(message:string,action:string) {
        this._snackBar.open(message,action, {duration:this.duration*1000});

    }

    Login(){
        if(this.email==''|| this.pasWord==''){
            this.ErrorMsg = 'Empty field(s)!, Kindly fill!'
            }
        else{
            if(this.isChecked == false){
                this.Users = {email:this.email,password:this.pasWord}
                console.log(this.Users);
                this.e_Service.GuestLogin(this.Users).subscribe((data:any)=>{
                console.log(data);
                this.Response = data.success;
                if(this.Response==true){
                    // console.log(data.success);
                    localStorage['users_jwt'] = data.jwt;
                    this.message = 'Signed In Successfully';
                    this.duration = this.duration*1000;
                    this.openSnackBar(this.message, this.action);
                    this.router.navigate(['/guestdashboard']);
                }else{
                    // console.log(data.success);
                    this.ResponseErrorMsg = data.message;
                    this.ErrorMsg = 'Incorrect Email or Password!'
                    this.message = 'Unable to Sign In!';
                    this.duration = this.duration*1000;
                    this.openSnackBar(this.message, this.action);
                    this.router.navigate(['/signin']);    
                }   
                })
            }else{
                this.Users = {email:this.email,password:this.pasWord}
                console.log(this.Users);
                this.e_Service.MusicianLogin(this.Users).subscribe((data:any)=>{
                    console.log(data);
                    
                this.Response = data.success;
                if(this.Response==true){
                    localStorage['users_jwt'] = data.jwt;
                    this.message = 'Sign In Successfully';
                    this.duration = this.duration*1000;
                    this.openSnackBar(this.message, this.action);
                    this.router.navigate(['/musiciandashboard']);
                }else{
                    this.message = 'Unable to Sign In!';
                    this.ErrorMsg = 'Incorrect Email or Password!'
                    this.duration = this.duration*1000;
                    this.openSnackBar(this.message, this.action);
                    this.router.navigate(['/signin']); 
                }    
                })
            }
        }
    }
}
